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
	});

	$(".shop").click(function(e){
		e.preventDefault();
		var profileId = localStorage.getItem("profile-id");
		//console.log(profileId+"pId");
		window.location.href="/shopping/?cart_id="+profileId;
	});

	$(".checkout").click(function(e){
		e.preventDefault();
	document.write("thanks for shopping with us!!")
	});

	$(".clear").click(function(e){
		e.preventDefault();
		// clear the cart
	});
});