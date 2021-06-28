
//js da navbar
function openNav() {
    document.getElementById("navbar").style.width = "100%";
  }  
function closeNav() {
    document.getElementById("navbar").style.width = "0%";
  }
//---------------------------------------------------------------  
$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal({backdrop: true});
    });
    $("#myBtn2").click(function(){
      $("#myModal2").modal({backdrop: true});
    });
    $("#myBtn3").click(function(){
      $("#myModal3").modal({backdrop: true});
    });
  });