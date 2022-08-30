const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;// 가위
//$computer.style.background = `url(${IMG_URL}) -220px 0`;// 바위
//$computer.style.background = `url(${IMG_URL}) -440px 0`;// 보
$computer.style.backgroundSize = "auto 200px";

const rspX = {
    scissors: "0",
    rock: "-220px",
    paper: "-440px"
};

let computerChoice = "scissors";
const changeComputerHand = () => {
    if (computerChoice === "scissors") { // 지금 가위면 
        computerChoice = "rock";
    } else if (computerChoice === "rock") {  // 지금 바위면
        computerChoice = "paper";
    } else if (computerChoice === "paper") { //보 면
        computerChoice = "scissors";
    }
    // rspX.computerChoice 는 안됨 rspX["scissors"] 로 되야함ㄴ
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = "auto 200px";
}
let intervalId = setInterval(changeComputerHand, 50);



let clickable = true;
const clickButton = () => {
    if (clickable) {
        clearInterval(intervalId);
        clickable = false;

        setTimeout(() => {
            clickable = true;
            intervalId = setInterval(changeComputerHand, 50);
        }, 1000);
    }
};
/**  이벤트를 제거하는 방법   remove는 실수하기 쉬움.
const clickButton = () => {
    clearInterval(intervalId);   //점수 계산하고 화면에 표시
    $rock.removeEventListener("click", clickButton);
    $scissors.removeEventListener("click", clickButton);
    $paper.removeEventListener("click", clickButton);
    setTimeout(() => { 
        intervalId = setInterval(changeComputerHand, 50);
        $rock.addEventListener("click", clickButton);
        $scissors.addEventListener("click", clickButton);
        $paper.addEventListener("click", clickButton);      
    }, 1000);
};*/   

$rock.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);

