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
							var img=item.profile_image;
							console.log(item);
						$(".members").append("<a class='dropdown-item col-sm-5' href='/products/"+item.id+"'> "+item.profile_name+"</a>");
				// 	 $(".members").append('<img src=img class="rounded-circle img-fluid profile-image" height="64px" width="64px">');
	       });
	    });  
});      
});
/* <a class="dropdown-item col-sm-5" href="#">
<img src="https://images.freeimages.com/images/small-previews/2fe/butterfly-1390152.jpg" class="rounded-circle img-fluid profile-image"
		style=" width: 60px; height: 30px;"> Username</a> */