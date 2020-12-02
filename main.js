const square1 = document.querySelectorAll('.box')
const mole = document.querySelectorAll('.mole')
var timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let highscore = document.getElementById('highscore').textContent
let result = 0
let currentTime = timeLeft.textContent;
var ca = []
var setintervalID = 0;
var counter = 0;
var high = { 'highest': 0 }
var setintervalID2 = 0;
// document.getElementById('highscore').innerText = getcookie(document.cookie)
if (getcookie(document.cookie) = undefined) {
document.getElementById('highscore').innerText = "0";

} else {
document.getElementById('highscore').innerText = getcookie(document.cookie)

}

function mol() {
    square1.forEach(c => {
        c.classList.remove("mole")
    })
    i = Math.floor(Math.random() * 9)
    counter = 0;
    square1[i].classList.add("mole")
    hitid = square1[i].id
}

function start() {
    setintervalID = setInterval(() => {
        mol()

    }, 500)

    square1.forEach(i => {
        i.addEventListener("mouseup", () => {
            if (i.id === hitid) {

                if (counter == 0) {
                    result++
                    score.textContent = result
                    counter++

                }

            }
        })
    })

    t = timeLeft.textContent
    setintervalID2 = setInterval(() => {
        t--
        timeLeft.textContent = t
        if (t === 0) {
            highest(result);
            var finalHighest = getcookie(document.cookie);
            document.getElementById('highscore').innerText = finalHighest
            alert('Time up! Your Score is ' + result + ', Highest score is ' + finalHighest);

            timeLeft.textContent = 30
            score.textContent = 0;
            t = 30
            result = 0;

        }
    }, 500)



}


function setcookie() {
    document.cookie = "";
    var expiresAttrib = new Date(Date.now() + 60 * 1000).toString();
    cookieString = "highest" + "=" + high['highest'] + " ; " + expiresAttrib + "; " + "SameSite=Lax";
    document.cookie = cookieString;
    console.log(document.cookie);
}


function getcookie(cname) {
    var ca = cname.split("=");
    return ca[1];
}

function highest(num) {
    var com = getcookie(document.cookie);
    if (num <= com) {
        if (com == 0) {
            high['highest'] = result;
            setcookie();
        } else {
            console.log(high['highest'])
        }
    } else {
        high['highest'] = result;
        setcookie();

    }
}



// reset



function reset() {
    score.textContent = 0;
    timeLeft.textContent = 30;
    t = 30;
    clearInterval(setintervalID)
    clearInterval(setintervalID2)
    result = 0;

    square1.forEach(c => {
        c.classList.remove("mole")
    })
}

// const reset = document.querySelector("#reset")
// reset.addEventListener("click", function() {
// score.textContent = 0;
// timeLeft.textContent = 60
// t = 60
// })
