$(document).ready(function() {
    $.ajax("/api/departments", {
      type: "GET",
      }).then(function(data) {
          data.forEach(function(item){
           $(".department").append("<a class='dropdown-item' href='/products/"+item.id+"'>"+item.dept_name+"</a>");
         });
      });
 
	$.get("/api/user_data").then(function(data) {
		$.ajax("/api/members/?email="+data.email, {
	      type: "GET",
	      }).then(function(result) {
	      	   result.forEach(function(item){
	           $(".members").append("<a class='dropdown-item' href='/profiles/"+item.UserEmail+"'>"+item.profile_name+"</a>");
	        });
	    });
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
			           $(".cartItems").append("<img class='prodimg' width='200rem' src='"+item.Product.product_image+"'>"+item.Product.product_name+"<br>$"+item.Product.price+"<br>Qty: "+item.cart_quantity);
			        });
			    });
			}
		});	
	});	
});      