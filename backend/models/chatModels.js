const mongoose = require('mongoose');

//chatName
//groupChat?
//groupAdmin
//users
//latestMessage

//trim:true removes leading and trailing spaces
const chatSchema = mongoose.Schema(
    {
        chatName: {type:String, trim: true},
        isGroupChat: {type:Boolean, default: false},
        groupAdmin: {
            type:mongoose.Schema.Types.ObjectId, 
            ref: "userModel"
        },
        users:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "userModel"
            }
        ],
        latestMessage: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "messageModel"
        }

    }
);



