let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

window.onload = () =>{
 
    document.getElementById("excuse").innerHTML = randomExcuse();
}
let randomExcuse = () =>{
    let randomName = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomObject = Math.floor(Math.random() * what.length);
    let randomTime = Math.floor(Math.random() * when.length);


    return who[randomName] + ' ' + action[randomAction] + ' ' + what[randomObject] + ' ' + when[randomTime];
}