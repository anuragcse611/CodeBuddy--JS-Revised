// level {1/2/3}
async function getData() {
  let res= await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let DATA = await res.json();
  return getData();
}
