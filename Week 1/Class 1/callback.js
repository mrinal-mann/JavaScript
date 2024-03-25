function sum(num1, num2, functioncall) {
  functioncall(num1 + num2);
}

function display1(data) {
    console.log("Sum is"+data);
}
function display2(data){
    console.log(data+"is the Sum");
}

const sumans=sum(1,5,display1)
