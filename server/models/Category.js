import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    picturePath: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;