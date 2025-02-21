import User from "../model/user-schema.js";

const userSignup = async(req, res) => {
    try {

        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(401).json({ message: "!!! User already exists" });
        }
        
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({ message: user});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const userLogin = async (req, res) => {
    try {
        const user = req.body;
        const existingUser = await User.findOne({ email: user.email, password: user.password });
        if (!existingUser) {
            return res.status(401).json({ message: "!!! Invalid email or password" });
        }
        return res.status(200).json({ data: existingUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { userSignup };
export { userLogin };