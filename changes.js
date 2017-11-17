$(".sell").click(function(){
		$(this).focus();
	})

	// This function starts updating item qty in the database if a user hits the "Enter Key"
  	// While in edit mode
	  $(".sell").on("keyup", function() {
	  	id = $(this).data("id")

	    if (event.keyCode === 13) {
	      var productId =$(this).data("product");	
	      updatedQty = $(this).val().trim();
	      $(this).blur();
	      updateQty(updatedQty,id, productId);
	    }
	  });
	
	function updateQty(qty, id, prodId){
		$.get("/product/"+prodId).then(function(data){
			if(qty > data.quantity){
				var message = "Not enough stock!";
				$("#disp").text(message);
			}else {
				var cartData = {
	      			quantity: qty,
	      			id: id
    			};
		   // write code to get the qty for a product
		    // Send the PUT request.
		    $.ajax("/api/cart", {
		      type: "PUT",
		      data: cartData
		      }).then(
		      function() {
		        console.log("updated item");
		        // Reload the page to get the updated profile
		        location.reload();
		      });
			}
		});
	};

	
     //in menu.js
     $.get("/api/user_data").then(function(data) {
		if(Object.getOwnPropertyNames(data).length === 0){
			sessionStorage.clear();
	   	}else{
		$.ajax("/api/members/?email="+data.email, {
	      type: "GET",
	      }).then(function(result) {
	      	   result.forEach(function(item){
	           $(".members").append("<a class='dropdown-item' href='/profiles/"+item.UserEmail+"'>"+item.profile_name+"</a>");
	        });
	      	   var profileName = sessionStorage.getItem('profile-name');
 				$(".title").text("Hi "+jsUcfirst(profileName));
	    });
	   }   
	});        

	$(".shop").click(function(e){
		e.preventDefault();
		$.get("/api/user_data").then(function(data) {
			if(Object.getOwnPropertyNames(data).length === 0){
				window.location.replace("/loginpage");
	   		}else {
	   			var profileId = sessionStorage.getItem("profile-id");
				window.location.href="/shopping/?cart_id="+profileId;
	   		}
		});			
	});

//in product api routes
	 // GET route for getting all of the products
  app.get("/", function(req, res) {
     var profile_id = ""; 
     if (req.query.cartId) {
       profile_id = req.query.cart_id;
     }
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(dbProduct) {
      //We have access to the products as an argument inside of the callback function
      var hbsObject = {
        products: dbProduct,
        profile_id: profile_id
      };
      //res.render("shop/products", hbsObject);
      res.render("shop/shopping", hbsObject);
    });
  });

  // GET route for getting all products by department
  app.get("/products/:dept_id", function(req, res) {
    var query = {};
    if (req.params.dept_id) {
      query.DepartmentId = req.params.dept_id;
    }
    // 1. Add a join here to include all of the Departments for these products
    db.Product.findAll({
      where: query,
      include:[db.Department]
    }).then(function(dbProduct) {
      //res.json(dbProduct);
      var hbsObject = {
        products: dbProduct
      };
      res.render("shop/shopping", hbsObject);
    });
  });

  // in header handlebar
  <li class="nav-item">
                <a class="nav-link shop" href="#">Shop</a>
            </li>

            //in handlebar 
	<div class="form-group col-sm-2 mt-4">
                <label for="sel1">Quantity</label>
                <input data-id={{id}} data-product={{ProductId}} type="number" class="sell" value={{cart_quantity}}>
     </div>
