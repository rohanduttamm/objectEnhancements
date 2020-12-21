//object enhancemnts

function makePerson(first, last, age){
  return {
    first,
    last,
    age,
    isAlive : true
  };
}

// const mathStuff = {
//   x : 200,
//   add : function(a, b){
//     return a + b
//   },
//   square : function(a){
//     return a ** 2
//   }
// }

const mathStuff = {
  x : 200,
  add(a, b){
    return a + b
  },
  square(a){
    a ** 2
  }
}

// function makeColor(name, hex){
//   const color = {}
//   color[name] = hex;
//   color[hex] = name;
//   return color
// }

function makeColor(name, hex){
  return {
    [name] : hex,
    [hex] : name
  }
}

// exercies begin for objects

// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }


function createInstructor(firstName, lastName){
  return{
    firstName,
    lastName
  };
}

// var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"

let favNum = 42;
const instructor = {
  firstName : 'Colt',
  [favNum] : 'That is my favourite!'
}

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

const instructor = {
  firstName : 'Colt',
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!"
  }
}

function createAnimal(species, verb, noise){
  return{
    species,
    [verb](){
      return noise;
    }
  }
}