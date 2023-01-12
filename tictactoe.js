window.onload = function loaddata() {
    if (localStorage.getItem('currentplayer') == 1) {
        document.getElementById('player-name-1').style.color = "red";
        document.getElementById('player-name-2').style.color = "black";
    }
    else {
        document.getElementById('player-name-1').style.color = "black";
        document.getElementById('player-name-2').style.color = "red";
    }

    let pname1 = localStorage.getItem('name-one');
    let pname2 = localStorage.getItem('name-two');

    document.getElementById('player-name-1').innerText = pname1;
    document.getElementById('player-name1').innerText = pname1;
    document.getElementById('player-name-2').innerText = pname2;
    document.getElementById('player-name2').innerText = pname2;
    document.getElementById('pOne_won').innerText = "Won : " + localStorage.getItem('p-one-won');
    document.getElementById('pOne_lost').innerText = "Lost : " + localStorage.getItem('p-one-lost');
    document.getElementById('pOne_draw').innerText = "Draw : " + localStorage.getItem('p-one-draw');

    document.getElementById('pTwo_won').innerText = "Won : " + localStorage.getItem('p-two-won');
    document.getElementById('pTwo_lost').innerText = "Lost : " + localStorage.getItem('p-two-lost');
    document.getElementById('pTwo_draw').innerText = "Draw : " + localStorage.getItem('p-two-draw');
}

var messipics_count = 1;
function changeMessiPhoto() {
    count = (messipics_count % 7)+1;
    document.getElementById('messipic').innerHTML = `
    <tr id="messipic" >
        <td onclick="changeMessiPhoto()"> <img src="messi/messi (${count}).png"></td>
    </tr>
    `;
    messipics_count++;
}

var ronaldopics_count = 1;
function changeRonaldoPhoto() {
    count = (ronaldopics_count % 7)+1;
    document.getElementById('ronaldopic').innerHTML = `
        <td id="ronaldopic" onclick="changeRonaldoPhoto()"> <img src="ronaldo/ronaldo (${count}).jpg" alt=""></td>
    `;
    ronaldopics_count++;
}

function playAgain() {
    localStorage.setItem('box1', "-");
    localStorage.setItem('box2', "-");
    localStorage.setItem('box3', "-");
    localStorage.setItem('box4', "-");
    localStorage.setItem('box5', "-");
    localStorage.setItem('box6', "-");
    localStorage.setItem('box7', "-");
    localStorage.setItem('box8', "-");
    localStorage.setItem('box9', "-");
    localStorage.setItem('matchstatus', 0);
    for (let i = 1; i <= 9; i++) {
        document.getElementById("box" + i).innerText = "";
        document.getElementById("box" + i).style.backgroundColor = "darkgrey";
    }

    if (localStorage.getItem('currentplayer') == 1) {
        document.getElementById('player-name-1').style.color = "red";
        document.getElementById('player-name-2').style.color = "black";
    }
    else {
        document.getElementById('player-name-1').style.color = "black";
        document.getElementById('player-name-2').style.color = "red";
    }
}

