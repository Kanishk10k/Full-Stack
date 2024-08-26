//events

// document.getElementById("button").onclick=function(){
//     console.log("Hello Techno");
    
// }

// document.getElementById("button").onclick=function(){
//     let newDiv=document.createElement("div");
//     newDiv.style.width="200px";
//     newDiv.style.height="200px";
//     newDiv.style.backgroundColor="yellow";
//     document.body.appendChild(newDiv);
// }

// above method is not used any more previously it was used
//modern way of doing is addEventListeners

// here click and onclick is same 
// document.getElementById("button").addEventListener("click",function () {
//     let newDiv=document.createElement("div");
//     newDiv.style.width="200px";
//     newDiv.style.height="200px";
//     newDiv.style.backgroundColor="yellow";
//     newDiv.style.border="5px solid black";
//     document.body.appendChild(newDiv);
    
// })

// document.getElementById("box").addEventListener("mouseenter",function(){
//    document.getElementById("box").style.backgroundColor="blue";
// }) 

// document.getElementById("name").addEventListener("Change",function(){
//     let fieldValue= document.getElementById("name").value;
//     console.log(fieldValue);
    
// })

let obj={};
function getValue(a){
    
    obj[a.target.name]=a.target.value;
    console.log(obj);
    
}
document.getElementById("name").addEventListener("change",function(){
    getValue(event)
});
document.getElementById("name1").addEventListener("change",function(){
    getValue(event)
});