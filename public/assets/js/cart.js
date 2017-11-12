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

	$(".update").click(function(e){
		e.preventDefault();
		// update cart item
		console.log($("#sell").val());
		var qty = $("#sell").val();
		var cartData = {
      		quantity: qty,
      		id: $(this).data("id")
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
    });

	$(".shop").click(function(e){
		e.preventDefault();
		var profileId = localStorage.getItem("profile-id");
		//console.log(profileId+"pId");
		window.location.href="/shopping/?cart_id="+profileId;
	});

	$(".checkout").click(function(e){
		e.preventDefault();
		// add items on cart to orders
	});

	$(".clear").click(function(e){
		e.preventDefault();
		// clear the cart
	});
});