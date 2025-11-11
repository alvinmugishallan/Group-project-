create database gdc;

use gdc;

create table branches (
branch_id varchar(100) primary key,
branch_name varchar(100),
branch_location varchar(100)
);
create table users (
user_id varchar(100) primary key,
user_name varchar(100),
email varchar(100) unique,
branch_id varchar(100),
foreign key (branch_id) references branches(branch_id)
);
CREATE TABLE produce (
prod_id varchar(100) PRIMARY KEY,
name VARCHAR(100),
type VARCHAR(100),
selling_price varchar(300)
);
CREATE TABLE dealers (
  D_id varchar(100) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  contact VARCHAR(20)
);
CREATE TABLE procurements (
  proc_id VARCHAR(100) PRIMARY KEY,
  prod_id VARCHAR(100),
  D_id VARCHAR(100),
  branch_id VARCHAR(100),
  tonnage DECIMAL(10,2),
  cost DECIMAL(10,2),
  date DATE,
  time TIME,
  FOREIGN KEY (prod_id) REFERENCES produce(prod_id),
  FOREIGN KEY (D_id) REFERENCES dealers(D_id),
  FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
);
CREATE TABLE buyers (
  buyer_id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(100),
  contact VARCHAR(20),
  location VARCHAR(100)
);
CREATE TABLE sales (
  sale_id VARCHAR(100) PRIMARY KEY,
  prod_id VARCHAR(100),
  buyer_id VARCHAR(100),
  user_id VARCHAR(100),
  branch_id VARCHAR(100),
  tonnage DECIMAL(10,2),
  amount_paid DECIMAL(10,2),
  date DATE,
  time TIME,
  FOREIGN KEY (prod_id) REFERENCES produce(prod_id),
  FOREIGN KEY (buyer_id) REFERENCES buyers(buyer_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
);
CREATE TABLE credit_sales (
  credit_id VARCHAR(100) PRIMARY KEY,
  buyer_id VARCHAR(100),
  prod_id VARCHAR(100),
  user_id VARCHAR(100),
  amount_due DECIMAL(10,2),
  due_date DATE,
  national_id VARCHAR(50),
  status ENUM('unpaid', 'partial', 'paid') DEFAULT 'unpaid',
  date DATE,
  FOREIGN KEY (buyer_id) REFERENCES buyers(buyer_id),
  FOREIGN KEY (prod_id) REFERENCES produce(prod_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE stock (
  stock_id VARCHAR(100) PRIMARY KEY,
  prod_id VARCHAR(100),
  branch_id VARCHAR(100),
  quantity DECIMAL(10,2) DEFAULT 0,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (prod_id) REFERENCES produce(prod_id),
  FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
);

show tables;

CREATE VIEW sales_summary AS
SELECT 
  p.name AS produce_name,
  SUM(s.tonnage) AS total_sold,
  SUM(s.amount_paid) AS total_revenue,
  MONTH(s.date) AS month,
  YEAR(s.date) AS year
FROM sales s
JOIN produce p ON s.prod_id = p.prod_id
GROUP BY p.name, YEAR(s.date), MONTH(s.date);
CREATE VIEW v_agent_performance AS
SELECT 
  u.user_name AS agent_name,
  COUNT(s.sale_id) AS total_sales,
  SUM(s.amount_paid) AS total_revenue
FROM sales s
JOIN users u ON s.user_id = u.user_id
GROUP BY u.user_name;
CREATE VIEW credit_outstanding AS
SELECT 
  b.name AS buyer_name,
  p.name AS produce_name,
  cs.amount_due,
  cs.due_date,
  cs.status
FROM credit_sales cs
JOIN buyers b ON cs.buyer_id = b.buyer_id
JOIN produce p ON cs.prod_id = p.prod_id
WHERE cs.status != 'paid';