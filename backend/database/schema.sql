CREATE TABLE vegetable(
   id                INTEGER  NOT NULL PRIMARY KEY 
  ,image             VARCHAR(117)
  ,species           VARCHAR(32) NOT NULL
  ,name              VARCHAR(54) NOT NULL
  ,latin             VARCHAR(26) NOT NULL
  ,description       VARCHAR(1983) NOT NULL
  ,advice            VARCHAR(206) NOT NULL
  ,price             NUMERIC(3,1) NOT NULL
  ,quantityAvailable INTEGER  NOT NULL
);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (1,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/l0137-1.jpg','Betterave En Mélange de Couleurs','Betterave En Mélange de Couleurs 3 Root Grex','Beta vulgaris','Cette variété produit différentes racines, pour la plupart allongées, aux couleurs de l’arc-en-ciel : rouge, orange, rose, violet... Ce pool génétique, créé par Alan Kapuler, implique trois variétés très anciennes : “Yellow Intermediate”, “Crosby Purple Egyptian” et “Lutz”.','Les betteraves, en plus d’être d’excellents légumes, sont riches en vitamines A, B1, B2, B6 et C et leurs feuilles, qui sont également une excellente source pour de nombreux minéraux et oligo-éléments [...]',0.7,43);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (2,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/p2003-1.jpg','Laitue Pommée','Laitue Pommée De Printemps Merveille des 4 Saisons','Lactuca sativa','Cette variété ancienne est vigoureuse et se cultive en toute saison. Elle produit, même durant les grosses chaleurs, des feuilles fermes, de couleur rouge vif, formant rapidement une pomme arrondie.','Aucun conseil particulier',0.5,82);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (3,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0121-1.jpg','Amaranthe à Grains','Amaranthe à Grains Plénitude K 432','Amaranthus sp.','C’est une des variétés les plus précoces et les plus productives. Elle peut atteindre 1,50 m de hauteur et offre d’imposantes panicules de couleur rose-brun ainsi que des feuilles parsemées de violet lorsqu’elles sont jeunes.','L’amarante, la reine du sans Gluten !

L’amarante, très connue pour ses qualités ornementales et dissidentes (elle a causé, la coquine, la perte de milliards de dollars à l’agro-industrie US en dévelo [...]',2.1,56);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (4,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0135-1.jpg','Amaranthe à Grains','Amaranthe à Grains Plénitude Rouge K 436','Amaranthus hypochondriacus','C’est une variété semi-naine, précoce et productive, qui offre de belles panicules rouges gorgées de graines blanches.','L’amarante, la reine du sans Gluten !

L’amarante, très connue pour ses qualités ornementales et dissidentes (elle a causé, la coquine, la perte de milliards de dollars à l’agro-industrie US en dévelo [...]',2.6,19);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (5,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/l0577-1.jpg','Aubergines Amères','Aubergine Amère Africaine Rouge','Solanum aethiopicum','Les fruits rouges de cette variété pèsent jusqu''à 120 g et se consomment jeunes. Les plantes pouvent atteindre 1,50 m de hauteur.','Aucun conseil particulier',4.5,43);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (6,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/c0524-1.jpg','Gourdes','Gourde African Kettle','Lagenaria siceraria','Cette variété produit des fruits verts de forme arrondie et de 30 à 45 cm de longueur à l’épiderme lisse. Les gourdes, non comestibles, se sèchent dans un endroit sec et ventilé et peuvent être peintes, sculptées ou transformées en divers objets.','Aucun conseil particulier',3.4,43);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (7,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0945-1.jpg','Quinoas','Quinoa Golden Afternoon','Chenopodium quinoa','Cette variété offre des graines de couleur jaune. Elle est issue d''un croisement impliquant Oro de Valle et des variétés de l''Université de Washington.','Aucun conseil particulier',0.4,47);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (8,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p5335-1.jpg','Piment Très Fort','Piment Très Fort Jaune /  De Mi-Saison Aji Yellow','Capsicum baccatum','Cette variété produit des fruits qui mûrissent de vert à jaune vif et offrent une chair peu épaisse et très fruitée. Elle est relativement tolérante aux gelées et peut être conduite comme une vivace.','Aucun conseil particulier',3.2,12);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (9,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p5079-1.jpg','Piment Doux / Poivron','Piment Doux / Poivron Rouge /  De Mi-Saison Alba Regia','Capsicum annuum','Cette variété ancienne produit une abondance de fruits pouvant atteindre 10 cm de long et dont la couleur jaune crème devient rouge à maturité.','Aucun conseil particulier',3.7,25);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (10,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p5107-1.jpg','Piment Peu Fort','Piment Peu Fort Rouge /  De Mi-Saison Alcalde','Capsicum annuum','Cette variété produit des fruits épais de 10 cm de longueur. Ils se colorent de rouge à maturité et offrent une excellente saveur. La variété est originaire du nord du Nouveau-Mexique.','Aucun conseil particulier',1.8,91);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (11,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0123-1.jpg','Amaranthe à Grains','Amaranthe à Grains Alegria','Amaranthus cruentus','Cette variété offre des panicules de couleur rouge-crème et des graines jaunes, utilisées pour le mets traditionnel mexicain ‘Alegria’. Celui-ci se prépare avec de la mélasse et des graines d’amarante éclatées. La hauteur de cette variété peut varier de 1,20 à 2,50 m en fonction des conditions de culture et de l’arrosage.','L’amarante, la reine du sans Gluten !

L’amarante, très connue pour ses qualités ornementales et dissidentes (elle a causé, la coquine, la perte de milliards de dollars à l’agro-industrie US en dévelo [...]',2.3,96);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (12,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p1899-1.jpg','Concombres','Concombre Empereur Alexandre / Kaiser Alexander','Cucumis sativus','Cette variété ancienne produit des fruits courts de 15 cm de long. L’épiderme brun et brodé à maturité complète renferme une chair blanche.','Aucun conseil particulier',4.6,18);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (13,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p4835-1.jpg','Pastèques','Pastèque Ali Baba','Citrullus lanatus','Cette variété produit des fruits allongés de 8 à 10 kg. Leur épiderme est de couleur vert-gris et leur chair rouge vif offre une très bonne saveur.','La pastèque contient près de 92 % d’eau ainsi que peu de fibres, ce qui la rend plus digeste pour les personnes aux intestins sensibles. Riche en lycopène, un antioxydant qui lui donne sa couleur roug [...]',3.8,89);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (14,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p5114-1.jpg','Piment Fort','Piment Fort Rouge /  De Mi-Saison Alma Paprika','Capsicum annuum','Cette variété offre des fruits érigés de type “piment-tomate” qui mûrissent de jaune à rouge, en passant par l’orange. Leur chair croquante et épaisse est très appréciée. Cette variété est originaire de Hongrie.','Aucun conseil particulier',3.0,89);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (15,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p6013-1.jpg','Tomate Rouge','Tomate Rouge Très Précoce Sasha Altaï','Solanum lycopersicum','Cette variété à croissance exubérante offre une abondance de fruits ronds, légèrement aplatis, et de couleur rouge vif. Ils sont très juteux et doux, à la chair dense.','Aucun conseil particulier',4.0,13);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (16,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Tomate Rose','Tomate Rose Précoce Grégori Altaï','Solanum lycopersicum','Cette variété produit des fruits de 240 à 300 g à la saveur très appréciée. Le cœur très dense permet de couper des tranches très fines.','Aucun conseil particulier',2.2,97);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (17,NULL,'Sorghos','Sorgho Black Amber Cane','Sorghum bicolor','Cette ancienne variété très précoce atteint 3 m de hauteur et produit des grains noirs. Ses cannes sont utilisées pour confectionner de la mélasse. Sorghum bicolor est une plante tinctoriale dont l’usage est assez répandu en Afrique. Ce sont les gaines des feuilles, souvent colorées de rouge que l’on utilise pour le teneur en anthocyane.','Aucun conseil particulier',0.9,47);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (18,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p7455-1.jpg','Tomate Rouge','Tomate Rouge Mi-Saison Amish Paste','Solanum lycopersicum','Cette variété ancienne est adaptée à de nombreuses conditions de culture. Elle présente un feuillage clairsemé et offre des fruits, variant d’une forme de cœur à celle d’une goutte, adaptés à la confection de conserves. Après une période de sécheresse, les fruits sont sensibles à l’éclatement en cas d’apports d’eau abondants.','Aucun conseil particulier',3.9,53);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (19,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/l0019-1.jpg','Pastèques','Pastèque Lune-Étoiles Amish','Citrullus lanatus','Cette variété au feuillage moucheté “d’étoiles” produit des fruits allongés de 6 à 12 kg. Leur épiderme vert est tacheté “d’étoiles” et de “lunes” de couleur jaune. Leur chair rouge-rosé offre une agréable saveur. Les graines sont de couleur brune.','La pastèque contient près de 92 % d’eau ainsi que peu de fibres, ce qui la rend plus digeste pour les personnes aux intestins sensibles. Riche en lycopène, un antioxydant qui lui donne sa couleur roug [...]',3.6,62);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (20,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0125-1.jpg','Amaranthe à Grains','Amaranthe à Grains Amont','Amaranthus cruentus','Cette variété de 1 à 1,2 m de haut produit des panicules de couleur jaune-bronze offrant une abondance de graines dorées idéales pour la panification.','L’amarante, la reine du sans Gluten !

L’amarante, très connue pour ses qualités ornementales et dissidentes (elle a causé, la coquine, la perte de milliards de dollars à l’agro-industrie US en dévelo [...]',0.9,70);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (21,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Piment Doux / Poivron','Piment Doux / Poivron Rouge /  De Mi-Saison Ampuis','Capsicum annuum','Cette variété ancienne produit une abondance de fruits en forme de lanterne, à la peau peu épaisse, très fripée. Leur chair fine est douce. Ils mûrissent de verts à rouges à maturité complète et sont adaptés au séchage.','Riche en vitamines C et en provitamine A, le piment présente des propriétés antioxydantes et anti-inflammatoires. Il contient également de nombreux minéraux tels que le fer et le magnésium ainsi que l [...]',1.6,10);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (22,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p0602-1.jpg','Carotte Orange','Carotte Orange Dolciva (Nantaise Améliorée)','Daucus carota','Cette variété – de type Nantaise améliorée – est une sélection de Sativa Rheinau, en Suisse, pour l’association Kultursaat. Ses longues racines cylindriques offrent une excellente saveur ainsi qu''une texture très juteuse. Peu sensible à l''éclatement, elle est adaptée pour les récoltes de saison et pour la conservation. Très grande vigueur au semis.','Aucun conseil particulier',3.6,88);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (23,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p3729-1.jpg','Laitue Pommée','Laitue Pommée De Printemps Sanguine Améliorée','Lactuca sativa','Cette variété ancienne compacte produit une belle pomme de 20 à 25 cm de diamètre aux feuilles de couleur verte mouchetées de rouge-sang vers le coeur. Elles offrent une texture tendre ainsi qu’une bonne saveur.','Aucun conseil particulier',2.9,94);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (24,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Tomate Bigarrée','Tomate Bigarrée Tardive Ananas','Solanum lycopersicum','Cette très ancienne variété offre des fruits de type “chair de bœuf”, pouvant atteindre 1 kg. Leur épiderme jaune marbré de rouge renferme une chair très ferme rappelant celle de l’ananas. Les fruits contiennent peu de graines et leur saveur est riche et douce avec une légère acidité. Le feuillage rappelle celui de la pomme de terre.','Aucun conseil particulier',0.5,53);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (25,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/p5607-1.jpg','Tomate Verte','Tomate Verte Tardive Ananas Vert / Green Pineapple','Solanum lycopersicum','Cette variété ancienne au port assez buissonnant offre de gros fruits de type “chair de bœuf”, verts marbrés de jaune. Leur chair offre une saveur très riche.','Aucun conseil particulier',1.8,0);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (26,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p4312-1.jpg','Melons','Melon Ananas à Chair Rouge','Cucumis melo','Cette variété produit une abondance de petits fruits ronds de 300 à 500 g. Leur épiderme de couleur vert-gris est légèrement moucheté de blanc. Leur chair rouge offre une texture ferme et juteuse ainsi qu’une délicieuse saveur sucrée. Cette variété peut être conduite sur un treillage.','Aucun conseil particulier',1.1,71);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (27,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p7456-1.jpg','Tomate Bigarrée','Tomate Bigarrée Mi-Saison Anawine','Solanum lycopersicum','Cette variété offre des très gros fruits de type “Ananas” de couleur jaune marquée de rouge. Certains fruits atteignent le kilo. La chair est très ferme et de couleur jaune striée de rouge, ressemblant à la chair de l’ananas. Les fruits ne sont pas sensibles à l’éclatement. Cette variété issue d’une mutation dans le jardin du CART de l’Aubrecay a été sélectionnée par Didier Meunier depuis de très nombreuses années afin de produire de très gros fruits Ananas qui n''éclatent pas. Cette mutation est vraisemblablement issue d’une hybridation spontanée entre “Red Brandywine” et “Ananas”.','Aucun conseil particulier',3.4,52);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (28,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0923-1.jpg','Blé','Blé Ondulations de Blés Anciens','Triticum sp.','Cette population a été réalisée, il y a de nombreuses années, par un paysan-boulanger passionné, à partir d’une trentaine de variétés.Un mélange idéal pour redécouvrir la biodiversité céréalière.  Afin d''obtenir un meilleur brassage génétique, il est recommandé de semer l’intégralité du sachet en une seule fois.','Aucun conseil particulier',4.6,13);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (29,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Tomate Bigarrée','Tomate Bigarrée Mi-Saison Black And Brown Boar','Solanum lycopersicum','Cette variété, au feuillage dense, produit une abondance des fruits juteux, rouge brique, zébrés de vert vif métallique. Le gel autour des semences est vert foncé et la chair sombre et épaisse offre une saveur riche.','Aucun conseil particulier',2.7,99);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (30,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p6210-1.jpg','Tomate Rouge','Tomate Cornue des Andes - Rouge Mi-saison','Solanum lycopersicum','Cette variété ancienne est l’une des plus appréciées. Elle produit des fruits de type « tomate-piment » pouvant atteindre de 15 à 18 cm de long. Avec leur chair dense et charnue, contenant peu de graines et de jus, ces fruits gardent toute leur tenue en cuisine. La tomate Cornue des Andes, ou tomate Andine Cornue, Solanum lycopersicum, est une variété ancienne, originaire d’Amérique du Sud. Elle offre des fruits allongés, sous la forme de piment rouge, et à la chair ferme reconnue pour ses qualités gustatives. De croissance semi-déterminée, cette variété de tomate de mi-saison est très productive. Les semis de tomate Cornue des Andes peuvent être réalisés de février à avril, en godets ou en plaque alvéolée, sous un abri très lumineux et à une température comprise entre 16 et 20 °C. La récolte se fait de juin à octobre. Comme toutes les tomates du jardin potager, la variété Andine Cornue est sensible au mildiou (dû à l’humidité) et à la nécrose apicale ou cul noir (généralement due à un arrosage irrégulier). Retirer délicatement les feuilles et les fruits touchés afin d’éviter que la maladie se propage sur les plants de tomates. Le meilleur moyen d’éviter le mildiou est de limiter une accumulation d’humidité avec : Il existe également des traitements préventifs bio : consoude, purin d’ortie... Pour garder une culture en bonne santé, il est conseillé de planter, entre les tomates, des plantes compagnes. Le tagète Oregon Lei Mix et le basilic Anis éloignent les nuisibles de la plantation. La taille de la tomate consiste à retirer les gourmands, des rameaux secondaires n’ayant pas encore donné de fleurs. Cette taille par égourmandage est une technique initiée par les maraîchers professionnels, dans le but d’accélérer la productivité et de faciliter la récolte. Nous déconseillons cependant de tailler les tomates, car ce travail peut occasionner des plaies et engendrer des maladies, sans compter que la cicatrisation demande beaucoup d’énergie aux plantes.','Aucun conseil particulier',3.5,88);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (31,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/55/00/a60c76f3970db37ba6f057db8c3f.jpg','Tomate Orange','Tomate Orange Mi–Saison Des Andes Orange','Solanum lycopersicum','Cette variété produit des fruits, orange et allongés, en forme de cornes – comme ceux de l’incontournable “tomate des Andes”. Leur chair, ferme et juteuse, contient peu de graines et offre une saveur idéale pour les salades ou les coulis.','Aucun conseil particulier',3.3,26);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (32,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/l0331-1.jpg','Concombres','Concombre Ankashino','Cucumis sativus','Cette variété offre des fruits de couleur verte qu’il est préférable de consommer à 15 cm de longueur. Elle est très adaptée aux climats frais et humides et est appelée Ancashino par les paysans Péruviens. C’est une variété transmise par Baker Creek Heirloom Seeds et qui a été ramenée de Chacas au Pérou par feu Jean Andrews, l’experte des capsicum aux USA.','Aucun conseil particulier',3.1,30);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (33,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/g0200-1.jpg','Courges Maxima','Courge Maxima Hubbard Anna Swartz','Cucurbita maxima','Cette variété produit des fruits gris sombre de 2,5 à 4 kg à l’épiderme très dur. Leur chair d’excellente qualité offre une saveur de patate douce.','Aucun conseil particulier',1.6,97);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (34,NULL,'Amaranthe à Grains','Amaranthe à Grains Annapurna','Amaranthus hypochondriacus','Cette variété vigoureuse et très adaptable atteint 2 m de hauteur. Elle offre des panicules de couleur verte formant de magnifiques crêtes.','L’amarante, la reine du sans Gluten !

L’amarante, très connue pour ses qualités ornementales et dissidentes (elle a causé, la coquine, la perte de milliards de dollars à l’agro-industrie US en dévelo [...]',0.4,85);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (35,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/default/product.png','Melons','Melon Queen Anne’s Pocket','Cucumis melo','Cette variété, qui se cultive aisément sur des treillages, offre des fruits presque ronds de 7 cm de diamètre. Leur épiderme velouté est jaune et orange. Avant tout cultivés pour leur intense parfum, leur chair blanche est pratiquement sans saveur.','Aucun conseil particulier',1.9,93);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (36,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Aubergines','Aubergine Antigua','Solanum melongena','Cette variété produit des fruits panachés de blanc et de violet dont la chair blanche offre une texture tendre ainsi qu’une saveur douce. Cette variété à fort développement présente une croissance vigoureuse.','Aucun conseil particulier',1.0,57);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (37,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p1824-1.jpg','Concombres','Cucumis anguria','Cucumis anguria','Cette espèce produit des fruits exotiques, de la grosseur d’un oeuf de poule et hérissés tels des bogues de marron, très original. Ils se consomment immatures et peuvent être confits au vinaigre. Pelés et cuits, ils offrent un excellent goût de courgette.','Aucun conseil particulier',3.8,24);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (38,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/l0298-1.jpg','Aubergines','Aubergine Ao Daimaru','Solanum melongena','Cette variété originaire du Japon offre des fruits en forme de globe à base aplatie, de couleur vert clair. La chair est dense et devient crémeuse à la cuisson, révélant une saveur riche.','Aucun conseil particulier',4.5,73);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (39,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Aubergines','Aubergine Apple Green','Solanum melongena','Cette variété au port compact produit une abondance de fruits ovales, de couleur vert pâle. L''épiderme peu épais renferme une chair blanche et tendre à la saveur très douce.','L’aubergine est composée à 92 % d’eau et présente une forte teneur en fibre qui contribue à un bon fonctionnement intestinal. Elle est riche en vitamines du groupe B : B3, B6 et B9, ainsi qu’en vitami [...]',1.9,95);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (40,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p1890-1.jpg','Concombres','Concombre Richmond Green Apple','Cucumis sativus','Les petits fruits allongés de couleur vert clair brunissent à maturité complète et ont la taille d’une pomme. Leur chair verte et croquante offre une saveur très douce.','Aucun conseil particulier',4.3,73);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (41,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/p1814-1.jpg','Concombres','Concombre Crystal Apple','Cucumis sativus','Cette ancienne variété, très rustique, offre une abondance de petits fruits, de la taille d’une pomme, proches de la variété “Lemon”. Ils possèdent un épiderme blanc crème, une saveur douce et sont très croquants. Les fruits se consomment crus, farcis, ou encore conservés au vinaigre.','Aucun conseil particulier',2.6,79);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (42,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/f0153-1.jpg','Gourdes','Gourde Big Apple / Speckled Apple','Lagenaria siceraria','Cette variété produit des fruits en forme de grosse pomme de 15 à 20 cm de long. Leur épiderme est vert foncé moucheté de blanc. Ils se sèchent dans un endroit sec et ventilé. Les gourdes, non comestibles, se sèchent dans un endroit sec et ventilé et peuvent être peintes, sculptées ou transformées en divers objets.','Aucun conseil particulier',2.4,73);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (43,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Tomate Verte','Tomate Verte Mi-Saison Emerald Apple','Solanum lycopersicum','Cette variété offre de très gros fruits verts d’excellente saveur. Ils peuvent peser jusqu’à 700 g.','Aucun conseil particulier',3.0,76);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (44,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/default/product.png','Tomate Jaune','Tomate Jaune Mi-Saison Summer Cider Apricot','Solanum lycopersicum','Cette variété offre de gros fruits charnus, côtelés aux épaules, et dont la chair, orangée et voilée de rose, est délicieusement sucrée et rappelle la mangue. Plant à feuille de pomme de terre et très bon rendement.','Aucun conseil particulier',4.4,54);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (45,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Maïs Doux','Maïs Doux En Mélange de Couleurs Arc En Ciel Inca','Zea mays','Cette variété produit des épis de 20 à 30 cm aux grains multicolores et sucrés. Ses tiges et ses feuilles sont parfois violettes. Cette variété robuste peut atteindre 3 m de haut.','Le maïs contient de nombreuses vitamines du groupe B en quantité 2 à 3 fois supérieure que dans les autres légumes frais. Il renferme également de la vitamine C, des oligo-éléments et beaucoup de miné [...]',1.7,42);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (46,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/m0021-1.jpg','Carottes en mélange','Carottes En Mélange Arc en ciel de Carottes','Daucus carota','Un mélange détonnant de toutes les couleurs d''épidermes et de chairs - blanc, jaune, orange, rouge et violet - grâce à une sélection de 9 variétés : Blanche De Küttingen, Dolciva, De Colmar à Coeur Rouge, Rodelika, Demi longue de Danvers, Gniff, Jaune du Doubs, Berlicum et Flakee.','La carotte est très riche en vitamines, sels minéraux et oligoéléments. Elle contient du carotène qui permet d’améliorer la qualité de la peau ainsi que la vision. La carotte a des vertus adoucissante [...]',4.1,20);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (47,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/default/blank.png','Concombres','Concombre Arménien Arménien Painted Serpent','Cucumis melo sp. flexuosus','Cette variété produit de très longs fruits cylindriques, de couleur vert clair avec de rainures longitudinales. Ils offrent une saveur douce jamais amère, légèrement sucrée et une texture croustillante. Les fruits peuvent atteindre 1 m de longueur mais il est préférable de les récolter un peu plus tôt.','Aucun conseil particulier',4.7,88);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (48,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/default/product.png','Concombres','Concombre Arola','Cucumis Sativus','Cette variété, très résistante aux maladies et destinée à la culture sous serre, offre de longs fruits d’un vert moyen à foncé, à l’épiderme ferme et légèrement parsemé de picots. Les fruits sont formés principalement aux tiges secondaires qui ne doivent pas être supprimées, mais être coupées après la mise à fruits.','Aucun conseil particulier',4.6,88);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (49,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/default/product.png','Arroches','Arroches En mélange de couleurs','Atriplex hortensis','Ce mélange propose diverses variétés rustiques de la famille des Chénopodiacées aux feuilles de différentes couleurs qui se consomment crues ou cuites comme des épinards.','Aucun conseil particulier',3.3,30);
INSERT INTO vegetable(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (50,NULL,'Pastèques','Pastèque Astrakhanski','Citrullus lanatus','Cette variété, précoce et idéale pour toutes les conditions de culture, produit des fruits arrondis de 30 cm de diamètre très sucrés à l''épiderme lisse, vert foncé moucheté de vert clair. Leur chair, ferme et juteuse, offre une délicieuse saveur.','La pastèque contient près de 92 % d’eau ainsi que peu de fibres, ce qui la rend plus digeste pour les personnes aux intestins sensibles. Riche en lycopène, un antioxydant qui lui donne sa couleur roug [...]',1.6,27);


CREATE TABLE recette(
   id                INTEGER  NOT NULL PRIMARY KEY
  ,image             VARCHAR(117)
  ,species           VARCHAR(32) NOT NULL
  ,name              VARCHAR(54) NOT NULL
  ,latin             VARCHAR(26) NOT NULL
  ,description       VARCHAR(1983) NOT NULL
  ,advice            VARCHAR(206) NOT NULL
  ,price             NUMERIC(3,1) NOT NULL
  ,quantityAvailable INTEGER  NOT NULL
);
INSERT INTO recette(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (1,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/l0137-1.jpg','Betterave En Mélange de Couleurs','Betterave En Mélange de Couleurs 3 Root Grex','Beta vulgaris','Cette variété produit différentes racines, pour la plupart allongées, aux couleurs de l’arc-en-ciel : rouge, orange, rose, violet... Ce pool génétique, créé par Alan Kapuler, implique trois variétés très anciennes : “Yellow Intermediate”, “Crosby Purple Egyptian” et “Lutz”.','Les betteraves, en plus d’être d’excellents légumes, sont riches en vitamines A, B1, B2, B6 et C et leurs feuilles, qui sont également une excellente source pour de nombreux minéraux et oligo-éléments [...]',0.7,43);
INSERT INTO recette(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (2,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_medium_thumbnail/p2003-1.jpg','Laitue Pommée','Laitue Pommée De Printemps Merveille des 4 Saisons','Lactuca sativa','Cette variété ancienne est vigoureuse et se cultive en toute saison. Elle produit, même durant les grosses chaleurs, des feuilles fermes, de couleur rouge vif, formant rapidement une pomme arrondie.','Aucun conseil particulier',0.5,82);
INSERT INTO recette(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (3,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0121-1.jpg','Amaranthe à Grains','Amaranthe à Grains Plénitude K 432','Amaranthus sp.','C’est une des variétés les plus précoces et les plus productives. Elle peut atteindre 1,50 m de hauteur et offre d’imposantes panicules de couleur rose-brun ainsi que des feuilles parsemées de violet lorsqu’elles sont jeunes.','L’amarante, la reine du sans Gluten !

L’amarante, très connue pour ses qualités ornementales et dissidentes (elle a causé, la coquine, la perte de milliards de dollars à l’agro-industrie US en dévelo [...]',2.1,56);
INSERT INTO recette(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (4,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0135-1.jpg','Amaranthe à Grains','Amaranthe à Grains Plénitude Rouge K 436','Amaranthus hypochondriacus','C’est une variété semi-naine, précoce et productive, qui offre de belles panicules rouges gorgées de graines blanches.','L’amarante, la reine du sans Gluten !

L’amarante, très connue pour ses qualités ornementales et dissidentes (elle a causé, la coquine, la perte de milliards de dollars à l’agro-industrie US en dévelo [...]',2.6,19);
INSERT INTO recette(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (5,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/l0577-1.jpg','Aubergines Amères','Aubergine Amère Africaine Rouge','Solanum aethiopicum','Les fruits rouges de cette variété pèsent jusqu''à 120 g et se consomment jeunes. Les plantes pouvent atteindre 1,50 m de hauteur.','Aucun conseil particulier',4.5,43);
INSERT INTO recette(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (6,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/c0524-1.jpg','Gourdes','Gourde African Kettle','Lagenaria siceraria','Cette variété produit des fruits verts de forme arrondie et de 30 à 45 cm de longueur à l’épiderme lisse. Les gourdes, non comestibles, se sèchent dans un endroit sec et ventilé et peuvent être peintes, sculptées ou transformées en divers objets.','Aucun conseil particulier',3.4,43);
INSERT INTO recette(id,image,species,name,latin,description,advice,price,quantityAvailable) VALUES (7,'https://kokopelli-semences.fr/media/cache/resolve/shop_product_large_thumbnail/g0945-1.jpg','Quinoas','Quinoa Golden Afternoon','Chenopodium quinoa','Cette variété offre des graines de couleur jaune. Elle est issue d''un croisement impliquant Oro de Valle et des variétés de l''Université de Washington.','Aucun conseil particulier',0.4,47);