DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE bamazon(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL (10, 2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM bamazon;

INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("The Killing Joke", "Graphic Novels", 17.99, 10);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Butch Cassidy and the Sundance Kid", "Films", 14.99, 20);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Playstation 4", "Video Games", 349.99, 5);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Dark Souls 3", "Video Games", 19.99, 2);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("The Witcher: The Time of Contempt", "Books", 15.00, 25);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Futurama The Complete Series", "Television", 99.99, 15);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Spider-Man: Homecomming", "Films", 19.99, 9);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Sony Bravia 46-inch Television", "Electronics", 448.99, 50);
INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Sandman Vol. 1", "Graphic Novels", 19.99, 7);

INSERT INTO bamazon (product_name, department_name, price, stock_quantity)
VALUES ("Aquaman Vol. 1", "Trash", .50, 1000);