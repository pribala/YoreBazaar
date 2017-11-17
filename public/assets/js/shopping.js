$(document).ready(function(){
	$(".cart-btn").click(function(e){
		e.preventDefault();
		var prod_id = $(this).data("id");
		console.log(prod_id);
		var profile_id = sessionStorage.getItem("profile-id");
		var cartItem = {
			product_id: prod_id,
			profile_id: profile_id 
		}
		$.get("/api/user_data").then(function(result) {
	      if(Object.getOwnPropertyNames(result).length === 0){
	        window.location.replace("/loginpage");
	      }else {
			$.post("/addtocart", cartItem).then(function(data){
				console.log(profile_id);
				window.location.replace("/cart/"+profile_id);
			});
		  }	
		});    
	});
});	
