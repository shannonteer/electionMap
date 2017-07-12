var makepolitician = function (NameString, partyColor) {
    var politician = {};
    politician.name = NameString;
    politician.partyColor = partyColor;
    politician.electionresults = null;
    politician.totalvotes = 0;
    console.log(politician.name + " is an excellent candidate");
    return politician;

};

var CookieMonster = makepolitician("Cookie Monster", ([132, 17, 11]));
console.log("CookieMonster's color is " + CookieMonster.partyColor);


var BigBird = makepolitician("Big Bird", ([245, 141, 136]));
console.log("BigBird's color is " + BigBird.partyColor);

CookieMonster.electionresults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
BigBird.electionresults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 12, 11, 2, 3, 1];


//RECOUNTS


CookieMonster.electionresults[9] = 1;
CookieMonster.electionresults[4] = 17;
CookieMonster.electionresults[43] = 11;
console.log(CookieMonster.electionresults);

BigBird.electionresults[9] = 28;
BigBird.electionresults[4] = 38;
BigBird.electionresults[43] = 27;
console.log(BigBird.electionresults);

//State Results


var setStateResults = function (state) {

    theStates[state].winner = null;

    if (CookieMonster.electionresults[state] < BigBird.electionresults[state]) {
        theStates[state].winner = BigBird;
    } else if (BigBird.electionresults[state] < CookieMonster.electionresults[state]) {
        theStates[state].winner = CookieMonster;
    }

    var stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;

    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }

    // Bottom Table

    var stateInfoTable = document.getElementById('stateResults');
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];
    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];
    var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText = theStates[state].nameAbbrev;
    candidate1Name.innerText = "COOKIE MONSTER";
    candidate2Name.innerText = "BIG BIRD";
    candidate1Results.innerText = CookieMonster.electionresults[state];
    candidate2Results.innerText = BigBird.electionresults[state];

    if (CookieMonster.electionresults[state] < BigBird.electionresults[state]) {
        winnersName.innerText = "Big Bird";
    } else if (BigBird.electionresults[state] < CookieMonster.electionresults[state]) {
        winnersName.innerText = "Cookie Monster";
    } else {
        winnersName.innerText = "DRAW";

        }
};


//Tally Election Results


CookieMonster.totalvotes = function () {
    this.totalvotes = 0;

    for (var i = 0; i < this.electionresults.length; i++) {
        this.totalvotes = this.totalvotes + this.electionresults [i];
        console.log(this.totalvotes);
    }

};

CookieMonster.totalvotes();


BigBird.totalvotes = function () {
    this.totalvotes = 0;

    for (var i = 0; i < this.electionresults.length; i++) {
        this.totalvotes = this.totalvotes + this.electionresults [i];
        console.log(this.totalvotes);
    }
};

BigBird.totalvotes();


var winner;

if (CookieMonster.totalvotes < BigBird.totalvotes) {
    winner = "BigBird";
} else if (BigBird.totalvotes < CookieMonster.totalvotes) {
    winner = "CookieMonster";
} else {
    winner = "IT'S A DRAW!!";
}

console.log("The winner is " + winner + " !!");


//Top table


var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = "COOKIE MONSTER";
row.children[1].innerText = CookieMonster.totalvotes;
row.children[2].innerText = "BIG BIRD";
row.children[3].innerText = BigBird.totalvotes;
row.children[5].innerText = winner;






