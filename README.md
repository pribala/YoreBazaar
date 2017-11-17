# YoreBazaar 
Your 
Personalized Shopping Experience


## Overview

YoreBazaar is a shopping site that aims to provide a more personalized shopping experience to its users. A registered user on the site can create multiple profiles for each member of their family or friends. Each individual profile has an associated cart and they have the option to add items to the cart, delete items from the cart or update item quantity. When they are ready to checkout, an order is created with the items in the cart and the cart is emptied of its contents. The users can view the orders placed for each profile thus tracking individual orders and total expense for each member. 

The application is built with MySQL, Node, Express, Handlebars and Sequelize and follows the MVC design pattern; uses Node and Sequelize to query and route data in the app, and Handlebars to generate the HTML.

## Instructions

The app is hosted on Heroku and can be accessed using the url 

[ https://infinite-hamlet-30446.herokuapp.com/ ]

### App Setup

   - Make a package.json file by running npm init from the command line.

   - Install the following npm package: 

      - express : is the framework
      - express-handlebars : is the templating engine.
      - express-session : to keep track of user's login status
      - method-override
      - body-parser
      - sequelize : is object modeling for mysql database.
      - mysql2
      - bcrypt-nodejs : gives us the ability to hash the password.
      - connect-flash :  allows for passing session flashdata messages.
      - passport : will help authenticating with different methods.
      - passport-local : Local account logins and signups

 
Create a server.js file that requires all the necessary packages and api-routes, sets up the server to listen for requests.

