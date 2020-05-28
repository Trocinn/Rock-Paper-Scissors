var p1Button = document.querySelector("#p1"),
    p2Button = document.getElementById("p2"),
    p1Total = document.getElementById("p1Total"), //wyświetla liczbę zgromadzonych punktów "Gracz #1"
    p2Total = document.getElementById("p2Total"), //wyświetla liczbę zgromadzonych punktów "Gracz #2"
    resButton = document.getElementById("res"),
    p1Score = "0", //mierzy obecną liczbę punktów "Gracz #1" w js
    p2Score = "0", //mierzy obecną liczbe punktów "Gracz #2" w js
    gameOver = false,
    numInput = document.querySelector("input"),
    maxPoints = document.getElementById("maxPoints"), //wyświetla liczbę punktów potrzebnych do zwycięstwa
    winningScore, //przechowuje liczbę punktów potrzebną do zwycięstwa
    cheekyChecker;

//                              //
//           PROGRAM!           //
//                              //

startingThingsUp() //ustawienia startowe
numInput.addEventListener("change", function() {
    maxPoints.textContent = numInput.value;
    winningScore = Number(numInput.value);
    cheekyChecker = winningScore;
    if (winningScore < 0) {
        alert("NIE MOŻNA GRAĆ DO UJEMNEJ LICZBY PUNKTÓW!");
        highestSoFar(p1Score, p2Score);
    } else if (cheekyChecker <= p1Score || cheekyChecker <= p2Score) {
        alert("Halko! Proszę nie oszukiwać!");
        highestSoFar(p1Score, p2Score);
    } else {
        mildReset();
    }
    mildReset();

});

function startingThingsUp() {
    numInput.value = 1, numInput.textContent = 1, winningScore = 1;
}

function highestSoFar(score1, score2) {
    var x;
    if (score1 >= score2) {
        numInput.value = score1 + 1;
        x = score1 + 1;
        reassignScore(x);
    } else {
        numInput.value = score2 + 1;
        x = score2 + 1;
        reassignScore(x);
    }
}

function reassignScore(score) {
    winningScore = score;
    maxPoints.textContent = numInput.value;
}

function mildReset() {
    p1Total.textContent = p1Score;
    p2Total.textContent = p2Score;
    p1Total.classList.remove("green");
    p2Total.classList.remove("green");
    gameOver = false;
}

function resetAll() {
    p1Score = 0;
    p2Score = 0;
    maxPoints.textContent = "1";
    numInput.value = 1;
    winningScore = 1;
    mildReset();
};

// event przycisku dodawania punktów dla "Gracz #1"
p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Total.classList.toggle("green");
        }
        p1Total.textContent = p1Score;
    }
});
// event przycisku dodawania punktów dla "Gracz #1"
p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Total.classList.toggle("green");
        }
        p2Total.textContent = p2Score;
    }
});
resButton.addEventListener("click", resetAll);