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

	// var qty =1 ;
	// $(".sell").change(function(){
	// 	qty = $(this).val();
	// });

	// $(".update").click(function(e){
	// 	e.preventDefault();
	// 	var cartData = {
 //      		quantity: qty,
 //      		id: $(this).data("id")
 //    	};
	   
	//     // Send the PUT request.
	//     $.ajax("/api/cart", {
	//       type: "PUT",
	//       data: cartData
	//       }).then(
	//       function() {
	//         console.log("updated item");
	//         // Reload the page to get the updated profile
	//         location.reload();
	//       });
 //    });

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
		//console.log(profileId+"pId");
		window.location.href="/shopping/?cart_id="+profileId;
	});

	$(".checkout" ).click(function(e) {
		e.preventDefault();
		var profileId = sessionStorage.getItem("profile-id");
	 	$.get("/api/cart/"+profileId).then(function(data){
	 		console.log(data);
	 		var orderData = [];
	 		data.forEach(function(item){
	 			var orders = {
	 				profileId: item.ProfileProfileId,
	 				productId: item.ProductId,
	 				qty: item.cart_quantity
	 			}
	 			orderData.push(orders);
	 		})
	 		console.log(orderData);
	 		$.ajax({url: "/api/order",  type: "POST", contentType: "application/json",data: JSON.stringify(orderData)}).done(function(){
	 			console.log("created order");
	 			// delete all cart items for the profile
	 		});
	 	});
	});

});
