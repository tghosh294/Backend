const mongoose = require('mongoose');
const Chat=require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }

let allChats = [
    {
        from: "Tamasi",
        to: "Aditya",
        msg: "I love you",
        created_at: new Date()
    },

    {
        from: "Rainy",
        to: "Family",
        msg: "I've reached college",
        created_at: new Date()
    },

    {
        from: "Maa",
        to: "Rainy",
        msg: "Study for your exams",
        created_at: new Date()
    },

    {
        from: "Baba",
        to: "Tamasi",
        msg: "Great Work !! Keep it up",
        created_at: new Date()
    },

    {
        from: "Aditya",
        to: "Tamasi",
        msg: "Marry me!",
        created_at: new Date()
    },
];

Chat.insertMany(allChats);

