const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.execute('SELECT * FROM admin_users WHERE email = ? AND is_active = TRUE', [email]);
    if (!rows.length) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    await pool.execute('UPDATE admin_users SET last_login = NOW() WHERE id = ?', [user.id]);

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    res.json({ success: true, token, user: { id: user.id, username: user.username, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.register = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const hash = await bcrypt.hash(password, 12);
    const [result] = await pool.execute(
      'INSERT INTO admin_users (username, email, password_hash, role) VALUES (?, ?, ?, ?)',
      [username, email, hash, role || 'editor']
    );
    res.status(201).json({ success: true, message: 'Admin created', id: result.insertId });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') return res.status(400).json({ success: false, message: 'Email or username already exists' });
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getFaculty = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM faculty WHERE is_active = TRUE ORDER BY display_order ASC, id ASC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getTestimonials = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM testimonials WHERE is_approved = TRUE ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getStats = async (req, res) => {
  try {
    const [[admissions]] = await pool.execute('SELECT COUNT(*) as total FROM admissions');
    const [[contacts]] = await pool.execute('SELECT COUNT(*) as total FROM contacts');
    const [[news]] = await pool.execute('SELECT COUNT(*) as total FROM news_events WHERE is_published = TRUE');
    const [[pending]] = await pool.execute("SELECT COUNT(*) as total FROM admissions WHERE status = 'pending'");
    res.json({ success: true, data: { admissions: admissions.total, contacts: contacts.total, news: news.total, pendingAdmissions: pending.total } });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
