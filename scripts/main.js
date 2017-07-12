function openTab(tabName) {
    
    var i;
    var x = document.getElementsByClassName("dashTab");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(tabName).style.display = "block";  
    document.getElementById(tabName).style.display = "block";
    
}

$(function(){ 
    
       $('.bs-example-modal-sm').click(function(){
           $('.bs-example-modal-sm').css("display","flex !important").css("align-items", "center !important").css("justify-content", "center !important");

   })
    
    $('#me-button').click(function(){
        $('#me-button').css("background", "#cc1128").css("color", "white")
        $('#public-button').css("background", "transparent").css("color", "black")
    })  
    
    $('#public-button').click(function(){
        $('#public-button').css("background", "#cc1128").css("color", "white")
        $('#me-button').css("background", "transparent").css("color", "black")
    })
    
        $('.fa-heart-o').one("click",function(){
        var index = $('.fa-heart-o').index(this)
        $(this).removeClass("fa-heart-o").addClass("fa-heart")
    })
    
         $('.fa-heart').one("click",function(){
        var index = $('.fa-heart').index(this)
        $(this).removeClass("fa-heart").addClass("fa-heart-o")
    })

   })

   
   
