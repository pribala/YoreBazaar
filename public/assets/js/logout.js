$(document).ready(function(){
	$(".signOut").click(function(e){
		e.preventDefault();
		sessionStorage.clear();
		window.location.href="/logout";
	});
});
