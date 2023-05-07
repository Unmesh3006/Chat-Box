const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        content: {
            type: String,
            trim: true
        },
        // message: {type: String, trim: true},
        // media: {type: String, trim: true},
        // call: {type: String, trim: true},
        // type: {type: String, trim: true},
        // reactions: [
        //     {
        //         user: {
        //             type: mongoose.Schema.Types.ObjectId,
        //             ref: "User",
        //         },
        //         reaction: {type: String, trim: true},
        //     },
        // ],

        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat"
        },
    },

    {
        timestamps: true,
    }
    
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;
