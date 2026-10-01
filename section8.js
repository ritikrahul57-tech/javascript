//              call back function



// function operation(op,a,b){
//     return op(a,b);
// }
// let add= (a,b) => a+b;
// function sub (a,b){
//     return a-b;
// }
// console.log(operation(sub,3,2))



// let x5 = (n) => 5*n
// console.log(x5(7))




//                                  important topic



//              object...


// let x={};
// console.log(x)
// console.log(typeof(x))


// let enginoptions = 'petrol,diesel'
// let car = {
//     name : 'bmw m5',
//     brand : 'bmw',
//     drivetrain : engineoption+',gas',          the value should be in string
//     "pr ice" : 55000,                            if there is a space in the variable name then it should be in string
//      onroadprice(price){
//          return this.price+2
//      }                            
// };   
// console.log(car)
// console.log(car.name)
// // console.log(car["pr ice"])
// delete car.price                   to delete a single line
// console.log(car)
// car['model year'] = 2026;        to add a new line in the object
// Car.price=56000                    to change the new value in the object
// console.log(onroadprice(price))



// let user = {
//     name : 'rahul',
//     age : 18,
// };
// console.log(user.name)
// user.name='rahul m k'        or          user['name']='rahul m k
// console.log(user.name)
// delete user.name
// console.log(user.name)




//                      in operator



// let user={
//     name: 'rahul',
//     age: 19
// };
// console.log('age' in user)
// console.log('dob' in user)
// for(key in user){
//     console.log(key);
//     console.log(user[key]);
//     console.log(key+ '-' +user[key])
// }