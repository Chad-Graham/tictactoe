let player = "X";
let gamesetting = "2player";
let temp = "13";
let winner = "none";
let elements = document.getElementsByClassName("square");
let sqelements = document.getElementsByClassName("squareplayed");
let totalturns = 0;
let bestXmove = "none";
let bestOmove = "none";
let computerMove = "none";

function startGame(gametemp) {

    gamesetting = gametemp;
    winner = "none";
    bestXmove = "none";
    bestOmove = "none";
    computerMove = "none";

    if (gamesetting === "1playerO") { totalturns = 1; } else { totalturns = 0; }

    document.getElementById("sq1").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq1").className = "square";
    document.getElementById("sq1").dataset.square = "0";

    document.getElementById("sq2").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq2").className = "square";
    document.getElementById("sq2").dataset.square = "0";

    document.getElementById("sq3").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq3").className = "square";
    document.getElementById("sq3").dataset.square = "0";

    document.getElementById("sq4").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq4").className = "square";
    document.getElementById("sq4").dataset.square = "0";

    document.getElementById("sq5").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq5").className = "square";
    document.getElementById("sq5").dataset.square = "0";

    document.getElementById("sq6").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq6").className = "square";
    document.getElementById("sq6").dataset.square = "0";

    document.getElementById("sq7").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq7").className = "square";
    document.getElementById("sq7").dataset.square = "0";

    document.getElementById("sq8").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq8").className = "square";
    document.getElementById("sq8").dataset.square = "0";

    document.getElementById("sq9").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq9").className = "square";
    document.getElementById("sq9").dataset.square = "0";



    if (gamesetting == "1playerX") {

        player = "X";
        document.getElementById("leftplayer").innerHTML = "<button type='button' id='lp' class='btn btn-success' disabled='disabled'>player 1\: X</button>";
        document.getElementById("rightplayer").innerHTML = "<button type='button' id='rp' class='btn btn-outline-dark' disabled='disabled'>computer\: O</button>";
        document.getElementById("Xchoice").className = "dropdown-item active";
        document.getElementById("Ochoice").className = "dropdown-item";
        document.getElementById("Twochoice").className = "dropdown-item";
        document.getElementById("2remote").className = "dropdown-item";

    } else if (gamesetting == "1playerO") {

        player = "O";
        document.getElementById("leftplayer").innerHTML = "<button type='button' id='lp' class='btn btn-outline-dark' disabled='disabled'>computer\: X</button>";
        document.getElementById("rightplayer").innerHTML = "<button type='button' id='rp' class='btn btn-success' disabled='disabled'>player 1\: O</button>";
        document.getElementById("Xchoice").className = "dropdown-item";
        document.getElementById("Ochoice").className = "dropdown-item active";
        document.getElementById("Twochoice").className = "dropdown-item";
        document.getElementById("2remote").className = "dropdown-item";

        document.getElementById("sq5").innerHTML = "<img src='../img/X.png' />";
        document.getElementById("sq5").className = "squareplayed";
        document.getElementById("sq5").dataset.square = "1";

    } else {

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

    elements = document.getElementsByClassName("square");

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
        document.getElementById(this.id).setAttribute("data-square", "1");
        document.getElementById(this.id).removeEventListener('click', clickedOn, false);

        if (gamesetting == "2player") {
            player = "Y";
        }

    } else {
        document.getElementById("lp").className = "btn btn-success";
        document.getElementById("rp").className = "btn btn-outline-dark";
        document.getElementById(this.id).innerHTML = "<img src='../img/O.png' />";
        document.getElementById(this.id).className = "squareplayed";
        document.getElementById(this.id).setAttribute("data-square", "5");

        if (gamesetting == "2player") {
            player = "X";
        }
    }

    checkWinner();
}

