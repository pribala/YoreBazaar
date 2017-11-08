// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
  
    $.ajax("/api/departments", {
      type: "GET",
      }).then(function(data) {
          data.forEach(function(item){
           $(".dropdown-menu").append("<a class='dropdown-item' href='/products/"+item.id+"'>"+item.dept_name+"</a>");
         });
      });

  $(".cart-btn").click(function(e){
    e.preventDefault();
    $.get("/api/user_data").then(function(data) {
      if(Object.getOwnPropertyNames(data).length === 0){
        
      };
    
  });
  });    
 
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log( $("#name").val().trim());
    var newProduct = {
      name: $("#name").val().trim(),
      price: parseFloat($("#price").val().trim()),
      quantity: parseInt($("#quantity").val().trim()),
      deptId: parseInt($("#dept").val().trim())
    };

    // Send the POST request.
    $.ajax("/api/newproduct", {
      type: "POST",
      data: newProduct
    }).then(
      function() {
        console.log("created new product");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

