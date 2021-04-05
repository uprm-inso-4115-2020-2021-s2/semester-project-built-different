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
);

CREATE TABLE Categories
(
  cat_id SERIAL NOT NULL,
  name VARCHAR(25) NOT NULL,
  PRIMARY KEY (cat_id)
);

CREATE TABLE Categories_Products
(
  cat_id INT NOT NULL,
  pd_id INT NOT NULL,
  PRIMARY KEY (cat_id, pd_id),
  FOREIGN KEY (cat_id) REFERENCES Categories(cat_id),
  FOREIGN KEY (pd_id) REFERENCES Products(pd_id)
);

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

INSERT INTO Products (name, description, stock, price) Values
(
  'Pedazo de pizza',
  'Pedazo de pizza de queso o pepperonni',
  10,
  1.5
),
(
  'Comida china',
  'Combinacion de comida china que incluye arroz, proteina y papas fritas',
  13,
  9
),
(
  'Burrito',
  'Burrito de una proteina',
  8,
  3.5
),
(
  'Botella de Agua',
  'Botella de agua fria',
  20,
  1
);

INSERT INTO Customer (name, password, email) Values
(
  'Luis',
  'luiscaro1',
  'luis.caro1@upr.edu'
),
(
  'Anthony',
  'anthonymarquez1',
  'anthony.marquez@upr.edu'
),
(
  'Nomar',
  'nomarmedina1',
  'nomar.medina@upr.edu'
),
(
  'Carolina',
  'carolinasantiago1',
  'carolina.santiago5@upr.edu'
);

INSERT INTO Contact_Information (phone, payment_type, c_id) VALUES
(
  '7874346930',
  'Visa',
  1
),
(
  '7879303856',
  'Visa',
  2
),
(
  '7874902404',
  'Mastercard',
  3
),
(
  '7874872853',
  'Visa',
  4
);

INSERT INTO Station (name, description) Values
(
  'Estacion 1',
  'Estacion de comida criolla, desayunos y sopas'
),
(
  'Estacion 2',
  'Estacion de pizza, pasta, sandwiches y burritos'
),
(
  'Estacion 3',
  'Estacion de postres, cafes, batidas, etc'
),
(
  'Estacion 4',
  'Estacion de comida china'
),
(
  'Estacion 5',
  'Estacion de bebidas'
);

INSERT INTO Categories (name) VALUES 
(
  'Comida Criolla'
),
(
  'Comida Italiana'
),
(
  'Comida Americana'
),
(
  'Comida China'
),
(
  'Comida Mexicana'
),
(
  'Comida Sopas'
),
(
  'Comida Postres'
),
(
  'Comida Bebidas'
);

INSERT INTO Categories_Products (cat_id, pd_id) VALUES
(
  2,
  1
),
(
  4,
  2
),
(
  5,
  3
),
(
  8,
  4
);

INSERT INTO Station_Products (s_id, pd_id) VALUES
(
  2,
  1
),
(
  4,
  2
),
(
  2,
  3
),
(
  5,
  4
);
