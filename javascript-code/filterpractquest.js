// Keep only even numbers

const nu= [1, 2, 3, 4, 5, 6]; 
let sol =nu.filter(evennum =>(evennum %2 === 0))
    
console.log(sol)

//Keep strings with length > 3
const words = ["sun", "moon", "sky", "cloud"];
let result = words.filter(word =>word.length>3)
console.log(result)

//Filter out negative numbers
const nums = [-5, 10, -3, 8, 0];
let s = nums.filter(num => num>=0)
console.log(s)

//Keep objects where done = false
// id → number
// task → string → "Learn JS"
// done → boolean → true or false
const todos = [
  { id: 1, task: "Learn JS", done: true },
  { id: 2, task: "Learn Node", done: false },
  { id: 3, task: "Learn DOM", done: false }
]
let todo = todos.filter(t => t.done === false)
console.log(todo)
//Keep only numbers greater than 50
const list = [10, 55, 78, 23, 99, 5];
let greaterNum = list.filter(greater =>greater >50)
console.log(greaterNum)

//get uniquenumber using filter
const num= [1, 2, 2, 3, 3, 4];
// let OriginalNum = num.filter(arr=>arr.indexof(num) === index)
// console.log(OriginalNum)
let map = []
for(let i =0;i<num.length;i++){
    for(j=i +1;j<num.length;j++){
        if (num[i] === num[j]){
            map.push(num[j])
        }
    }
}
console.log(map)

//Remove duplicates using filter
let n = [1, 2, 2, 3, 3, 4,5]
let unique = []
for(let i =0;i<n.length;i++){
    let isduplicates = false
    for(let j =0;j<unique.length;j++){
        if(n[i] === unique[j]){
            isduplicates = true
            break;
        }
    }
if(!isduplicates){
    unique.push(n[i])
}
}
console.log("unique number only ",unique)
//When comparing with FUTURE values → i + 1
//When comparing with the UNIQUE result → 0 to unique.length

const number= [1, 2, 2, 3, 3, 4];

let unique1 = [];

for (let i = 0; i < number.length; i++) {
    let isDuplicate = false;

    // check if num[i] appears again
    for (let j = i + 1; j < number.length; j++) {
        if (number[i] === number[j]) {
            isDuplicate = true;
            break;
        }
    }

    // only push if it is not duplicate
    if (!isDuplicate) {
        unique1.push(num[i]);
    }
}

console.log(unique1); 
