$(document).ready(function(){
	$(".delete").click(function(e){
		e.preventDefault();
		var itemId = $(this).data("id");
		$.ajax("/api/cart/" + itemId, {
      	type: "DELETE",
    	}).then(function() {
	        console.log("deleted item");
	        // Reload the page to get the updated list
	    	location.reload();
	    });
	});

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

	$(".shop").click(function(e){
		e.preventDefault();
		var profileId = sessionStorage.getItem("profile-id");
		window.location.href="/shopping/?cart_id="+profileId;
	});

	$(".checkout" ).click(function(e) {
		e.preventDefault();
		var profileId = sessionStorage.getItem("profile-id");
	 	$.get("/api/cart/"+profileId).then(function(data){
	 		
	 		var orderData = [];
	 		data.forEach(function(item){
	 			var orders = {
	 				profileId: item.ProfileProfileId,
	 				productId: item.ProductId,
	 				qty: item.cart_quantity
	 			}
	 			orderData.push(orders);
	 		})
	 		
	 		$.ajax({url: "/api/order",  type: "POST", contentType: "application/json",data: JSON.stringify(orderData)}).done(function(data){
	 			console.log("created order");
	 			console.log(data);
	 			// $.get("/order/"+data.id).then(function(result){
	 			// 	console.log(result);
	 			// 	var prodDet = [];
	 			// 	result.forEach(function(item){
		 		// 		var prods = {
			 	// 			prodId: item.ProductId,
			 	// 			qty: item.order_quantity
			 	// 		};
		 		// 		prodDet.push(prods);
	 			// 	});
	 			// 	$.ajax({url: "/api/product",  type: "PUT", contentType: "application/json",data: JSON.stringify(prodDet)}).done(function(data){

	 			// 	});
	 			// });
	 			//delete all cart items for the profile
	 			$.ajax("/deletecart/" + profileId, {
      				type: "DELETE",
    			}).then(function() {
	        		console.log("deleted cart items");
	       			 // Reload the page to get the updated list
	    			window.location.href="/orders/"+profileId;
	    		});
	 		});
	 	});
	});
 });





