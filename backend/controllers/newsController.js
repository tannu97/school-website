const { pool } = require('../config/db');

exports.getNews = async (req, res) => {
  try {
    const { category, featured } = req.query;
    let query = 'SELECT * FROM news_events WHERE is_published = TRUE';
    const params = [];
    if (category) { query += ' AND category = ?'; params.push(category); }
    if (featured === 'true') { query += ' AND is_featured = TRUE'; }
    query += ' ORDER BY created_at DESC';
    const [rows] = await pool.execute(query, params);
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM news_events WHERE slug = ? AND is_published = TRUE', [req.params.slug]);
    if (!rows.length) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
