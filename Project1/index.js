// this is how we import in node.js
const app = require('./app')

//console.log("Hello World")
console.log(app)
console.log(app.x +" : "+app.y)

console.log(app.z());

let arr = [1,2,3,4,5,6,7,8,9,10]

let result = arr.filter((item) =>{
     if(item % 2 == 0){
        return item
    }
})

console.log(result)

