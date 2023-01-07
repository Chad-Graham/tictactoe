var elements = document.getElementsByClassName("square");
var player = "X";
var winner = "";
var gamesetting = "2player"
var temp = "";

const squareplayed = { sq1: 0, sq2: 0, sq3: 0, sq4: 0, sq5: 0, sq6: 0, sq7: 0, sq8: 0, sq9: 0, };

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', clickedOn, false);
}

document.getElementById("Xchoice").addEventListener('click', playerX, false)
document.getElementById("Ochoice").addEventListener('click', playerO, false)
document.getElementById("Twochoice").addEventListener('click', twoPlayer, false)

function playerO() {
    player = "O";
    document.getElementById("leftplayer").innerHTML = "<button type='button' class='btn btn-dark' disabled='disabled'>computer\: X</button>";
    document.getElementById("rightplayer").innerHTML = "<button type='button' class='btn btn-dark' disabled='disabled'>player 1\: O</button>";
    document.getElementById("Xchoice").className = "dropdown-item";
    document.getElementById("Ochoice").className = "dropdown-item active";

    winner = "";
    squareplayed = { sq1: 0, sq2: 0, sq3: 0, sq4: 0, sq5: 1, sq6: 0, sq7: 0, sq8: 0, sq9: 0, };

    document.getElementById("sq1").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq1").className = "square";
    document.getElementById("sq2").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq2").className = "square";
    document.getElementById("sq3").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq3").className = "square";
    document.getElementById("sq4").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq4").className = "square";
    document.getElementById("sq5").innerHTML = "<img src='../img/X.png' />";
    document.getElementById("sq5").className = "squareplayed";
    document.getElementById("sq6").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq6").className = "square";
    document.getElementById("sq7").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq7").className = "square";
    document.getElementById("sq8").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq8").className = "square";
    document.getElementById("sq9").innerHTML = "<img src='../img/none.png' />";
    document.getElementById("sq9").className = "square";

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', clickedOn, false);
    }
    
    document.getElementById("Xchoice").addEventListener('click', playerX, false)
    document.getElementById("Ochoice").addEventListener('click', playerO, false)
    document.getElementById("Twochoice").addEventListener('click', twoPlayer, false)
    return;
}

function playerX() {
    player = "X";
    document.getElementById("leftplayer").innerHTML = "<button type='button' class='btn btn-dark' disabled='disabled'>player 1\: X</button>";
    document.getElementById("rightplayer").innerHTML = "<button type='button' class='btn btn-dark' disabled='disabled'>computer\: O</button>";
    document.getElementById("Xchoice").className = "dropdown-item active";
    document.getElementById("Ochoice").className = "dropdown-item";

    winner = "";
    squareplayed = { sq1: 0, sq2: 0, sq3: 0, sq4: 0, sq5: 0, sq6: 0, sq7: 0, sq8: 0, sq9: 0, };


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
    
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', clickedOn, false);
    }
    
    document.getElementById("Xchoice").addEventListener('click', playerX, false)
    document.getElementById("Ochoice").addEventListener('click', playerO, false)
    document.getElementById("Twochoice").addEventListener('click', twoPlayer, false)
    return;
}

function twoPlayer() {
    gamesetting = "2player";
    document.getElementById("leftplayer").innerHTML = "<button type='button' class='btn btn-dark' disabled='disabled'>player 1\: X</button>";
    document.getElementById("rightplayer").innerHTML = "<button type='button' class='btn btn-dark' disabled='disabled'>player 2\: O</button>";
    document.getElementById("Xchoice").className = "dropdown-item";
    document.getElementById("Ochoice").className = "dropdown-item";
    document.getElementById("Ochoice").className = "dropdown-item active";
    
    
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', clickedOn, false);
    }
    
    document.getElementById("Xchoice").addEventListener('click', playerX, false)
    document.getElementById("Ochoice").addEventListener('click', playerO, false)
    document.getElementById("Twochoice").addEventListener('click', twoPlayer, false)


}

function clickedOn() {
    if (player == "X") {
        document.getElementById("lp").className = "btn btn-outline-dark";
        document.getElementById("rp").className = "btn btn-success";
        document.getElementById(this.id).innerHTML = "<img src='../img/X.png' />";
        document.getElementById(this.id).className = "squareplayed";
        document.getElementById(this.id).removeEventListener('click', clickedOn, false);
        if (gamesetting == "2player") {
            player = "Y";
            return;
        }
        return;
    }

    else {
        document.getElementById("lp").className = "btn btn-success";
        document.getElementById("rp").className = "btn btn-outline-dark";
        document.getElementById(this.id).innerHTML = "<img src='../img/O.png' />";
        document.getElementById(this.id).className = "squareplayed";
        if (gamesetting == "2player") {
            player = "X";
            return;
        }
        return;
    }
}





