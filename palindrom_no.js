// const n=require("readline-sync");
// var name=n.question("enter name: ")
// const store=name;
// var string=""
// for (let i=name.length-1;i>=0;i--) {
//    string=string+name[i]
// }
// if (store===string) {
//    console.log("its palindrome string")
// }
// else {
//    console.log("it's not a palindrome string")
// }

var array=["m","a","d","a","m"]
var rev=1
var x=array
var y=[]
while(rev<=array.length){
   r=(array[-rev])
   // console.log(r)
   y.push(r)
   rev=rev+1  
}
console.log(y)
if (y===array){
   console.log("palindrome")
}
else{
   console.log("not palindrome")
}

    
