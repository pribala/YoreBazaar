
USE yorebazaar;
 


INSERT INTO departments
  (dept_name, overhead_costs)
 VALUES
  ("Books & Audible", 100);
INSERT INTO departments
  (dept_name, overhead_costs) 
VALUES
  ("Electronics", 150),("Sports & Outdoors",290),("Lawn & Garden",78),("Industrial & Scientific",780),("Home & Kitchen",987),("Grocery",78),("Beauty & Personal Care",80);
-- Creates new rows containing data in all named columns --

INSERT INTO products
  (product_name,price,product_image,quantity, DepartmentId)
VALUES
  ("NPole Tablet", 59.99, "https://cnet1.cbsistatic.com/img/BcQSiKWK0UjWgZBkZra-6g2qA6k=/fit-in/970x0/2015/02/06/1f8fedef-0e20-423a-8da0-da45fca27c12/yoga-tablet-2-with-windows-8900.jpg", 100, 2),
  ("Forks Over knives", 11.89, "https://media.istockphoto.com/photos/stack-of-books-picture-id507311349?k=6&m=507311349&s=612x612&w=0&h=eOFF8x1-CvOSvV6hIuZRp-q430OAmPtVUdvxgRc8zz8=", 78, 1),
  ("Westclox Wall Clock", 10.96, "http://is4.mzstatic.com/image/thumb/Purple19/v4/f5/93/55/f593554e-80af-d081-3ccf-718afa944b8e/source/520x293bb.jpg", 60, 6),
  ("Old Spice Cologne", 37.47, "http://i.ebayimg.com/00/s/NTAwWDQ1MQ==/z/lP8AAOxyaTxTWI5C/$_3.JPG?set_id=2", 99, 8),
  ("Sony headphones", 21.21, "https://cnet3.cbsistatic.com/img/AXZ-UHoFdA7pmR7Ipt3-5tuqizE=/1070x602/2016/03/18/5fb797a8-078f-4337-b026-cd1abc4694e8/audeze-sine-headphones-03.jpg", 91,2),
  ("chethan bhagath Novel", 19.00, "http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/26/Pictures/_e10abadc-2a73-11e7-a28f-c563b2540923.jpg", 890, 1),
  ("The Cursed Child", 43.00,"https://images.gr-assets.com/books/1470082995l/29056083.jpg", 560, 1),
  ("Balaclava Outdoor Sports Mask",10.50,"https://des.gbtcdn.com/uploads/pdm-desc-pic/Electronic/image/2016/04/16/1460773601458941.jpg",89,3),
  ("Arteesol Water Bottle-Gym Workout Fitness ",21.00,"https://images-na.ssl-images-amazon.com/images/I/61wsqXwg1HL._SL1000_.jpg",97,3),
  ("Lawn & Garden Sprayer",25.00,"https://previews.123rf.com/images/awesleyfloyd/awesleyfloyd1204/awesleyfloyd120400006/13282015-Garden-Sprayer-is-an-illustration-of-a-lawn-and-garden-sprayer-for-dispensing-pesticide-or-herbicide-Stock-Vector.jpg",780,4),
  ("Honey",25.00,"https://images-na.ssl-images-amazon.com/images/I/61J%2Bj-o1F6L._SL1000_.jpg",780,7),
  ("Thermometer",21.00,"https://article.images.consumerreports.org/prod/content/dam/cro/news_articles/babies_kids/CR-BG-Thermometer-SBS-Flexible-Tip",780,5);

