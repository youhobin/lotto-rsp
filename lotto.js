const candidate = Array(45).fill().map((v, i) => i + 1);
const shuffle = [];
while (candidate.length > 0) {
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random,1);
    const value = spliceArray[0];
    shuffle.push(value);
}
const winBalls = shuffle.slice(0,6).sort((a, b) => a - b); //sort 는 정렬 slice 로 앞에서 6개 가져옴/ a-b는 오름차순 123456
const bonus = shuffle[6];

const $result = document.querySelector("#result");
const $bonus = document.querySelector("#bonus");

function colorize(number, $tag) {
    if (number < 10) {
        $tag.style.backgroundColor = "red";
        $tag.style.color = "white";
    } else if (number < 20) {
        $tag.style.backgroundColor = "orange";
    } else if (number < 30) {
        $tag.style.backgroundColor = "yellow";
    } else if (number < 40) {
        $tag.style.backgroundColor = "blue";
        $tag.style.color = "white";
    } else {
        $tag.style.backgroundColor = "green";
        $tag.style.color = "white";
    }
} 

const showBall = (number, $target) => {
    const $ball = document.createElement("div");
    $ball.className = "ball";
    colorize(number, $ball);
    $ball.textContent = number;
    $target.appendChild($ball);
}

/**setTimeout(() => {
    const $ball = document.createElement("div");
    $ball.className = "ball";
    $ball.textContent = winBalls[0];
    $result.appendchild($ball);    이렇게 하는거 중복되니깐 위의함수로 만들어서 매개변수로 진행함 (number $target)
}) */

for (let i = 0; i < winBalls.length; i++) {
    setTimeout (() =>{
        showBall(winBalls[i], $result);
    }, (i + 1) * 1000);
}
/**     이 중복을 for 함수로 바꿈  //리팩토링
setTimeout(() => {
    showBall(winBalls[0], $result);
}, 1000);
setTimeout(() => {
    showBall(winBalls[1], $result);
}, 2000);
setTimeout(() => {
    showBall(winBalls[2], $result);
}, 3000);
setTimeout(() => {
    showBall(winBalls[3], $result);
}, 4000);
setTimeout(() => {
    showBall(winBalls[4], $result);
}, 5000);
setTimeout(() => {
    showBall(winBalls[5], $result);
}, 6000);
 */

setTimeout(() => {
    showBall(bonus, $bonus);
}, 7000);


