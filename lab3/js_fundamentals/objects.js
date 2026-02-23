'use strict';
let user = {
    name: 'John',
    surname: 'Smith'
}
alert(user.name);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
user.name = "Pete";
delete user.name;
let sum=0
for(let key in salaries){
    sum=sum+salaries[key];
}
alert(sum)

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};


function multiplyNumeric(obj){
for(let key in obj){
    if(typeof obj[key] == 'number'){
        obj[key] *=2 ;
    }
}
}
multiplyNumeric(menu);