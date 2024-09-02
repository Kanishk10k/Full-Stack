export const add=(a,b)=>{ //named export
    return a+b;
}

export const mul=(a,b)=>{
    return a*b;
}

//default export need to import without curly brackets in index.js
const divide =(a,b)=>{
    return a/b;
}
export default divide; //default export