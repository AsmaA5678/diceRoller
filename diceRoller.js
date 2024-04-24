//console.log(`Hello`); 
/*window.alert('XXXX!'); add a window */
//document.getElementById("myH1").textContent='i like pizza';
//declare: let x;
// assignment: x=100;
// console.log('you are ${x} years old');
// typeof x   number
// let username;
// username= window.prompt('ur name?'); window to ask for an information
/*document.getElementById("mybutton").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myH1").textContent=`hello ${username}`;
}*/
/*let age= window.prompt('how old are you');
Number(age);*/
// const instead of let : to not change the constant
function rollDice(){
    const numOfDice=document.getElementById("numOfDice").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImages");
    const values=[];
    const images=[];
for(let i=0; i<numOfDice; i++){
    const value = Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png">`);
}
diceResult.textContent=`dice: ${values.join(',')}`;
diceImages.innerHTML=images.join('');
}