var ps1 = 0;
var ps2 = 0;
var pn1 = "Dice 1 Player";
var pn2 = "Dice 2 Player";
function takename(){
  pn1 = document.getElementById('Player1').value == "" ? pn1 : document.getElementById('Player1').value;
  pn2 = document.getElementById('Player2').value == "" ? pn2 : document.getElementById('Player2').value;
}
function game(){
  var n1 = Math.floor(Math.random()*6 + 1);
  var n2 = Math.floor(Math.random()*6 + 1);
  while(n1 == n2)
  {
    n1 = Math.floor(Math.random()*6 + 1);
  }
  var src1 = "dice" + n1;
  var src2 = "dice" + n2;
  src1 = "<h4>DICE 1</h4> <img class=\"dice\" id = \"dice1\" src = \"images\\" + src1 + ".png\">";
  src2 = "<h4>DICE 2</h4> <img class=\"dice\" id = \"dice2\" src = \"images\\" + src2 + ".png\">";
  document.getElementById('dice1').innerHTML = src1;
  document.getElementById('dice2').innerHTML = src2;
  if(n1 > n2){  ps1++;     }
  else{    ps2++;          }
}
function main(){
  var aud = document.getElementById("rollsound");
  aud.play();
  var audio = document.getElementById("dicesound");
  audio.play();
  if(ps1 == 0 && ps2 == 0)
  {   takename();

    var myDiv = document.getElementById("buttn");
    var button = document.createElement('BUTTON');
    button.setAttribute("class", "btn btn-danger button newbtn");
    button.setAttribute("onclick","result()");
    var text = document.createTextNode("FINAL RESULT  ");
    button.appendChild(text);
    myDiv.appendChild(button);
    document.getElementById("roll").innerHTML = "ROLL AGAIN  ";
  }
  document.getElementById("dice1").classList.add("shake");
  setTimeout(function(){
      document.getElementById("dice1").classList.remove("shake");
  }, 500);
  document.getElementById("dice2").classList.add("shake");
  setTimeout(function(){
      document.getElementById("dice2").classList.remove("shake");
  }, 500);
  setTimeout(function(){
    game();
    document.getElementById("score1").innerHTML = pn1 + " score : <p class = \"score\">" + ps1 + "</p>";
    document.getElementById("score2").innerHTML = pn2 + " score : <p class = \"score\">" + ps2 + "</p>";
    }, 500);
}

function result(){
  var a = document.getElementById("vicsound");
  a.play();
  if(ps1 < ps2)
  {  document.querySelector(".form").innerHTML = "<h2 class = \"res\">" + pn2 + " is the winner!!🎉🎉🎉</h2>";  }
  if(ps1 > ps2)
  {  document.querySelector(".form").innerHTML = "<h2 class = \"res\">" + pn1 + " is the winner!!🎉🎉🎉</h2>";  }
  if(ps1 == ps2)
  {  document.querySelector(".form").innerHTML = "<h2 class = \"res\"> That is draw, Refresh page to try again!!😊</h2>";  }

  document.getElementById("buttn").innerHTML =   "<button onclick=\"location.reload()\" class = \"btn btn-danger button\"><strong>REFRESH PAGE </strong></button>";
}
