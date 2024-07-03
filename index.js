const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successful")
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
};
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    place: String,
});

const User = mongoose.model("User", userSchema);
User.deleteMany({age: {$gt : 20}}).then((res)=>{
  console.log(res);
})

// User.insertMany([
  
//   {  name:"ram" ,email:"ram@gmail.com", age:22,place:"hyd" },
//   {  name:"shyamam" ,email:"shyamam@gmail.com", age:22,place:"hyd" },
//   {  name:"sonu" ,email:"sonu@gmail.com", age:22,place:"hyd" },
//    {  name:"sona" ,email:"sona@gmail.com", age:22,place:"hyd" },
// ]).then((res)=>{
//   console.log(res);           
// });

// const user1 = new User ({
//   name:"adam",
//   email:"adam@gmail.com",
//   age: 33,
//   place: "hyderabad",
// });

// const user3 = new User ({
//   name:"priya",
//   email:"priya@gmail.com",
//   age: 33,
//   place: "hyderabad",
// });

// user1.save();
// user3
// .save()
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })


// const Employee = mongoose.model("Employee", userSchema);

