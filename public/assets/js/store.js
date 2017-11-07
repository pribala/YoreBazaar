// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#delete").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    // Send the delete request.
    $.ajax("/api/department/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted department");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#edit").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    // Send the delete request.
    
  });

  $(".create-department").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log( $("#name").val().trim());
    var newDepartment = {
      name: $("#name").val().trim(),
      cost: parseFloat($("#cost").val().trim()),
    };

    // Send the POST request.
    $.ajax("/api/newdepartment", {
      type: "POST",
      data: newDepartment
    }).then(
      function() {
        console.log("created new department");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
