let user;
alert(user ?? "Anonymous"); //anonymous

let height =0;

alert(height || 100); // 100
alert(height ?? 100); //0

let heigh = null;
let width = null;
let area = heigh?? 100 * width ?? 50;
alert(area); //0