function checkWinner() {

    switch (sq1.dataset.square + sq2.dataset.square + sq3.dataset.square) {
        case "111":
            document.getElementById("sq1").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq2").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq3").innerHTML = "<img src='../img/Xwin.png' />";
            setTimeout(haveWinnerX, 1000);
            break;

        case "555":
            document.getElementById("sq1").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq2").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq3").innerHTML = "<img src='../img/Owin.png' />";
            setTimeout(haveWinnerO, 1000);
            break;
    }

    switch (sq4.dataset.square + sq5.dataset.square + sq6.dataset.square) {
        case "111":
            document.getElementById("sq4").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq5").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq6").innerHTML = "<img src='../img/Xwin.png' />";
            setTimeout(haveWinnerX, 1000);
            break;

        case "555":
            document.getElementById("sq4").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq5").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq6").innerHTML = "<img src='../img/Owin.png' />";
            setTimeout(haveWinnerO, 1000);
            break;
    }

    switch (sq7.dataset.square + sq8.dataset.square + sq9.dataset.square) {
        case "111":
            document.getElementById("sq7").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq8").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq9").innerHTML = "<img src='../img/Xwin.png' />";
            setTimeout(haveWinnerX, 1000);
            break;

        case "555":
            document.getElementById("sq7").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq8").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq9").innerHTML = "<img src='../img/Owin.png' />";
            setTimeout(haveWinnerO, 1000);
            break;
    }

    switch (sq1.dataset.square + sq4.dataset.square + sq7.dataset.square) {
        case "111":
            document.getElementById("sq1").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq4").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq7").innerHTML = "<img src='../img/Xwin.png' />";
            setTimeout(haveWinnerX, 1000);
            break;

        case "555":
            document.getElementById("sq1").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq4").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq7").innerHTML = "<img src='../img/Owin.png' />";
            setTimeout(haveWinnerO, 1000);
            break;
    }

    switch (sq2.dataset.square + sq5.dataset.square + sq8.dataset.square) {
        case "111":
            document.getElementById("sq2").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq5").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq8").innerHTML = "<img src='../img/Xwin.png' />";
            winner = "X";
            setTimeout(haveWinnerX, 1000);
            break;

        case "555":
            document.getElementById("sq2").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq5").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq8").innerHTML = "<img src='../img/Owin.png' />";
            winner = "O";
            setTimeout(haveWinnerO, 1000);
            break;
    }

    switch (sq3.dataset.square + sq6.dataset.square + sq9.dataset.square) {
        case "111":
            document.getElementById("sq3").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq6").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq9").innerHTML = "<img src='../img/Xwin.png' />";
            winner = "X";
            setTimeout(haveWinnerX, 1000);
            break;

        case "555":
            document.getElementById("sq3").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq6").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq9").innerHTML = "<img src='../img/Owin.png' />";
            winner = "O";
            setTimeout(haveWinnerO, 1000);
            break;
    }

    switch (sq1.dataset.square + sq5.dataset.square + sq9.dataset.square) {
        case "111":
            document.getElementById("sq1").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq5").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq9").innerHTML = "<img src='../img/Xwin.png' />";
            winner = "X";
            setTimeout(haveWinnerX, 1000);
            break;

        case "555":
            document.getElementById("sq1").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq5").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq9").innerHTML = "<img src='../img/Owin.png' />";
            winner = "O";
            setTimeout(haveWinnerO, 1000);
            break;
    }

    switch (sq3.dataset.square + sq5.dataset.square + sq7.dataset.square) {
        case "111":
            document.getElementById("sq3").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq5").innerHTML = "<img src='../img/Xwin.png' />";

            document.getElementById("sq7").innerHTML = "<img src='../img/Xwin.png' />";
            winner = "X";
            setTimeout(haveWinnerX, 1000);
            break;

        case "555":
            document.getElementById("sq3").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq5").innerHTML = "<img src='../img/Owin.png' />";

            document.getElementById("sq7").innerHTML = "<img src='../img/Owin.png' />";
            winner = "O";
            setTimeout(haveWinnerO, 1000);
            break;
    }

    totalturns += 1;
    if (totalturns === 9) {
        console.log("have tie at 318 checkWinner after player move");
        haveTie();
    }



    if (gamesetting !== "2player") {
        console.log(gamesetting);
        /* delay computer play to make it seem as if it is calculating, but it really isn't */
        sqelements = document.getElementsByClassName("square");

        if (sqelements.length > 0) {
            setTimeout(computerPlays, 1000);
        }

    }


}

