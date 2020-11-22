// JavaScript Document
$(document).ready(function(){
	// LOGIN BUTTON ACTION
    $("#loginbtn").click(function(e){
		e.preventDefault();
        $(this).button('loading');
    });  
	
	// ACTIVATING TOOLTIP
	$('[data-toggle="tooltip"]').tooltip();  
});