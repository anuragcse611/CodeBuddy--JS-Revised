// level {1/2/3}
const arr = ["1","2","3"];
arr.reverse();
console.log(arr);
// for adding all the arrays items

const arr = ["1","2","3"];
for(var i = 0;i<arr.length; i++){
  let result +  = arr[i]
}
return result;
//properties with values

const properties = {
  name: "Elie",
  rank: "pro"
}
properties.map(([key, value]) => key + ":" + value)
