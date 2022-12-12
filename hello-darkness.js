//get DOM reference to the BODY
const body = document.getElementsByTagName('body');

//set a variable to modify the RGB value 
let colorNum = 255;

let countdownInterval= setInterval(function(){
    if (colorNum>0){
        colorNum--
        console.log(colorNum);
        document.body.style.backgroundColor=`rgb(${colorNum},${colorNum},${colorNum})`;
    }else{
        clearInterval(countdownInterval)
    }
},500)


