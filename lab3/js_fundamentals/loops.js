let a=0;
do{
    alert(a);
    a++;
}while(a<3);

let sum=0
while(true){
    let res=+prompt("Type num",'');
    if (!res) break;

    sum+=res;
}
alert(sum)

let i=0;
while(i<3){
    alert(`number ${i}`);
    i++;
 }


 while(true) {
     let input = +prompt("Type number", '');
     if(input>100) break;
 }

let n = 10;
nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...
        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }
        alert( i ); // a prime

        let a = 2 + 2;
        switch (a) {
            case 3:
                alert( 'Too small' );
                break;
            case 4:
                alert( 'Exactly!' );
                break;
            case 5:
                alert( 'Too big' );
                break;
            default:
                alert( "I don't know such values" );
        }
    }

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert( message );
}
showMessage(); // Hello, I'm JavaScript!
alert( message ); // <-- Error! The variable is local to the function
let userName = 'John';
function showMessage2() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}

alert( userName ); // John before the function call



alert( userName ); // Bob, the value was modified by the function