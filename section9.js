//                 value vs referines



// let a=9;
// let b=a;
// console.log(a,b)
// b=3;
// console.log(a,b)



// let a={
//     name: 'rahul',
//     age: 18
// };
// let b=a;
// console.log(a,b)
// b={}                     delete this line when it is run
// console.log(a,b)
// a.age=19
// console.log(a,b)



// const a={
//     name: 'ritik',
//     age: 32
// };
// a={}    it is not possible
// a.age=33;
// console.log(a)



//              gargeage collection



// let a={
//     name: 'ritik',
//     age: 24
// };
// console.log(a)
// a=null
// console.log(a)



// let a={
//     name: 'ritik',
//     age: 24
// };
// b=a
// console.log(a)
// a={}
// console.log(b)




//                  consturtor and new operator
        //                      -consturtor is also called as a function



// let a= {
//     name: 'ritik',
// }
// function User(a){                           this is not a code
//     this.name= a;                                   this = {};
// }                                                    return this
// let goms=new User('ritik');
// let rahul=new User('rahul')
// console.log(ritik,rahul)




// let a= {                            this type of code is not asked to write in the program
//     name: 'ritik',
// }
// function User(){                           
//     this.name= 'rahul';  
//     this.age= function(){
//         return 32
//     }                               
// }                                                    
// let ritik=new User();
// console.log(ritik,age())
