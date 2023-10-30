var buttons = document.querySelectorAll("#rock, #paper, #scissor");
var pResult, cResult;

function playerSelect() {
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
      document.getElementById("player").innerHTML = this.textContent;
      pResult = this.id;
      compSelect();
      setTimeout(checkRes, 3500); // Delay checkRes to ensure it runs after compSelect has finished
    });
  }
}

function compSelect() {
  var intervalId = null;
  function startLoop() {
    var index = 0;
    intervalId = setInterval(function () {
      document.getElementById("computer").innerHTML =
        buttons[index].textContent;
      index = (index + 1) % buttons.length;
    }, 300);
  }
  function stopLoop() {
    setTimeout(function () {
      clearInterval(intervalId);
      var randomIndex = Math.floor(Math.random() * buttons.length);
      document.getElementById("computer").innerHTML =
        buttons[randomIndex].textContent;
      cResult = buttons[randomIndex].id;
    }, 3000);
  }
  startLoop();
  stopLoop();
}

function checkRes() {
  if (pResult === "rock" && cResult === "scissor") {
    document.getElementById("result").innerHTML = "You Win :)";
  } else if (pResult === "rock" && cResult === "paper") {
    document.getElementById("result").innerHTML = "Computer Wins :(";
  } else if (pResult === "paper" && cResult === "rock") {
    document.getElementById("result").innerHTML = "You Win :)";
  } else if (pResult === "paper" && cResult === "scissor") {
    document.getElementById("result").innerHTML = "Computer Wins :(";
  } else if (pResult === "scissor" && cResult === "paper") {
    document.getElementById("result").innerHTML = "You Win :)";
  } else if (pResult === "scissor" && cResult === "rock") {
    document.getElementById("result").innerHTML = "Computer Wins :(";
  } else if (pResult === cResult) {
    document.getElementById("result").innerHTML = "Draw :/";
  }
}

playerSelect();
