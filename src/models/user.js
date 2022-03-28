import mongoose, { Schema } from "mongoose";
import { creatHmac } from 'crypto';
import { v4 as uuidv4 } from 'uuid';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

userSchema.pre("save", function (next) {
    this.salt = uuidv4();
    this.password = this.encryptPassword(this.password);
    next();
});

userSchema.methods = {
    authenticate(password) {
        return this.password === this.encryptPassword(password);
    },
    encryptPassword(password) {
        if (!password) return
        try {
            return creatHmac("sha256", this.salt).update(password).digest("hex");
        } catch (error) {
            console.log(error)
        }
    }
}

export const create = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Khong them duoc user"
        })
    }
}

export default mongoose.model('User', userSchema);