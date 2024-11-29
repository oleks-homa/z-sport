import mongoose from 'mongoose';

const companySchema = mongoose.Schema({
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

const Company = mongoose.model('Company', companySchema);

export default Company;