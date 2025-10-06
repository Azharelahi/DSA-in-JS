let students = [
  { name: "Azhar Elahi", Roll_no: 1, age: 23 },
  { name: "Mazhar Elahi", Roll_no: 2, age: 22 },
  { name: "Hammad Khan", Roll_no: 3, age: 24 },
  { name: "Ahsan Malik", Roll_no: 4, age: 21 },
  { name: "Saad Ahmed", Roll_no: 5, age: 23 },
  { name: "Bilal Hussain", Roll_no: 6, age: 22 },
  { name: "Umar Farooq", Roll_no: 7, age: 24 },
  { name: "Fahad Ali", Roll_no: 8, age: 25 },
  { name: "Suleman Tariq", Roll_no: 9, age: 23 },
  { name: "Ahmed Raza", Roll_no: 10, age: 22 },
  { name: "Talha Javed", Roll_no: 11, age: 21 },
  { name: "Usman Khalid", Roll_no: 12, age: 23 },
  { name: "Hamza Aslam", Roll_no: 13, age: 24 },
  { name: "Waleed Shah", Roll_no: 14, age: 22 },
  { name: "Rehan Qureshi", Roll_no: 15, age: 23 },
  { name: "Adil Zaman", Roll_no: 16, age: 25 },
  { name: "Imran Yousaf", Roll_no: 17, age: 21 },
  { name: "Danish Khan", Roll_no: 18, age: 22 },
  { name: "Asad Mehmood", Roll_no: 19, age: 23 },
  { name: "Noman Arif", Roll_no: 20, age: 24 },
];

let user_name = "Ahsan Malik";
for (let i = 0; i < students.length; i++) {
  if (students[i].name == user_name) {
    console.log(students[i]);
  }
}
let arrayconstructor = new Array();
arrayconstructor[0] = "Azhar";
arrayconstructor[1] = "Mazhar";
console.log(arrayconstructor[0]);
console.log(arrayconstructor[1]);
let filledArray = new Array(5).fill(0); // make array of size 5 and give default values of 0
console.log(filledArray);
let ofArray = Array.of("Azhar", "Mazhar", "Khizer");
console.log(ofArray);
