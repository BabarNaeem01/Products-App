CREATE DATABASE IF NOT EXISTS practice_db;
USE practice_db;

-- Inventory
DROP TABLE IF EXISTS inventory;
CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    quantity INT NOT NULL DEFAULT 0
);
INSERT INTO inventory (item_name, quantity) VALUES
    ('Kashmiri Chai Pack', 25),
    ('Multani Mitti Bag', 40),
    ('Basmati Rice 5kg', 18),
    ('Peshawari Chappal Pair', 12);

-- Tickets
DROP TABLE IF EXISTS tickets;
CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    event VARCHAR(150) NOT NULL,
    seat_no VARCHAR(10) NOT NULL
);
INSERT INTO tickets (user_name, event, seat_no) VALUES
    ('Ahsan Raza', 'Qawwali Night', 'A12'),
    ('Sadia Khan', 'Tech Summit', 'B07'),
    ('Bilal Haider', 'Cricket Final', 'C21');

-- Orders
DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    food_item VARCHAR(120) NOT NULL,
    price DECIMAL(10,2) NOT NULL
);
INSERT INTO orders (customer_name, food_item, price) VALUES
    ('Hira Shah', 'Chicken Karahi', 1450.00),
    ('Usman Ali', 'Chapli Kabab', 750.00),
    ('Nimra Yousuf', 'Beef Biryani', 520.00);

-- Products
DROP TABLE IF EXISTS products;
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(120) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL DEFAULT 0
);
INSERT INTO products (product_name, price, stock) VALUES
    ('Hunza Honey Jar', 980.00, 30),
    ('Truck Art Mug', 650.00, 55),
    ('Ajrak Shawl', 1850.00, 20);

-- Bookings
DROP TABLE IF EXISTS bookings;
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    guest_name VARCHAR(100) NOT NULL,
    room_no VARCHAR(10) NOT NULL,
    check_in DATE NOT NULL
);
INSERT INTO bookings (guest_name, room_no, check_in) VALUES
    ('Faraz Malik', '305', '2026-03-28'),
    ('Maham Iqbal', '112', '2026-03-29'),
    ('Taimoor Khan', '418', '2026-03-30');

-- Students
DROP TABLE IF EXISTS students;
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    marks INT NOT NULL
);
INSERT INTO students (id, name, marks) VALUES
    (1, 'Sara Ahmed', 87),
    (2, 'Hamza Junaid', 76),
    (3, 'Zainab Noor', 92);
