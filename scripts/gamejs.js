let player = "X";
let gamesetting = "2player";

function startGame(gametemp) {

    gamesetting = gametemp;

    document.getElementById("sq1").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq1").className = "square";
    document.getElementById("sq2").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq2").className = "square";
    document.getElementById("sq3").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq3").className = "square";
    document.getElementById("sq4").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq4").className = "square";
    document.getElementById("sq5").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq5").className = "square";
    document.getElementById("sq6").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq6").className = "square";
    document.getElementById("sq7").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq7").className = "square";
    document.getElementById("sq8").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq8").className = "square";
    document.getElementById("sq9").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq9").className = "square";


    if (gamesetting == "1playerX") {

        player = "X";
        document.getElementById("leftplayer").innerHTML = "<button type='button' id='lp' class='btn btn-success' disabled='disabled'>player 1\: X</button>";
        document.getElementById("rightplayer").innerHTML = "<button type='button' id='rp' class='btn btn-outline-dark' disabled='disabled'>computer\: O</button>";
        document.getElementById("Xchoice").className = "dropdown-item active";
        document.getElementById("Ochoice").className = "dropdown-item";
        document.getElementById("Twochoice").className = "dropdown-item";
        document.getElementById("2remote").className = "dropdown-item";

    }

    else if (gamesetting == "1playerO") {

        player = "O";
        document.getElementById("leftplayer").innerHTML = "<button type='button' id='lp' class='btn btn-outline-dark' disabled='disabled'>computer\: X</button>";
        document.getElementById("rightplayer").innerHTML = "<button type='button' id='rp' class='btn btn-success' disabled='disabled'>player 1\: O</button>";
        document.getElementById("Xchoice").className = "dropdown-item";
        document.getElementById("Ochoice").className = "dropdown-item active";
        document.getElementById("Twochoice").className = "dropdown-item";
        document.getElementById("2remote").className = "dropdown-item";

        document.getElementById("sq5").innerHTML = "<img src='../img/X.png' />";
        document.getElementById("sq5").className = "squareplayed";

    }

    else {

        player = "X";
        document.getElementById("leftplayer").innerHTML = "<button type='button' id='lp' class='btn btn-success' disabled='disabled'>player 1\: X</button>";
        document.getElementById("rightplayer").innerHTML = "<button type='button' id='rp' class='btn btn-outline-dark' disabled='disabled'>player 2\: O</button>";
        document.getElementById("Xchoice").className = "dropdown-item";
        document.getElementById("Ochoice").className = "dropdown-item";
        document.getElementById("Twochoice").className = "dropdown-item active";
        document.getElementById("2remote").className = "dropdown-item";
    }

    setListeners()
}

function setListeners() {

    document.getElementById("Xchoice").addEventListener("click", startGame.bind(this, "1playerX"));

    document.getElementById("Ochoice").addEventListener("click", startGame.bind(this, "1playerO"));

    document.getElementById("Twochoice").addEventListener("click", startGame.bind(this, "2player"));

    var elements = document.getElementsByClassName("square");

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', clickedOn, false);
    }

    console.log(elements)

}

function clickedOn() {

    console.log(this.id);

    if (player == "X") {
        document.getElementById("lp").className = "btn btn-outline-dark";
        document.getElementById("rp").className = "btn btn-success";
        document.getElementById(this.id).innerHTML = "<img src='../img/X.png' />";
        document.getElementById(this.id).className = "squareplayed";
        document.getElementById(this.id).removeEventListener('click', clickedOn, false);

        if (gamesetting == "2player") {
            player = "Y";
        }

    }

    else {
        document.getElementById("lp").className = "btn btn-success";
        document.getElementById("rp").className = "btn btn-outline-dark";
        document.getElementById(this.id).innerHTML = "<img src='../img/O.png' />";
        document.getElementById(this.id).className = "squareplayed";

        if (gamesetting == "2player") {
            player = "X";
        }
    }

    checkWinner();
}

function checkWinner() {

    console.log("No winner... " + gamesetting);
    /* check if all squares played -- tie */

    if (gamesetting !== "2player") {
        console.log(gamesetting);
        /* delay computer play to make it seem as if it is calculating, but it really isn't */
        setTimeout(computerPlays, 1000);
    }

}

function computerPlays() {

    console.log("Computer plays");

    var sqelements = document.getElementsByClassName("square");

    const random = Math.floor(Math.random() * sqelements.length);

    console.log(random, sqelements[random], sqelements[random].id);

    if (player == "X") {

        document.getElementById(sqelements[random].id).innerHTML = "<img src='../img/O.png' />";
        document.getElementById(sqelements[random].id).className = "squareplayed";
        document.getElementById("lp").className = "btn btn-success";
        document.getElementById("rp").className = "btn btn-outline-dark";

    }

    else {

        document.getElementById(sqelements[random].id).innerHTML = "<img src='../img/X.png' />";
        document.getElementById(sqelements[random].id).className = "squareplayed";
        document.getElementById("lp").className = "btn btn-outline-dark";
        document.getElementById("rp").className = "btn btn-success";

    }

    /* check winner */

}