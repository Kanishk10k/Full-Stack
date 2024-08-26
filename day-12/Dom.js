// console.log(document); //see this on chrome console window
// console.log(window); //see this on chrome console window
let myDiv=document.getElementById("main");
// console.log(myDiv);

// >myDiv.id
//'main'

//change the id 
// >myDiv.id="conatiner";

//>myDiv.class
//undefined

// >myDiv.className
//there is nothing called class in browser console actually it is call className

//>myDiv.className="heading"
// console.log(myDiv);

//>myDiv.style.width="200px";

//>myDiv.style.height="200px";

//>myDiv.style,background="red"
//op:-'red'

// >myDiv.style.boderRadius="20px";
// 20px

// >myDiv.style.boder="4px solid black";

// console.log(myDiv.getAttribute("style"));

console.log(myDiv.getAttribute("class"));
console.log(myDiv.className);
myDiv.setAttribute("id","container");
console.log(myDiv);




