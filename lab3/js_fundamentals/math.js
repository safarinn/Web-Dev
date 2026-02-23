let x=1;
x =- x;
alert( x ); //-1
alert('1' + 2 * 2); //14
alert(2 + 2 + '1' ); //41
alert( '1' + 2 ); //12
alert( 2 + '1' ); //21
let s = "my" + " string";
alert(s);
alert( 6 - '2' ); //4
alert( '6' / '2' ); //3
alert( +true ); // 1
alert( +"" );   // 0
let y = -2;
alert( +y ); //-2
alert( +true ); //1
alert( +"" ); //0

let z = 1;
alert( +z ); //1

let apples = "2";
let oranges = "3";
alert( +apples + +oranges ) //5

let n = 2;
n *= 3 + 5; //  n *= 8
alert( n ); //16

let counter = 2;
counter++;  //3
++counter; //4
alert( counter );

let co = 0;
alert( ++co ); // 1'
alert(co++); //0

let cou = 1;
alert( 2 * cou++ ); //2
alert( 3 * ++cou); //9

let a = (1 + 2, 3 + 4);
alert( a ) //7 last element is accepted

let d = 2;
let q = 1 + (d *= 2);
alert( q );
alert( d);

let f = prompt("First number?", 1);
let g = prompt("Second number?", 2);
alert(+f + +g); // 3
alert(f+g) //12

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );
if (year == 2016) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
}
