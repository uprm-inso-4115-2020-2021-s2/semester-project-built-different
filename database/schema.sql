CREATE TABLE Customer
(
  c_id SERIAL NOT NULL,
  name VARCHAR(150) NOT NULL,
  password VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  PRIMARY KEY (c_id),
  UNIQUE (email)
);

CREATE TABLE Contact_Information
(
  phone VARCHAR(15) NOT NULL,
  payment_type VARCHAR(25) NOT NULL,
  ci_id SERIAL NOT NULL,
  c_id INT NOT NULL,
  PRIMARY KEY (ci_id, c_id),
  FOREIGN KEY (c_id) REFERENCES Customer(c_id)
);

CREATE TABLE Payment
(
  p_id SERIAL NOT NULL,
  status VARCHAR(20) NOT NULL,
  payment_date DATE NOT NULL,
  amount FLOAT NOT NULL,
  c_id INT NOT NULL,
  PRIMARY KEY (p_id, c_id),
  FOREIGN KEY (c_id) REFERENCES Customer(c_id)
);

CREATE TABLE Order_Details
(
  o_id SERIAL NOT NULL,
  order_date DATE NOT NULL,
  status VARCHAR NOT NULL,
  comment VARCHAR(150) NOT NULL,
  order_total FLOAT NOT NULL,
  c_id INT NOT NULL,
  PRIMARY KEY (o_id, c_id),
  FOREIGN KEY (c_id) REFERENCES Customer(c_id)
);

CREATE TABLE Products
(
  pd_id SERIAL NOT NULL,
  name VARCHAR(25) NOT NULL,
  description VARCHAR(150) NOT NULL,
  stock INT NOT NULL,
  price FLOAT NOT NULL,
  PRIMARY KEY (pd_id)
);

CREATE TABLE Station
(
  name VARCHAR(25) NOT NULL,
  s_id SERIAL NOT NULL,
  description VARCHAR(150) NOT NULL,
  PRIMARY KEY (s_id)
)

CREATE TABLE Categories
(
  cat_id SERIAL NOT NULL,
  name VARCHAR(25) NOT NULL,
  PRIMARY KEY (cat_id)
)

CREATE TABLE Categories_Products
(
  cat_id INT NOT NULL,
  pd_id INT NOT NULL,
  PRIMARY KEY (cat_id, pd_id),
  FOREIGN KEY (cat_id) REFERENCES Categories(cat_id),
  FOREIGN KEY (pd_id) REFERENCES Products(pd_id)
)

CREATE TABLE Order_Products
(
  quantity INT NOT NULL,
  pd_id INT NOT NULL,
  PRIMARY KEY (pd_id),
  FOREIGN KEY (pd_id) REFERENCES Products(pd_id)
);

CREATE TABLE Station_Products
(
  s_id INT NOT NULL,
  pd_id INT NOT NULL,
  PRIMARY KEY (s_id, pd_id),
  FOREIGN KEY (s_id) REFERENCES Station(s_id),
  FOREIGN KEY (pd_id) REFERENCES Products(pd_id)
);
