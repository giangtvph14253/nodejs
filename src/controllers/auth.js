import User from "../models/user";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existUser = await User.findOne({ email }).exec()
        if (existUser) {
            res.status(400).json({
                message: "Tai khoan da ton tai"
            })
        }
        const user = await new User({ name, email, password }).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(400).json({
            message: "Dang ky that bai"
        })
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Email khong ton tai"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mat khau khong dung"
            })
        }
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        res.status(400).json({
            message: "Khong the dang nhap"
        })
    }
}