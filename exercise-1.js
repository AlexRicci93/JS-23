const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}



  //Metodo 1
  
  let key= Object.keys(person);

  for(let i=0; i<key.length; i++){
    console.log(`${key[i]}: ${person[key[i]]}`);
  }


  //Metodo 2

  console.log(person);

     

  //Metodo 3


  console.log(Object.entries(person));



  






