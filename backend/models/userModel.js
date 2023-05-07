const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
            trim: true
        },

        email : {
            type: String,
            required: true,
            trim: true,
            unique: true
        },

        password : {
            type: String,
            required: true,
            trim: true
        },

        pic : {
            type: String,
            // required: true,
            default: "https://res.cloudinary.com/dq7l8216n/image/upload/v1628074949/defaultProfilePic_zqjz1c.png",
            // default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },

        // role : {
        //     type: String,
        //     default: "user"
        // },

    },

    {
        timestamps: true,
    }
);

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};



userSchema.pre("save", async function(next){
    if(!this.isModified){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


const User = mongoose.model("User", userSchema);

module.exports = User;