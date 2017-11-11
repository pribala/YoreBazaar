$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  var user_email = "";
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    user_email = data.email;
  });

 $(".userProfile").click(function(e){
  e.preventDefault();
  var cartId = $(this).data("id");
  var name = $(this).data("name");
  
  // Store profile id in the local storage
  // localStorage.setItem('profile-id', cartId);
  localStorage.setItem('profile-name', name);
  cartId = "/?cart_id=" + cartId;
  window.location.href="/shopping"+cartId;
 });
 
  $(".add-profile").click(function(e){
  	e.preventDefault();
  	$('#profileInfo').modal('toggle');
  });

  $("#profile-submit").click(function(e){
  	e.preventDefault();
  	var profileData = {
      name: $("#profilename").val().trim(),
      image: $("#profileimage").val().trim(),
      username:$(".member-name").text().trim()
    };

   if (!profileData.name) {
      return;
    }
   
    $.post("/api/profile",profileData).done(function(data){
    	location.reload();
    }).catch(function(err) {
      console.log(err);
    });
    
    $("#profilename").val("");
    $("#profileimage").val("");
  }); 
});




