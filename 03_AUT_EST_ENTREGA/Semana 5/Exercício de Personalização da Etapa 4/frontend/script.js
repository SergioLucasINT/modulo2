// Comentar 

function comentar() {
    let resposta = document.getElementById('comment').value;
    document.getElementById('resposta').innerHTML = resposta 
}

$(document).ready(function(){
    $("#hide").click(function(){
      $("h1").hide();
      $("p").hide();
      $("li").hide();
    });
    $("#show").click(function(){
      $("h1").show();
      $("p").show();
      $("li").show();
    });
  });