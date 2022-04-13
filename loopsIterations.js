// level {1/2/3}
let num = 3;
let st = "";
for(var i = 1; i <= num; i++){
  for(var j = 1; j<= num - 1; j++){
    st += " ";
  }
  for(var k = 0; k< 2 * i - 1; k++){
    st += "k";
  }
  st += "\n";
}
console.log(st);
