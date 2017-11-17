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
      - sequelize : is a promise-based ORM for Node.js v4 and up
      - mysql2
      - bcrypt-nodejs : gives us the ability to hash the password.
      - connect-flash :  allows for passing session flashdata messages.
      - passport : will help authenticating with different methods.
      - passport-local : Local account logins and signups

 
Create a server.js file that requires all the necessary packages and api-routes, sets up the server to listen for requests and bootstrap the entire application.

### DB Setup

Using Sequelize, an ORM (Object/Relational Mapper) which provides easy access to MySQL define mappings and associations between the models and database tables.

Running schema.sql creates the database. The tables are created by sequelize npm package based on the models.

Running seeds.sql populates the table with sample data.

### Config Setup

Running sequelize-cli package creates the config file and index.js. 

Inside the config.js file, setup the code to connect Node to MySQL.

Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests. 

Authentication mechanisms, known as strategies, are packaged as individual modules. Applications can choose which strategies to employ, without creating unnecessary dependencies.

All the configuration for passport will be handled in config/passport.js. This is where we configure our Strategy for local, facebook, twitter, and google. This is also the file where we will create the serializeUser and deserializeUser functions to store our user in session.

For this app we are using local strategy and authenticating using email and password.
Authenticating requests is as simple as calling passport.authenticate() and specifying which strategy to employ.
Redirects are combined with flash messages in order to display status information to the user.

### Model Setup

All the model definitions and their associations are defined in Models directory.

   - Relationships

      - one dept can have multiple products and a product can belong to one dept only 
      - one user can have multiple profiles and a profile can belong to one user only 
      - one profile can have one cart only and a cart belongs to one profile only 
      - one product can belong to multiple orders and an order can have multiple products  
      - a product can belong to multiple carts and a cart can have multiple products

   - User model 

      - User will have the ability to be linked to multiple social accounts and to a local account.       - For local accounts, we will be keeping email and password. 


### Controller Setup

Controller defines all the routes used in the application. We use sessions to store data and share such data across several pages. Ex. If the user selects a profile we save the profile-id and pass it to routes to select data based on the id.


### View Setup

All the views are created using Handlebars. The common features such as the Header and Footer are defined as partials and included with every view to provide a uniform look and feel.
 

To write JavaScript directly within templates we use helpers (JavaScript functions that you call from templates). We have used helpers to format date using Moment.js and displaying cart total.