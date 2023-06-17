/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
let brr = [
  { id: 4, name: "janardan", age: "22", profession: "coder" },
];
let drr = [
  { id: 4, name: "Sumit", age: "21", profession: "Doctor" },
  { id: 5, name: "Johnson", age: "25", profession: "Driver" },
  { id: 6, name: "Bob", age: "35", profession: "Engineer" },
];

function PrintDeveloperbyMap() {
  for(let i=0;i<arr.length;i++){
  if(arr.map(arr.profession) = "developer"){
     console.log(arr[i]);
   }
  } //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  for(let i=0;i<arr.length;i++){
  if(arr.forEach(arr.profession)="developer"){
     console.log(arr[i]);
   }
  }
  //Write your code here , just console.log
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
  //Write your code here, just console.log
}

function removeAdmin() {
  const itemToBeRemoved ={ id: 3, name: "karen", age: "19", profession: "admin" };
  arr.splice(arr.findIndex(a => a.id === itemToBeRemoved.id) ,1);
  console.log(arr);
  //Write your code here, just console.log
}

function concatenateArray() {
  const cont_obj = arr.concat(drr);
  console.log(cont_obj);
  //Write your code here, just console.log
}