function computerPlays() {

    sqelements = document.getElementsByClassName("square");
    bestXmove = "none";
    bestOmove = "none";
    computerMove = "none";

    // check row 1
    if (sq1.dataset.square + sq2.dataset.square + sq3.dataset.square == "011") {
        bestXmove = "sq1";
    } else if (sq1.dataset.square + sq2.dataset.square + sq3.dataset.square == "101") {
        bestXmove = "sq2";
    } else if (sq1.dataset.square + sq2.dataset.square + sq3.dataset.square == "110") {
        bestXmove = "sq3";
    } else if (sq1.dataset.square + sq2.dataset.square + sq3.dataset.square == "055") {
        bestOmove = "sq1";
    } else if (sq1.dataset.square + sq2.dataset.square + sq3.dataset.square == "505") {
        bestOmove = "sq2";
    } else if (sq1.dataset.square + sq2.dataset.square + sq3.dataset.square == "550") {
        bestOmove = "sq3";
    }

    // check row 2
    if (sq4.dataset.square + sq5.dataset.square + sq6.dataset.square == "011") {
        bestXmove = "sq4";
    } else if (sq4.dataset.square + sq5.dataset.square + sq6.dataset.square == "101") {
        bestXmove = "sq5";
    } else if (sq4.dataset.square + sq5.dataset.square + sq6.dataset.square == "110") {
        bestXmove = "sq6";
    } else if (sq4.dataset.square + sq5.dataset.square + sq6.dataset.square == "055") {
        bestOmove = "sq4";
    } else if (sq4.dataset.square + sq5.dataset.square + sq6.dataset.square == "505") {
        bestOmove = "sq5";
    } else if (sq4.dataset.square + sq5.dataset.square + sq6.dataset.square == "550") {
        bestOmove = "sq6";
    }

    // check row 3
    if (sq7.dataset.square + sq8.dataset.square + sq9.dataset.square == "011") {
        bestXmove = "sq7";
    } else if (sq7.dataset.square + sq8.dataset.square + sq9.dataset.square == "101") {
        bestXmove = "sq8";
    } else if (sq7.dataset.square + sq8.dataset.square + sq9.dataset.square == "110") {
        bestXmove = "sq9";
    } else if (sq7.dataset.square + sq8.dataset.square + sq9.dataset.square == "055") {
        bestOmove = "sq7";
    } else if (sq7.dataset.square + sq8.dataset.square + sq9.dataset.square == "505") {
        bestOmove = "sq8";
    } else if (sq7.dataset.square + sq8.dataset.square + sq9.dataset.square == "550") {
        bestOmove = "sq9";
    }

    // check column 1
    if (sq1.dataset.square + sq4.dataset.square + sq7.dataset.square == "011") {
        bestXmove = "sq1";
    } else if (sq1.dataset.square + sq4.dataset.square + sq7.dataset.square == "101") {
        bestXmove = "sq4";
    } else if (sq1.dataset.square + sq4.dataset.square + sq7.dataset.square == "110") {
        bestXmove = "sq7";
    } else if (sq1.dataset.square + sq4.dataset.square + sq7.dataset.square == "055") {
        bestOmove = "sq1";
    } else if (sq1.dataset.square + sq4.dataset.square + sq7.dataset.square == "505") {
        bestOmove = "sq4";
    } else if (sq1.dataset.square + sq4.dataset.square + sq7.dataset.square == "550") {
        bestOmove = "sq7";
    }

    // check column 2
    if (sq2.dataset.square + sq5.dataset.square + sq8.dataset.square == "011") {
        bestXmove = "sq2";
    } else if (sq2.dataset.square + sq5.dataset.square + sq8.dataset.square == "101") {
        bestXmove = "sq5";
    } else if (sq2.dataset.square + sq5.dataset.square + sq8.dataset.square == "110") {
        bestXmove = "sq8";
    } else if (sq2.dataset.square + sq5.dataset.square + sq8.dataset.square == "055") {
        bestOmove = "sq2";
    } else if (sq2.dataset.square + sq5.dataset.square + sq8.dataset.square == "505") {
        bestOmove = "sq5";
    } else if (sq2.dataset.square + sq5.dataset.square + sq8.dataset.square == "550") {
        bestOmove = "sq8";
    }

    // check column 3
    if (sq3.dataset.square + sq6.dataset.square + sq9.dataset.square == "011") {
        bestXmove = "sq3";
    } else if (sq3.dataset.square + sq6.dataset.square + sq9.dataset.square == "101") {
        bestXmove = "sq6";
    } else if (sq3.dataset.square + sq6.dataset.square + sq9.dataset.square == "110") {
        bestXmove = "sq9";
    } else if (sq3.dataset.square + sq6.dataset.square + sq9.dataset.square == "055") {
        bestOmove = "sq3";
    } else if (sq3.dataset.square + sq6.dataset.square + sq9.dataset.square == "505") {
        bestOmove = "sq6";
    } else if (sq3.dataset.square + sq6.dataset.square + sq9.dataset.square == "550") {
        bestOmove = "sq9";
    }

    // check diagonal 1
    if (sq1.dataset.square + sq5.dataset.square + sq9.dataset.square == "011") {
        bestXmove = "sq1";
    } else if (sq1.dataset.square + sq5.dataset.square + sq9.dataset.square == "101") {
        bestXmove = "sq5";
    } else if (sq1.dataset.square + sq5.dataset.square + sq9.dataset.square == "110") {
        bestXmove = "sq9";
    } else if (sq1.dataset.square + sq5.dataset.square + sq9.dataset.square == "055") {
        bestOmove = "sq1";
    } else if (sq1.dataset.square + sq5.dataset.square + sq9.dataset.square == "505") {
        bestOmove = "sq5";
    } else if (sq1.dataset.square + sq5.dataset.square + sq9.dataset.square == "550") {
        bestOmove = "sq9";
    }

    // check diagonal 2
    if (sq7.dataset.square + sq5.dataset.square + sq3.dataset.square == "011") {
        bestXmove = "sq7";
    } else if (sq7.dataset.square + sq5.dataset.square + sq3.dataset.square == "101") {
        bestXmove = "sq5";
    } else if (sq7.dataset.square + sq5.dataset.square + sq3.dataset.square == "110") {
        bestXmove = "sq3";
    } else if (sq7.dataset.square + sq5.dataset.square + sq3.dataset.square == "055") {
        bestOmove = "sq7";
    } else if (sq7.dataset.square + sq5.dataset.square + sq3.dataset.square == "505") {
        bestOmove = "sq5";
    } else if (sq7.dataset.square + sq5.dataset.square + sq3.dataset.square == "550") {
        bestOmove = "sq3";
    }

    if (player === "X" && bestOmove !== "none") {
        computerMove = bestOmove;
    } else if (player === "X" && bestXmove !== "none") {
        computerMove = bestXmove;
    } else if (player === "O" && bestXmove !== "none") {
        computerMove = bestXmove;
    } else if (player === "O" && bestOmove !== "none") {
        computerMove = bestOmove;
    }

    /* ensure move is in blank space */
    if (computerMove !== "none") {
        if (document.getElementById(computerMove).className === "squareplayed") {
            computerMove = "none";
        }
    }

    if (sqelements.length === 0) {
        console.log("have tie at 479 after computer play");
        haveTie();
    } else {
        if (computerMove === "none") {
            let random = Math.floor(Math.random() * sqelements.length);
            console.log("This is random play: " + sqelements[random].id);

            computerMove = sqelements[random].id;
        }

        /* checking computerMove again prevents followuing code from running after tie */
        if (computerMove !== "none") {
            console.log("computer move " + computerMove);
            console.log("best X move " + bestXmove);
            console.log("best O move " + bestOmove);

            if (player == "X") {

                document.getElementById(computerMove).innerHTML = "<img src='../img/O.png' />";
                document.getElementById(computerMove).className = "squareplayed";
                document.getElementById(computerMove).setAttribute("data-square", "5");
                document.getElementById("lp").className = "btn btn-success";
                document.getElementById("rp").className = "btn btn-outline-dark";

            } else {

                document.getElementById(computerMove).innerHTML = "<img src='../img/X.png' />";
                document.getElementById(computerMove).className = "squareplayed";
                document.getElementById(computerMove).setAttribute("data-square", "1");
                document.getElementById("lp").className = "btn btn-outline-dark";
                document.getElementById("rp").className = "btn btn-success";

            }

            /* check for win */
            switch (sq1.dataset.square + sq2.dataset.square + sq3.dataset.square) {
                case "111":
                    document.getElementById("sq1").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq2").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq3").innerHTML = "<img src='../img/Xwin.png' />";
                    setTimeout(haveWinnerX, 1000);
                    break;

                case "555":
                    document.getElementById("sq1").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq2").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq3").innerHTML = "<img src='../img/Owin.png' />";
                    setTimeout(haveWinnerO, 1000);
                    break;
            }

            switch (sq4.dataset.square + sq5.dataset.square + sq6.dataset.square) {
                case "111":
                    document.getElementById("sq4").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq5").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq6").innerHTML = "<img src='../img/Xwin.png' />";
                    setTimeout(haveWinnerX, 1000);
                    break;

                case "555":
                    document.getElementById("sq4").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq5").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq6").innerHTML = "<img src='../img/Owin.png' />";
                    setTimeout(haveWinnerO, 1000);
                    break;
            }

            switch (sq7.dataset.square + sq8.dataset.square + sq9.dataset.square) {
                case "111":
                    document.getElementById("sq7").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq8").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq9").innerHTML = "<img src='../img/Xwin.png' />";
                    setTimeout(haveWinnerX, 1000);
                    break;

                case "555":
                    document.getElementById("sq7").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq8").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq9").innerHTML = "<img src='../img/Owin.png' />";
                    setTimeout(haveWinnerO, 1000);
                    break;
            }

            switch (sq1.dataset.square + sq4.dataset.square + sq7.dataset.square) {
                case "111":
                    document.getElementById("sq1").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq4").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq7").innerHTML = "<img src='../img/Xwin.png' />";
                    setTimeout(haveWinnerX, 1000);
                    break;

                case "555":
                    document.getElementById("sq1").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq4").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq7").innerHTML = "<img src='../img/Owin.png' />";
                    setTimeout(haveWinnerO, 1000);
                    break;
            }

            switch (sq2.dataset.square + sq5.dataset.square + sq8.dataset.square) {
                case "111":
                    document.getElementById("sq2").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq5").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq8").innerHTML = "<img src='../img/Xwin.png' />";
                    winner = "X";
                    setTimeout(haveWinnerX, 1000);
                    break;

                case "555":
                    document.getElementById("sq2").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq5").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq8").innerHTML = "<img src='../img/Owin.png' />";
                    winner = "O";
                    setTimeout(haveWinnerO, 1000);
                    break;
            }

            switch (sq3.dataset.square + sq6.dataset.square + sq9.dataset.square) {
                case "111":
                    document.getElementById("sq3").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq6").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq9").innerHTML = "<img src='../img/Xwin.png' />";
                    winner = "X";
                    setTimeout(haveWinnerX, 1000);
                    break;

                case "555":
                    document.getElementById("sq3").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq6").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq9").innerHTML = "<img src='../img/Owin.png' />";
                    winner = "O";
                    setTimeout(haveWinnerO, 1000);
                    break;
            }

            switch (sq1.dataset.square + sq5.dataset.square + sq9.dataset.square) {
                case "111":
                    document.getElementById("sq1").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq5").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq9").innerHTML = "<img src='../img/Xwin.png' />";
                    winner = "X";
                    setTimeout(haveWinnerX, 1000);
                    break;

                case "555":
                    document.getElementById("sq1").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq5").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq9").innerHTML = "<img src='../img/Owin.png' />";
                    winner = "O";
                    setTimeout(haveWinnerO, 1000);
                    break;
            }

            switch (sq3.dataset.square + sq5.dataset.square + sq7.dataset.square) {
                case "111":
                    document.getElementById("sq3").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq5").innerHTML = "<img src='../img/Xwin.png' />";

                    document.getElementById("sq7").innerHTML = "<img src='../img/Xwin.png' />";
                    winner = "X";
                    setTimeout(haveWinnerX, 1000);
                    break;

                case "555":
                    document.getElementById("sq3").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq5").innerHTML = "<img src='../img/Owin.png' />";

                    document.getElementById("sq7").innerHTML = "<img src='../img/Owin.png' />";
                    winner = "O";
                    setTimeout(haveWinnerO, 1000);
                    break;
            }

            totalturns += 1;
            if (totalturns === 9) {
                console.log("have tie at 682");
                haveTie();
            }

        }

    }


}

