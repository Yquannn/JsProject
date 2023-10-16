let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 20,
  losses: 0,
  ties: 0
};



checking()
updateScore();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moved').innerHTML = `       You   
  <img src="img/${playerMove}-emoji.png" class="move-icon">
  <img src="img/${computerMove}-emoji.png" class="move-icon">
  Computer `;

 updateScore();

}
function updateScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function calculate(){
let cost = document.querySelector(".js-costOfOrder").value

if(parseInt(cost) >= 40){
      document.querySelector(".result").innerHTML = "$"+cost
    }else {
      document.querySelector(".result").innerHTML =`$${(parseInt(cost) + 10)}`

    }
  }

  function reset(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');   
    updateScore();
  }

function checking(){
  if(score.losses === 10  ){
    alert('HAHAHA ulit naka 10 ka nang loseses')
    reset()
  }else if(score.ties === 15){
    alert('HAHAHA ulit naka 15 ka nang tie')
    reset()
  }
}


function navigateToPage() {
  if(score.wins >= 20){

  window.location.href = "index2.html";

  }else{
    alert('kelangan mo maka 20 wins bago pindutin yan hahaha')  
  }
}

function navigateToPageClone() {
  if(score.wins >= 20){
    // alert('Pwede mo na pindutin hahahhaha')
    // // window.location.href = "index2.html";
    timerToNavigate()

  }else{
    alert('kelangan mo maka 20 wins bago pindutin yan hahaha')  
  }
}


let c = 4;
let p;

function start() {
  if (c === 0) {
    enableButton()
    clearInterval(p);
    
    document.getElementById('timerDisplay').innerHTML = 'Timer: Pick ka na';
  } else {
    
    document.getElementById('timerDisplay').innerHTML = `Timer: ${c} seconds`;
    c--;
    disableButton()
  }
}

function disableButton() {
  document.getElementById("move-button").disabled = true;
  document.getElementById("move2-button").disabled = true;
  document.getElementById("move3-button").disabled = true;
 
}

function enableButton(){
  // setTimeout(() => {
    document.getElementById("move-button").disabled = false;
    document.getElementById("move2-button").disabled = false;
    document.getElementById("move3-button").disabled = false;
  // }, 3000); // Enable the button after 3 seconds
}




function timer() {
  c = 3;
  p = setInterval(start, 1000);
 
}



hideButton()

function timerToNavigate() {
  let c = 30;
  let p = setInterval(start, 1000);

  function navigateOrRandom() {
    if (c > 0) {
      randomBtn()
      
      // Do something when the timer is running (c > 0)
      // document.getElementById('timerDisplay').innerHTML = `Timer: ${c} seconds`;
    } else {
      // Timer has reached 0, remove the button
      const myBtn = document.querySelector(".myBtn-clone");
     

      if (myBtn) {
        myBtn.remove();
        unhideButton()
      }
      clearInterval(p); // Stop the interval when the timer reaches 0
    }
  }



  function start() {
    c--; // Decrease the timer countdown
    navigateOrRandom(); // Check and handle timer value
  }


  navigateOrRandom(); // Initial check when the timer is set
}

// Call the timerToNavigate() function to start the timer

function hideButton() {
  const button = document.getElementById("myBtn2");
  if (button) {
      button.style.display = "none"; // Hide the button
  }
}

// Function to unhide (show) the button
function unhideButton() {
  const button = document.getElementById("myBtn2");
  if (button) {
      button.style.display = "block"; // Show the button
  }
}



function randomBtn() {
  const wrapper = document.querySelector('.wrapper');
  const clickButton = document.querySelector('.myBtn-clone');
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = clickButton.getBoundingClientRect();

  clickButton.addEventListener('mousemove', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));

    clickButton.style.left = i + 'px';
    clickButton.style.top = j + 'px';
  });
}