function displaystats() {
    document.getElementById('pOne_won').innerText = "Won : " + localStorage.getItem('p-one-won');
    document.getElementById('pOne_lost').innerText = "Lost : " + localStorage.getItem('p-one-lost');
    document.getElementById('pOne_draw').innerText = "Draw : " + localStorage.getItem('p-one-draw');

    document.getElementById('pTwo_won').innerText = "Won : " + localStorage.getItem('p-two-won');
    document.getElementById('pTwo_lost').innerText = "Lost : " + localStorage.getItem('p-two-lost');
    document.getElementById('pTwo_draw').innerText = "Draw : " + localStorage.getItem('p-two-draw');
}
function checkMatches(player_no) {
    match_status = localStorage.getItem('matchstatus');
    if (localStorage.getItem('box1') != "-" && match_status == 0) {
        if (localStorage.getItem('box1') == localStorage.getItem('box2'))
            if (localStorage.getItem('box1') == localStorage.getItem('box3')) {
                document.getElementById('box1').style.backgroundColor = "red";
                document.getElementById('box2').style.backgroundColor = "red";
                document.getElementById('box3').style.backgroundColor = "red";
                match_status = 1;
            }
    }

    if (localStorage.getItem('box4') != "-" && match_status == 0) {
        if (localStorage.getItem('box4') == localStorage.getItem('box5'))
            if (localStorage.getItem('box4') == localStorage.getItem('box6')) {
                document.getElementById('box4').style.backgroundColor = "red";
                document.getElementById('box5').style.backgroundColor = "red";
                document.getElementById('box6').style.backgroundColor = "red";
                match_status = 1;
            }
    }

    if (localStorage.getItem('box7') != "-" && match_status == 0) {
        if (localStorage.getItem('box7') == localStorage.getItem('box8'))
            if (localStorage.getItem('box7') == localStorage.getItem('box9')) {
                document.getElementById('box7').style.backgroundColor = "red";
                document.getElementById('box8').style.backgroundColor = "red";
                document.getElementById('box9').style.backgroundColor = "red";
                match_status = 1;
            }
    }

    if (localStorage.getItem('box1') != "-" && match_status == 0) {
        if (localStorage.getItem('box1') == localStorage.getItem('box4'))
            if (localStorage.getItem('box1') == localStorage.getItem('box7')) {
                document.getElementById('box1').style.backgroundColor = "red";
                document.getElementById('box4').style.backgroundColor = "red";
                document.getElementById('box7').style.backgroundColor = "red";
                match_status = 1;
            }
    }

    if (localStorage.getItem('box2') != "-" && match_status == 0) {
        if (localStorage.getItem('box2') == localStorage.getItem('box5'))
            if (localStorage.getItem('box2') == localStorage.getItem('box8')) {
                document.getElementById('box2').style.backgroundColor = "red";
                document.getElementById('box5').style.backgroundColor = "red";
                document.getElementById('box8').style.backgroundColor = "red";
                match_status = 1;
            }
    }

    if (localStorage.getItem('box3') != "-" && match_status == 0) {
        if (localStorage.getItem('box3') == localStorage.getItem('box6'))
            if (localStorage.getItem('box3') == localStorage.getItem('box9')) {
                document.getElementById('box3').style.backgroundColor = "red";
                document.getElementById('box6').style.backgroundColor = "red";
                document.getElementById('box9').style.backgroundColor = "red";
                match_status = 1;
            }
    }

    if (localStorage.getItem('box1') != "-" && match_status == 0) {
        if (localStorage.getItem('box1') == localStorage.getItem('box5'))
            if (localStorage.getItem('box1') == localStorage.getItem('box9')) {
                document.getElementById('box1').style.backgroundColor = "red";
                document.getElementById('box5').style.backgroundColor = "red";
                document.getElementById('box9').style.backgroundColor = "red";
                match_status = 1;
            }
    }

    if (localStorage.getItem('box3') != "-" && match_status == 0) {
        if (localStorage.getItem('box3') == localStorage.getItem('box5'))
            if (localStorage.getItem('box3') == localStorage.getItem('box7')) {
                document.getElementById('box3').style.backgroundColor = "red";
                document.getElementById('box5').style.backgroundColor = "red";
                document.getElementById('box7').style.backgroundColor = "red";
                match_status = 1;
            }
    }

    if (match_status == 1) {
        localStorage.setItem('matchstatus', 1);
        if (player_no == 1) {
            let pOwon = localStorage.getItem('p-one-won');
            let pTlost = localStorage.getItem('p-two-lost');
            pOwon = parseInt(pOwon);
            pOwon += 1;

            pTlost = parseInt(pTlost);
            pTlost += 1;

            localStorage.setItem('p-one-won', pOwon);
            localStorage.setItem('p-two-lost', pTlost);
            localStorage.setItem('currentplayer', 1);
        }

        else {
            pTwon = localStorage.getItem('p-two-won');
            pOlost = localStorage.getItem('p-one-lost');
            pTwon = parseInt(pTwon);
            pTwon += 1;

            pOlost = parseInt(pOlost);
            pOlost += 1;

            localStorage.setItem('p-one-lost', pOlost);
            localStorage.setItem('p-two-won', pTwon);
            localStorage.setItem('currentplayer', 2);
        }
    }

    incomplete_box = 0;
    box_id = "box";
    for (let i = 1; i <= 9 && incomplete_box == 0; i++) {
        if (localStorage.getItem(box_id + i) == "-")
            incomplete_box = 1;
    }


    if (incomplete_box == 0 && match_status == 0) {
        pTdraw = localStorage.getItem('p-two-draw');
        pOdraw = localStorage.getItem('p-one-draw');
        pTdraw = parseInt(pTdraw);
        pTdraw += 1;

        pOdraw = parseInt(pOdraw);
        pOdraw += 1;

        localStorage.setItem('p-one-draw', pOdraw);
        localStorage.setItem('p-two-draw', pTdraw);
    }

    displaystats();
}

function fillBox(box_value) {
    if (localStorage.getItem('matchstatus') == 1)
        return;

    let temp = box_value;
    let element_id = "box" + temp;
    let current_sign = "";
    let player = localStorage.getItem('currentplayer');
    if (localStorage.getItem('currentplayer') == 1)
        current_sign = "X";
    else
        current_sign = "O";

    if (localStorage.getItem(element_id) == "-") {
        document.getElementById(element_id).innerText = current_sign;
        document.getElementById(element_id).style.fontSize = "100px";

        if (localStorage.getItem('currentplayer') == 1) {
            localStorage.setItem('currentplayer', 2);
            document.getElementById(element_id).style.backgroundColor = "darkgreen";
        }

        else {
            localStorage.setItem('currentplayer', 1);
            document.getElementById(element_id).style.backgroundColor = "darkblue";
        }

        localStorage.setItem(element_id, current_sign);
    }

    else if (localStorage.getItem(element_id) == "X") {
        console.log("Player X has taken it");
    }

    else if (localStorage.getItem(element_id) == "O") {
        console.log("Player O has taken it");
    }

    checkMatches(player);

    if (localStorage.getItem('currentplayer') == 1) {
        document.getElementById('player-name-1').style.color = "red";
        document.getElementById('player-name-2').style.color = "black";
    }
    else {
        document.getElementById('player-name-1').style.color = "black";
        document.getElementById('player-name-2').style.color = "red";
    }
}