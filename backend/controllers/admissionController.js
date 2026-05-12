const { pool } = require('../config/db');
const { insertRecord, readCollection } = require('../config/localStore');
const { validationResult } = require('express-validator');

exports.submitAdmission = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: 'Please complete all required admission fields.', errors: errors.array() });
  }

  const { student_name, parent_name, email, phone, grade_applying, date_of_birth, address, previous_school, message } = req.body;
  const payload = {
    student_name,
    parent_name,
    email,
    phone,
    grade_applying,
    date_of_birth,
    address: address || null,
    previous_school: previous_school || null,
    message: message || null,
    status: 'new',
  };

  try {
    const [result] = await pool.execute(
      'INSERT INTO admissions (student_name, parent_name, email, phone, grade_applying, date_of_birth, address, previous_school, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [student_name, parent_name, email, phone, grade_applying, date_of_birth, payload.address, payload.previous_school, payload.message]
    );
    return res.status(201).json({ success: true, message: 'Admission inquiry submitted successfully.', id: result.insertId });
  } catch (databaseError) {
    try {
      const record = await insertRecord('admissions', payload);
      return res.status(201).json({ success: true, message: 'Admission inquiry saved successfully.', id: record.id, storage: 'local' });
    } catch (fallbackError) {
      console.error(fallbackError);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};

exports.getAdmissions = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM admissions ORDER BY created_at DESC');
    return res.json({ success: true, data: rows });
  } catch (databaseError) {
    try {
      const rows = await readCollection('admissions');
      return res.json({ success: true, data: rows, storage: 'local' });
    } catch (fallbackError) {
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }
};

exports.updateAdmissionStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await pool.execute('UPDATE admissions SET status = ? WHERE id = ?', [status, id]);
    res.json({ success: true, message: 'Status updated' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
