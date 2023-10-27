create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null
);


INSERT INTO item(title) VALUES ("toto1"), ("toto2"), ("toto3");

create table vegetable (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null
);

INSERT INTO vegetable(title) VALUES ("tomate"), ("carotte"), ("salade");

CREATE TABLE legumes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    image VARCHAR(255),
    species VARCHAR(255),
    name VARCHAR(255),
    latin VARCHAR(255),
    description TEXT,
    advice TEXT,
    price DECIMAL(10, 2),
    quantityAvailable INT
);
INSERT INTO legumes(image, species, name, latin, description, advice, price, quantityAvailable) VALUES
("tomate.jpg", "Solanum lycopersicum", "Tomate", "Solanum lycopersicum", "La tomate est une espèce de plantes herbacées de la famille des Solanacées, originaire du Nord-Ouest de l'Amérique du Sud1, largement cultivée pour son fruit. Le terme désigne aussi ce fruit charnu.", "La tomate est un fruit qui se consomme comme un légume. Elle est riche en vitamines et en minéraux. Elle est aussi très peu calorique. Elle est donc idéale pour garder la ligne tout en se faisant plaisir.", 2.50, 10),
("carotte.jpg", "Daucus carota", "Carotte", "Daucus carota", "La carotte est une plante bisannuelle de la famille des Apiacées, largement cultivée pour sa racine pivotante charnue, comestible, de couleur généralement orangée, consommée comme légume.", "La carotte est un légume très riche en vitamines et en minéraux. Elle est aussi très peu calorique. Elle est donc idéale pour garder la ligne tout en se faisant plaisir.", 1.50, 10),
("salade.jpg", "Lactuca sativa", "Salade", "Lactuca sativa", "La salade est une plante potagère annuelle de la famille des Astéracées, largement cultivée pour ses feuilles tendres consommées comme légume.", "La salade est un légume très riche en vitamines et en minéraux. Elle est aussi très peu calorique. Elle est donc idéale pour garder la ligne tout en se faisant plaisir.", 1.50, 10);
