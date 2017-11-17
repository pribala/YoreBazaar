$(document).ready(function() {
    $.ajax("/api/departments", {
      type: "GET",
      }).then(function(data) {
          data.forEach(function(item){
           $(".department").append("<a class='dropdown-item' href='/products/"+item.id+"'>"+item.dept_name+"</a>");
         });
      });
 

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

	$(".navItem").click(function(e){
		$.get("/api/user_data").then(function(data) {
			if(Object.getOwnPropertyNames(data).length === 0){
				window.location.replace("/loginpage");
	   		}
		});			
	});

	$("#cart").click(function(e){
    	e.preventDefault();
    	$.get("/api/user_data").then(function(data) {
			if(Object.getOwnPropertyNames(data).length === 0){
				window.location.replace("/loginpage");
	   		}else {
	   			var profileId = sessionStorage.getItem("profile-id");
		      	$.ajax("/api/cart/"+profileId, {
			      type: "GET",
			    }).then(function(result) {
			        result.forEach(function(item){
			           $(".cartItems").prepend("<img class='cartimg rounded-circle ' width='50rem' style='height:50px'src='"+item.Product.product_image+"'>"+item.Product.product_name+"<br>Price: $"+item.Product.price+"<br>Qty: "+item.cart_quantity+"<br>");
			        });
			    });
			}
		});	
	});	
	
	$(".gotocart").click(function(e){
		e.preventDefault();
		var profile_id = sessionStorage.getItem("profile-id");
		window.location.replace("/cart/"+profile_id);
	
	})
	function jsUcfirst(string) {
    	return string.charAt(0).toUpperCase() + string.slice(1);
	}

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

	$(".order").click(function(e){
		e.preventDefault();
		// get all orders for a particular profile
		$.get("/api/user_data").then(function(data) {
			if(Object.getOwnPropertyNames(data).length === 0){
				window.location.replace("/loginpage");
	   		}else {
	   			var profileId = sessionStorage.getItem("profile-id");
				window.location.href="/orders/"+profileId;
	   		}
		});		

	});
}); 
