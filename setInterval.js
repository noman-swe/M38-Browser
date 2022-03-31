console.log('first');
/* setInterval( () => {
    console.log('tik tik tik');
}, 1000 ); */


let seconds = 0;
const timeID = setInterval( () => {
    // seconds++;
    // console.log(seconds++); //-->agee print korbe tarpor increase korbe
     console.log(++seconds); //-->agee barabe tarpor print korbe 
    if(seconds > 15){
        clearInterval(timeID);
    }
}, 1000 );


console.log('second');