var max=0;
const arr=[12,43,235,5324,545,234,5454,534];
for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        max=arr[i];
    }
}
console.log(max);