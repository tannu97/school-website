const { pool } = require('../config/db');
const { insertRecord, readCollection } = require('../config/localStore');
const { validationResult } = require('express-validator');

exports.submitContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: 'Please complete all required contact fields.', errors: errors.array() });
  }

  const { name, email, phone, subject, message } = req.body;
  const payload = { name, email, phone: phone || null, subject, message };

  try {
    const [result] = await pool.execute(
      'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)',
      [name, email, payload.phone, subject, message]
    );
    return res.status(201).json({ success: true, message: 'Message sent successfully.', id: result.insertId });
  } catch (databaseError) {
    try {
      const record = await insertRecord('contacts', payload);
      return res.status(201).json({ success: true, message: 'Message saved successfully.', id: record.id, storage: 'local' });
    } catch (fallbackError) {
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};

exports.getContacts = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM contacts ORDER BY created_at DESC');
    return res.json({ success: true, data: rows });
  } catch (databaseError) {
    try {
      const rows = await readCollection('contacts');
      return res.json({ success: true, data: rows, storage: 'local' });
    } catch (fallbackError) {
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};
