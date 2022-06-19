let listavist = document.querySelector("#listadb"); 

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


/* Lista de visitantes no banco de dados */
function listar(){
  var url = "http://127.0.0.1:3071/users";
  var resposta;

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();

  resposta = JSON.parse(xhttp.responseText);
  

  for (let i = 0; i < resposta.length; i++) {
    $(listavist).append(
    "<tr>" +
      "<td id = " + resposta[i].userId + " >" + 
        resposta[i].title + 
      "</td>" +
      "<td>" + 
      resposta[i].userId +
      "</td>" +
    "</tr>");
  };          

}