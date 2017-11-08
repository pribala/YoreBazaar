$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  var user_email = "";
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
    user_email = data.email;
  });
 
  
  // $.get("/profiles" + user_email, function(data) {
  // 	console.log(user_email);
  // 	console.log(data);
  // if (data.length !== 0) {
  //   for (var i = 0; i < data.length; i++) {
  //     	var col = $("<div>");
  //    	col.addClass("col-md-3");
  //   	col.append("<img class='rounded-circle img-fluid' src='"+data[i].profile_image+"'>");
  //   	col.append("<p>"+data[i].profile_name+"</p>");
  //   	$(".profiles").prepend(col);
  //   }
  // 	}
  // });

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
    console.log(profileData);

    $.post("/api/profile",profileData).done(function(data){
    	//window.location.replace(data);
      location.reload();
    	// console.log("hi");
    	// var col = $("<div>");
    	// col.addClass("col-md-3");
    	// col.append("<img class='rounded-circle img-fluid' src='"+data.profile_image+"'>");
    	// col.append("<p>"+data.profile_name+"</p>");
    	// $(".profiles").prepend(col);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
    
    $("#profilename").val("");
    $("#profileimage").val("");
  }); 
});




