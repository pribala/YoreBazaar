$(document).ready(function() {
    $.ajax("/api/departments", {
      type: "GET",
      }).then(function(data) {
          data.forEach(function(item){
           $(".department").append("<a class='dropdown-item' href='/products/"+item.id+"'>"+item.dept_name+"</a>");
         });
      });
 
	$.get("/api/user_data").then(function(data) {
		$.ajax("/api/members/?email="+data.email, {
	      type: "GET",
	      }).then(function(result) {
	      	console.log(result);
	          result.forEach(function(item){
	           $(".members").append("<a class='dropdown-item' href='/products/"+item.id+"'>"+item.profile_name+"</a>");
	         });
	      });
	    });  
});      