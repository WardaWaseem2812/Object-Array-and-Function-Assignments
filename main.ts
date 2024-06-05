/*  Object , Array and function
Assignment 1: Building Your Friend List

Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName, lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your friend list. */

type Friend = {
    firstName: string;
    lastName: string;
    id?: number;
}

let friend1 ={
    firstName: "Warda",
    lastName: "Waseem",
    id: 476
}

let friend2 ={
    firstName: "Owais",
    lastName: "Khan",
    id: 455
}

let friend3 ={
    firstName: "Bisma",
    lastName: "Naeem",
    id: 646
}

let people = {
    friend: [friend1, friend2, friend3]
}

console.log(people)

/* OUTPUT: 
{
  friend: [
    { firstName: 'Warda', lastName: 'Waseem', id: 476 },
    { firstName: 'Owais', lastName: 'Khan', id: 455 },
    { firstName: 'Bisma', lastName: 'Naeem', id: 646 }
  ]
} */


/* Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like: const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or create temporary arrays).
• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC". */

const scrambledArray =["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2,2) // student of am a GIAIC I
 scrambledArray.pop() // student of am a GIAIC
 scrambledArray.unshift("I") // I student of am a GIAIC
 scrambledArray.splice(3,2); // I student of GIAIC
 scrambledArray.splice(1,0, "am", "a"); // I student of GIAIC
 console.log(scrambledArray.join(" "));

//  OUTPUT: I am a student of GIAIC


/* Assignment 3: Company Product Catalog
Learning Objective: Implement data structures in TypeScript to represent and manage product information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name, model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
5. Explore adding and accessing more elements within the inventory array to understand how to manage product data. */

type Products = {
    name: string;
    model: string;
    cost: number;
    quantity: number;
}


let product1:Products = {
    name: "Laptop",
    model: "X-270",
    cost: 60000,
    quantity: 21
  };
  
  const product2:Products = {
    name: "Smartphone",
    model: "Samsung Galaxy A20",
    cost: 80000,
    quantity: 13
  };
  
  const product3:Products = {
    name: "Headphones",
    model: "WH-1000XM4",
    cost: 2500,
    quantity: 43
  };

  let inventory  = {
    Product : [product1,product2,product3] 
}
console.log("Quantity of the third product:",inventory.Product[2].quantity) ;

// OUTPUT: Quantity of the third product: 43

let product4: Products = {
    name: "Adidas",
    model: "2022",
    cost: 7000,
    quantity: 11,
}
inventory.Product.push(product4)
console.log("Name of the fourth product:", inventory.Product[3].name);
// OUTPUT: Name of the fourth product: Adidas

console.log("Cost of the first product:", inventory.Product[0].cost);
// OUTPUT: Cost of the first product: 60000

/* Assignment 4: Student List Organizer
Learning Objective: Get comfortable with data structures (objects and arrays) and basic functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes student information like name, senior status (true/false), and whether they've completed their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have a function that removes students who haven't completed their assignments (assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)?*/


interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
  }

  const students: Student[] = [
    { name: "Warda", isSenior: false, hasCompletedAssignments: true },
    { name: "Maham", isSenior: false, hasCompletedAssignments: false },
    { name: "Owais", isSenior: true, hasCompletedAssignments: false },
    { name: "Fatima", isSenior: false, hasCompletedAssignments: true },
    { name: "Waseem", isSenior: true, hasCompletedAssignments: true },
  ];

  console.log(students);

  /* OUTPUT:
  [
  { name: 'Warda', isSenior: false, hasCompletedAssignments: true },
  { name: 'Maham', isSenior: false, hasCompletedAssignments: false },
  { name: 'Owais', isSenior: true, hasCompletedAssignments: false },
  { name: 'Fatima', isSenior: false, hasCompletedAssignments: true },
  { name: 'Waseem', isSenior: true, hasCompletedAssignments: true }
] */


  const findSenior=(students: Student[]) => {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments === true);
  }

  console.log(findSenior(students)); // Senior students with assignment 

// OUTPUT: [ { name: 'Waseem', isSenior: true, hasCompletedAssignments: true } ]  
  
  const updatedList=(students: Student[]): Student[] => {
    return students.filter(student => student.hasCompletedAssignments === true);
  }
  
   console.log("Updated Class List :", updatedList(students)); // Class list update

  /* OUTPUT: 
  Updated Class List : [
  { name: 'Warda', isSenior: false, hasCompletedAssignments: true },
  { name: 'Fatima', isSenior: false, hasCompletedAssignments: true },
  { name: 'Waseem', isSenior: true, hasCompletedAssignments: true }
] */

  