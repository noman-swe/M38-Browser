console.log(111111);
console.log(2222222);
setTimeout( () => {console.log('aaaaaa')}, 3000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(3333333);
console.log(4444444);
for (let i = 0; i < 100; i++) {
    console.log(i);
}