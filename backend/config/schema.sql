-- School Website Database Schema
-- Run this file to set up the database

CREATE DATABASE IF NOT EXISTS school_website;
USE school_website;

-- Admissions table
CREATE TABLE IF NOT EXISTS admissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100) NOT NULL,
  parent_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  grade_applying VARCHAR(10) NOT NULL,
  date_of_birth DATE NOT NULL,
  address TEXT,
  previous_school VARCHAR(200),
  message TEXT,
  status ENUM('pending', 'reviewing', 'accepted', 'rejected') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- News/Events table
CREATE TABLE IF NOT EXISTS news_events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(220) NOT NULL UNIQUE,
  content TEXT NOT NULL,
  excerpt VARCHAR(500),
  category ENUM('news', 'event', 'achievement', 'announcement') DEFAULT 'news',
  image_url VARCHAR(500),
  event_date DATE,
  is_published BOOLEAN DEFAULT TRUE,
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Faculty table
CREATE TABLE IF NOT EXISTS faculty (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  designation VARCHAR(150) NOT NULL,
  department VARCHAR(100),
  qualification VARCHAR(300),
  experience_years INT,
  bio TEXT,
  image_url VARCHAR(500),
  email VARCHAR(150),
  is_active BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  author_name VARCHAR(100) NOT NULL,
  author_role VARCHAR(100),
  content TEXT NOT NULL,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  image_url VARCHAR(500),
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('super_admin', 'admin', 'editor') DEFAULT 'editor',
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  category VARCHAR(100),
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  display_order INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed some initial data
INSERT INTO news_events (title, slug, content, excerpt, category, is_featured) VALUES
('Annual Sports Day 2025', 'annual-sports-day-2025', 'Our Annual Sports Day was a grand success with over 500 students participating in various events showcasing their athletic prowess and team spirit.', 'A grand celebration of athleticism and team spirit.', 'event', TRUE),
('School Achieves 100% Board Results', 'school-100-percent-board-results', 'We are proud to announce that all our students have passed their board examinations with flying colors. 15 students scored above 95%.', 'All students pass board exams; 15 score above 95%.', 'achievement', TRUE),
('New Science Lab Inauguration', 'new-science-lab-inauguration', 'State-of-the-art science laboratories have been inaugurated to provide hands-on learning experiences for our students.', 'Cutting-edge labs for hands-on learning.', 'announcement', FALSE);

INSERT INTO faculty (name, designation, department, qualification, experience_years, bio) VALUES
('Dr. Priya Sharma', 'Principal', 'Administration', 'Ph.D. in Education, M.Ed', 20, 'Dr. Sharma has dedicated 20 years to transforming young minds with her innovative teaching philosophy.'),
('Prof. Rajesh Kumar', 'HOD - Sciences', 'Science', 'M.Sc Physics, B.Ed', 15, 'An enthusiastic physicist who makes complex concepts simple and fun for every student.'),
('Ms. Anjali Singh', 'HOD - Mathematics', 'Mathematics', 'M.Sc Mathematics, B.Ed', 12, 'Passionate about making mathematics accessible and enjoyable for all students.'),
('Mr. Vikram Patel', 'Sports Director', 'Physical Education', 'M.P.Ed, National Level Athlete', 10, 'Former national-level athlete bringing championship mentality to our sports programs.');

INSERT INTO testimonials (author_name, author_role, content, rating, is_approved) VALUES
('Arjun Mehta', 'Alumni, IIT Delhi Student', 'The foundation I received here was exceptional. The teachers went beyond textbooks to instill critical thinking skills that prepared me for IIT.', 5, TRUE),
('Priya Nair', 'Parent', 'My daughter has blossomed here. The holistic approach balancing academics, arts, and sports is exactly what every child needs.', 5, TRUE),
('Rohit Verma', 'Class 12 Student', 'The campus life, the teachers, the opportunities - everything here pushes you to be your best self every single day.', 5, TRUE);
