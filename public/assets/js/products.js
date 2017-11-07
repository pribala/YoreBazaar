// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // $(".devour-btn").on("click", function(event) {
  //   event.preventDefault();
  //   var id = $(this).data("id");
  //   var curStatus = $(this).data("status");
    
  //   if(curStatus === 0){
  //     curStatus = true;
  //   }
  //   var newDevourStatus = {
  //     devoured: curStatus
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "PUT",
  //     data: newDevourStatus
  //     }).then(
  //     function() {
  //       console.log("changed status to", newDevourStatus);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
  populateDropDown();
  function populateDropDown(){

    $.ajax("/api/departments", {
      type: "GET",
      }).then(function(data) {
          data.forEach(function(item){
           $("#dept").append("<option value='"+item.id+"'>"+item.dept_name+"</option>");
         });
       
      }
    );  
  }

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

