let botom = document.querySelector("#bottom");
let gameOver = document.querySelector(".gameOver");
var tl = gsap.timeline();

var rn;
tl.from("section", {
  y: 1000,
  opacity: 0,
  scale: 2.2,
  duration: 0.6,
});

tl.from("#top", {
  y: -100,
  opacity: 0,
  duration: 0.5,
});
tl.from("#top .hitgsap", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
});


function showBubble() {
  let clutter = "";
  for (let i = 1; i < 199; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
    botom.innerHTML = clutter;
  }
    gsap.from(".bubble", {
    opacity: 0,
    scale: 0.5,
    stagger:0.00000000009,
    x:10,
    y: 10,  
    duration: 0.8,
  });
}
showBubble();

function ShowHitVal() {
  rn = Math.floor(Math.random() * 10);
  const hitVal = document.querySelector("#hitVal");
  hitVal.textContent = rn;
}

ShowHitVal();

function timerVal() {
  let timerVal = document.querySelector("#timerVal");
  let count = 60;
  timerVal.textContent = Number(count);
  let interval = setInterval(() => {
    if (count >= 0) {
      timerVal.textContent = count;
      count--;
    } 
    else {
      clearInterval(interval);

      botom.innerHTML = "GAME OVER";
    }
  }, 1000);
}

timerVal();
let scoreVal = document.querySelector("#scoreVal");
let scoreCount = 0;
function showScore() {
  scoreCount += 10;
  scoreVal.textContent = scoreCount;
}

botom.addEventListener("click", (e) => {
  if (rn === Number(e.target.textContent)) {
    showScore();
    showBubble();
    ShowHitVal();
  } else {
    showBubble();
    ShowHitVal();
    scoreCount -= 10;
   gameOver.style.display="flex"
  }
});

