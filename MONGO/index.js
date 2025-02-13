const mongoose = require('mongoose');

main()
    .then((res)=>{
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.updateMany({age:{$gt:48} },{age: 55 })
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

// User.findOne({age: { $gt : 47 }}).then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age:50},
//     {name: "Peter", email: "peter@gmail.com", age:50},
//     {name: "Bruce", email: "bruce@gmail.com", age:50},
// ]).then(res=>{
//     console.log(res);
// });



// const user2 = new User({
//     name: "Eve",
//     email:"eve@example.com",
//     age: 45,
// });

// user2.save().then((res)=>{
//     console.log(res);
// })
//     .catch((err)=>{
//     console.log(err);
// });

