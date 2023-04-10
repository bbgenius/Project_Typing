const strText1 = "I'm Learning CODEE";
const strText2 = "Hello everybody!!!";
const text1 = document.querySelector(".text1");   
const text2 = document.querySelector(".text2");   
function typing(){
    let i =0;
    const intervalText1 = setInterval(() =>{
    text1.innerHTML += strText1[i];
    i++;
    if(i===strText1.length){
    clearInterval(intervalText1);
    text1.innerHTML = "";
    let i =0;
    const intervalText2 = setInterval(() =>{
    text2.innerHTML += strText2[i];
    i++;
    if(i===strText2.length){
        clearInterval(intervalText2);
        text2.innerHTML = "";
    }
},300)
    }
},300)
}
counter = 0;
typing();
const add = setInterval(() => {
    counter+=1;
    console.log(counter);
    if(counter%35===0){
        typing();
    }
}, 300);

    

    







