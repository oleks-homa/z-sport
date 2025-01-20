import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    picturePath: String,
    email: {
        type: String,
        required: true
    },
    password: { type: String }
});

const User = mongoose.model('User', userSchema);

export default User;