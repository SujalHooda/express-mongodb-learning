const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection successful");
})
.catch((err) => {
    console.log(err)}
);

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from:"neha",
        to:"priya",
        msg:"send me your exam sheets",
        created_at: new Date(),
    },
    {
        from:"akash",
        to:"deepak",
        msg:"let's play football this weekend",
        created_at: new Date(),
    },
    {
        from:"rohit",
        to:"aryan",
        msg:"did you complete the assignment?",
        created_at: new Date(),
    },
    {
        from:"sourabh",
        to:"raj",
        msg:"let's meet tomorrow",
        created_at: new Date(),
    },
    {
        from:"ankit",
        to:"vivek",
        msg:"happy birthday!",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
