$(document).ready(function(){
	//var profileName = sessionStorage.getItem('profile-name');
	//$("#title").text("Hey "+profileName+"!");

	$(".cart-btn").click(function(e){
		e.preventDefault();
		var prod_id = $(this).data("id");
		//var profile_id = $("#profile-id").text();
		var profile_id = sessionStorage.getItem("profile-id");
		var cartItem = {
			product_id: prod_id,
			profile_id: profile_id 
		}
		$.post("/addtocart", cartItem).then(function(data){
			//var profile_id = $("#profile-id").text();
			console.log(profile_id);
			window.location.replace("/cart/"+profile_id);
		});
	});    
});