function haveWinnerX() {
    document.getElementById("lp").className = "btn btn-outline-success";
    document.getElementById("rp").className = "btn btn-outline-dark";

    for (var i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('click', clickedOn, false);
    }

    /*note: iterating through squares to change class provided unreliable results, thus line-by-line below */

    document.getElementById("sq1").className = "squareplayed";
    document.getElementById("sq2").className = "squareplayed";
    document.getElementById("sq3").className = "squareplayed";
    document.getElementById("sq4").className = "squareplayed";
    document.getElementById("sq5").className = "squareplayed";
    document.getElementById("sq6").className = "squareplayed";
    document.getElementById("sq7").className = "squareplayed";
    document.getElementById("sq8").className = "squareplayed";
    document.getElementById("sq9").className = "squareplayed";

    alert("X wins!");

}

function haveWinnerO() {
    document.getElementById("lp").className = "btn btn-outline-dark";
    document.getElementById("rp").className = "btn btn-outline-success";

    for (var i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('click', clickedOn, false);
    }

    /*note: iterating through squares to change class provided unreliable results, thus line-by-line below */

    document.getElementById("sq1").className = "squareplayed";
    document.getElementById("sq2").className = "squareplayed";
    document.getElementById("sq3").className = "squareplayed";
    document.getElementById("sq4").className = "squareplayed";
    document.getElementById("sq5").className = "squareplayed";
    document.getElementById("sq6").className = "squareplayed";
    document.getElementById("sq7").className = "squareplayed";
    document.getElementById("sq8").className = "squareplayed";
    document.getElementById("sq9").className = "squareplayed";

    alert("O wins!");
}

function haveTie() {
    alert("Tie game!");

}