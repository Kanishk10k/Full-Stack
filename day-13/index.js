// let myDiv=document.getElementById("main");
// myDiv.id="conatiner";
// myDiv.className="head";
// myDiv.style.width="200px";
// myDiv.style.height="200px";
// myDiv.style.backgroundColor="green";
// myDiv.style.borderRadius="20px";

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));
// console.log(myDiv.getAttribute("style"));


// myDiv.setAttribute("id","text");
// console.log(myDiv.getAttribute("id","text"));

// myDiv.setAttribute("style","background-color:red");
// setAttribute will replace the previous style and then implement the new style where as when we do with 
//dot operator add on kerta hai previous property ko like height width as seen above it do not replace it
//id is string hence setattribute change its value instead of replacing it and in case of style which is object 
// it first replace the previous style property then implement new one


//behind the scene
// let obj={
//     id:"main",
//     style:{
//         width:"200px",
//         height:"200px",
//         backgroundColor:"green"
//     }
// }

// obj.id="container";
// obj.style.borderRadius="20px";


// //setAttribute
// obj.id="head";
// obj.style={
//     backgroundColor:"red"
// }

//innerHtml,innerText,textContent 
//Difference is asked in IQ
//run on console 

//innerhtml will return all the html elements like <p>,<h1>,etc
// myDiv.innerHTML

// myDiv.innerText//it do not shows the hidden content 
// 'Lorem ipsum dolor sit amet.'

// myDiv.textContent //it shows the hidden content 
// 'Lorem ipsum dolor sit amet.\n        Hello Techno\n    '

// console.log(myDiv.innerHTML);
// myDiv.innerHTML="<input type='password' placeholder='Enter Password'><button>Submit</button>"
// console.log(myDiv.innerText);
// console.log(myDiv.textContent);

//ClassName
// not working
// let mydiv2=document.getElementsByClassName("head");
// console.log(mydiv2);

// for(let i=0;i<mydiv2.length;i++){
//     mydiv2[i].style.padding="20px";
//     mydiv2[i].style.margin="10px";
//     if(i%2==0){
//         mydiv2[i].style.backgroundColor="red"
//     }
//     else{
//         mydiv2[i].style.backgroundColor="yellow"   
//     }
// }

//TagName
// let myDiv3=document.getElementsByTagName("div");
// console.log(myDiv3);
// let colorArr=["red","green","blue","yellow","brown","black","orange","white"];
// for (let i = 0; i < myDiv3.length; i++) {
//     myDiv3[i].style.padding="20px";
//     myDiv3[i].style.margin="10px";
//     myDiv3[i].style.backgroundColor=colorArr[i];
//     myDiv3[i].style.borderRadius=`${i*10}px`;
    
// }

//Universal selector :we can use 

//QuerySelector
// let myDiv4 =document.querySelector(".head");
// console.log(myDiv4);
// queyselector only return first tag
//it returns HTMLcollection (see on console)

//QuerySelectorAll
// let myDiv5 =document.querySelectorAll(".head");
// console.log(myDiv5);
//it return all tags  thatare present in parent tag
//it returns the nodelist

//htmlcollection and nodelist both are array like structure
//maps are not applicable on both 
//foreach is applicable on nodelist
// foreach is available in prototype of nodelist but not available in htmlcolllection

//Prototypic inheritence 
//js search the function in case of array in prototype if not available it will go 1 level down 
//if there is prototype inside prototype then it will search in it as well till end if js do not find any relevant detail then it returns error


// let newDiv=document.createElement("div");
// newDiv.innerHTML="Hello Techno";
// newDiv.style.backgroundColor="brown";

//document.body.appendChild(newDiv);

// let myDiv2=document.getElementById("main");
// myDiv2.appendChild(newDiv);
// appendCHILD will add element at end 

//what if we want to add before any element then

// let myDiv3=document.getElementById("container");

// let parentDiv=document.getElementById("heading");
// document.body.insertBefore(newDiv,myDiv3)



