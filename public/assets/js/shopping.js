$(document).ready(function(){
	var profileName = localStorage.getItem('profile-name');
	$("#title").text("Hi "+profileName);

	$(".cart-btn").click(function(e){
		e.preventDefault();
		var prod_id = $(this).data("id");
		var profile_id = $("#profile-id").text();
		console.log(prod_id);
		console.log(profile_id);
		var cartItem = {
			product_id: prod_id,
			profile_id: profile_id 
		}
		$.post("/addtocart", cartItem).then(function(data){
			var profile_id = $("#profile-id").text();
			window.location.replace("/cart/"+profile_id);
		});
	});    
});
