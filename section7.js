//              switch  operator


// let n=4;
// switch(n){
//     case 1:             - the 1 should be in a int not as a str
//         console.log("one")
//         break;
//     case 2:
//         console.log('two')
//         break;
//     case 3:
//         console.log('three')
//         break;
//     case 4:
//         console.log('four')
//         break;
//     default:
//         console.log('the number is greater than 4')

// }



// let op='+';
// let a=8, b=6;
// switch(op){
//     case '+':
//         console.log(a+b);
//         break;
//     case '-':
//         console.log(a-b);
//         break;
//     default:
//         console.log('there is a invalid number')
// }



//                     function in javascript


// f(x)=x+3       this is called as a function


// let a=8, b=6;
// function operation(n1,n2){           the n1 and n2 is called as a parameter
//     console.log(n1+n2/n1-n2*n1)
// }
// operation(a,b)                          the function is written is called as a function declaretion and the operation in the last line is called as a function calling
// operation(3,7)
//operation(3)              the answer will be not a number



// let a=9;
// function operation(n1,n2=8){         the n2=8 will be a default value
//     console.log(n1+n2/n1-n2*n1)
// }
// operation(a,b);
// operation(3)



// let a=9 b=7;
// function operation(n1=7,n2){         
//     console.log(n1+n2/n1-n2*n1)
// }
// operation(a,b);
// operation(3)




//              scope of variable


//1.local scope


// let a=9 b=7;
// function operation(n1=7,n2){         
//     let c= (n1+n2/n1-n2*n1)
//     console.log(c)
// }
// operation(a,b);
// operation(c)



//2.gobal scope


// let a=9 b=7;
// let c;
// function operation(n1=7,n2){         
//      c= (n1+n2/n1-n2*n1)
// }
// operation(a,b);
// operation(c)



//          return



// let a=9, b=6;
// function operation(n1=7,n2=6){
//     let c= (n1+n2/n1-n2*n1);
//     return c;
//     return 'hello'
// }
// console.log(typeof operation(2,4))



// let a=4, b=9;
// function sum(a,b){
//     let c=a+b
//     return c;
// }
// console.log(typeof sum(2,3))


// a=78;                        method 1
// function oddeven(a){
//     if(a%2==0){
//         return 'even'
//     }
//     else{
//         return 'odd'
//     }
// }
// console.log(oddeven(a))



// a=78;                            method 2
// function oddeven(a){
//     if(a%2==0){
//         return 'even'
//     }
//         console.log('hello')
//         return 'odd'
// }
// console.log(oddeven(a))


