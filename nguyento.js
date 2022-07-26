// cho trước 1 mảng
// kiểm tra xem có bao nhiêu số nguyên tố
// tính tổng số nguyên tố
function checkPrime (n){
    if (n<2) {return false}
    if (n<=3) {return true}
    for (let i=2; i<=Math.sqrt(n); i++){
        if( n%i==0){
            return false;
        }
    }
    return true;
}
let arr=[1,2,4,5,-5,7,15,10,7,8,14,20,25,17,19];
let arr1=[];
for (let i=0; i<arr.length; i++){
    if(checkPrime(arr[i])){
        arr1.push(arr[i])
    }
}
document.getElementById("demo").innerHTML=arr1 + "<br>"
function getSum (){
    let sum =0;
    for (let i=0; i<arr1.length; i++){
        sum+=arr1[i];
    }
    return sum;
}
let sum = getSum()
document.getElementById("demo1").innerHTML=sum
