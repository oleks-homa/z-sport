import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../../models/User.js';
import connectDb from '../../utils/db.js';

const secret = 'test';

export default async function signin (req, res) {
    await connectDb();
    
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: '1h' });

        res.status(200).json({ result: user, token });
    } catch (e) {
        res.status(500), json({ message: 'Something went wrong' });
    }
};