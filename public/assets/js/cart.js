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

	var qty =1 ;
	$(".sell").change(function(){
		qty = $(this).val();
	});

	$(".update").click(function(e){
		e.preventDefault();
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
		var profileId = sessionStorage.getItem("profile-id");
		//console.log(profileId+"pId");
		window.location.href="/shopping/?cart_id="+profileId;
	});

	$(".checkout").click(function(e){
		e.preventDefault();
	
		var profileId = sessionStorage.getItem("profile-id");
		window.location.href="/orders/?cart_id="+profileId; 
		// var profileName = sessionStorage.getItem('profile-name');
		// $(".name").text("Thanks For Shopping with Us !!"+jsUcfirst(profileName));

	 });

		$.post("/api/order",orderData).done(function(data){
		   	window.location.href="/";
		}).catch(function(err) {
		      console.log(err);
		});
	// }); 
   
	// $(".clear").click(function(e){
	// 	e.preventDefault();
	// 	// clear the cart
	// });
});
