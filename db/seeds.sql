
USE  yorebazaar;
-- Creates new rows containing data in all named columns --
INSERT INTO products
  (product_name,price,product_image,quantity,sales)
VALUES
  ("NPole Tablet", 59.99, "https://cnet1.cbsistatic.com/img/BcQSiKWK0UjWgZBkZra-6g2qA6k=/fit-in/970x0/2015/02/06/1f8fedef-0e20-423a-8da0-da45fca27c12/yoga-tablet-2-with-windows-8900.jpg", 100, 12.5),
  ("Forks Over nives", 11.89, "https://media.istockphoto.com/photos/stack-of-books-picture-id507311349?k=6&m=507311349&s=612x612&w=0&h=eOFF8x1-CvOSvV6hIuZRp-q430OAmPtVUdvxgRc8zz8=", 78, 5.7),
  ("Westclox Wall lock", 10.96, "http://is4.mzstatic.com/image/thumb/Purple19/v4/f5/93/55/f593554e-80af-d081-3ccf-718afa944b8e/source/520x293bb.jpg", 60, 9.2),
  ("Old Spice Cologne", 37.47, "http://i.ebayimg.com/00/s/NTAwWDQ1MQ==/z/lP8AAOxyaTxTWI5C/$_3.JPG?set_id=2", 99, 8.13),
  ("Sony headphones", 21.21, "https://cnet3.cbsistatic.com/img/AXZ-UHoFdA7pmR7Ipt3-5tuqizE=/1070x602/2016/03/18/5fb797a8-078f-4337-b026-cd1abc4694e8/audeze-sine-headphones-03.jpg", 91, 6.21),
  ( "chethan bhagath Novel", 19.00, "http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/04/26/Pictures/_e10abadc-2a73-11e7-a28f-c563b2540923.jpg", 890, 24),
  ( "The Cursed Child", 43.00,"https://images.gr-assets.com/books/1470082995l/29056083.jpg", 560, 24);

INSERT INTO departments
  (dept_name, overhead_costs)
VALUES
  ("Books & Audible", 100);