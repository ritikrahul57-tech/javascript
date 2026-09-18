//                 conditional operator



// let person;
// let age=18;
// person=(age>17)? 'adult' : 'child';
// console.log(person)



// let person;
// let age=18;
// person=(age>17)? 'adult' : (age>12) 'child' : 'smaller child';
// console.log(person)


// if('0'){
//     console.log('hi')
// }


//              num case function



// let x=10;
// if(x>0){
//     console.log('positive')
// }
// else if(x<0){
//     console.log('negative')
// }
// else{
//     console.log('zero')
// }



// let x=10;
// if(x>0){
//     console.log('positive')
// }
// if(x<0){
//     console.log('negative')
// }
// if{
//     console.log('zero')
// }


//   THE CONDITION FOR LEAP YEAR
//THE NUMBER SHOULD DIVISIBLE BY 4,
//AND THE NUMBER SHOULD DIVISIBLE BY 100? , DIVISIBLE BY 400:

// let year=2000;
// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("leap year")
//         }
//         else{
//             console.log('not a leap year')
//         }
//     }
//     else{
//         console.log('leap year')
//     }
// }
// else{
//     console.log('not a leap year')
// }


// let x=89;
// if(x%2==0){
//     console.log('even number');
// }
// else{
//     console.log('odd number');
// }



//                       logical operator

//THERE ARE FOUR LOGICAL OPERATOR
//1.-OR, 2.-AND, 3.-NOT, 4.-NULL COALESCING OPERATOR


// TURTH TABLE FOR OR OPERATOR
//     A     B    A || B
//=============================
//     true  true   true   
//     true  false  true
//     false true   true
//     false false  false


//TURTH TABLE FOR AND OPERATOP
//     A     B    A && B
//=============================
//     true  true   true   
//     true  false  false
//     false true   false
//     false false  false


//TURTH TABLE FOR NOT OPERATOR
//     A     !A
//=============================
//     true  false   
//     false true



// console.log(1 || 1);   or
// console.log(3 || 1);
// console.log(1 || 12);

// console.log(1 && 1);   and
// console.log(21 && 1);
// console.log(0 && 21);
// console.log(21 && 0 && 21);


// console.log(!1);       not
// console.log(!0);


//            example


// let age=18;
// let gender='f';
// if(age>=18 && gender=='f'){
//     console.log('eligble')
// }



// let age=18;
// let gender='f';
// if(age>=21 || (age>=18 && gender=='f')){
//     console.log('eligble')
// }
// else{
//     console.log('not eligble')
// }


      //  4. null COALESCING OPERATOR   ??



// let age=null;
// let current_age=age ?? 19;
// console.log(current_age)

// console.log(null || 0 || undefined)