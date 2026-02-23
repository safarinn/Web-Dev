let year = prompt('In which year was the ECMAScript-2015 specification published?', '');
if (year == 2015) {
    alert( 'You guessed it right!' );
} else {
    alert( 'How can you be so wrong?' ); // any value except 2015
}

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';
alert( message );

let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
    alert('Right!') : alert('Wrong.');

if ("0") {
    alert( 'Hello' );
}

let value = prompt('What is the "official" name of JavaScript?', '');
if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

let a=prompt('Type a number', 0);
if(a>0){
    alert(1);
}
else if(a<0){
    alert(-1);
}
else{
    alert(0);
}

let c=prompt("Type c",'');
let b = prompt('Type  b','');
let result = (+c + +b < 4) ? 'Below' : 'Over';
alert(result);


let login=prompt('Login','');
let q = (login == 'Employee') ?
   'Hello': (login == 'Director') ? 'Greetings' :
 (login == '') ? 'No login':  '';
alert(q);


let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'The office is closed.' ); // it is the weekend
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

true || alert("not printed");
false || alert("printed");

alert( alert(1) && alert(2) ); //1 then undefined
alert( null || 2 && 3 || 4 ); //3