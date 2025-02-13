import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../../models/User.js';
import connectDb from '../../utils/db.js';

const secret = 'test';

export default async function signup (req, res) {
    await connectDb();

    const { email, password, fullName } = req.body;

    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) return res.status(400).json({ message: 'This user already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: fullName });

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });

        res.status(201).json({ result, token });
    } catch (e) {
        res.status(500).json({ message: "Something went wrong " + e.message });
    }
};