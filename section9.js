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




//                              array




// let app = new Array();                  method 1
// app = ['apple','banana']
// console.log(app)
// console.log(typeof (app))




// let app = []                  method 2
// app = ['apple','banana']
// console.log(app)
// console.log(typeof (app))



// let app = ['apple','banana'];                   method 3
// console.log(app)



// let app = ['apple','banana'];                  
// console.log(app[0])
// console.log(app[2])



// let app = ['apple','banana',(name: 'rahul', age:34),'mango',null,undefined,23,funtion add(a,b){return a+b}];                  
// console.log(app[5])
//console.log(app[2].name)
//console.log(app[7](1,3))



// let app = ['apple','banana','mango']
// // app[3]= 'furti'
// // console.log(app[3])
// app.push('watermelon')               by using this  object it is added at the end
// app.unshift('watermelon')             by using this object it is added at the start
// app.pop()                               the last object will be removed
// console.log(app.shift())                     the first object will be removed
// console.log(app)



// let apps= ['apple','banana','punkin']                   the 'in'opertor is very slow when it is compared to the 'of'operator
// for (app in apps){
//         console.log(apps[app])
//         console.log(app)
// }




// let apps= ['apple','banana','punkin']
// for(let i=0; i<3; i++){
//         console.log(apps[1])
// }



// let apps= ['apple','banana','punkin']
// console.log(apps.length)



// //              two dimensioal array



// let mat= [
//     [1,2,3],
//     [4,4,4],
//     [2,3,4]
// ]
// console.log(mat)
// console.log(mat[0][2])




// let mat= [
//     [1,2,3],
//     [4,4,4],
//     [2,3,4]
// ]
// for (let i=0; i<mat.length; i++){
//         for(let j=0; j<mat[i].length; j++){
//                 console.log(mat[i][j])

//         }
// }