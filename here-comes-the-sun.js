const body = document.getElementsByTagName('body');

let colorNum=0;
const animate = function(){
    colorNum++;
    if (colorNum<256){
        document.body.style.backgroundColor=`rgb(${colorNum},${colorNum},${colorNum})`;
        requestAnimationFrame(animate);
    }
}

requestAnimationFrame(animate);


