function doSomething(){
    console.log('i am coding js');
}
console.log('First: ami sobar agee');
console.log('Second: ami Second');
// setTimeout(doSomething, 5000);
setTimeout(function(){
    console.log('I am using VS code');
}, 5000);

setTimeout( () => {
    console.log('JS is awesome')
} ,3000);//eita 3s e tai 5s er ta er agee result dekhabe
console.log('Third: ami Third');
console.log('Four: ami Fourth');