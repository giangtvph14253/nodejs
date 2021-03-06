import expressJWT from "express-jwt";

export const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next();
    } else {
        console.log('Không thể kết nối');
    }
}

export const requiredSigin = expressJWT({
    algorithms: ['HS256'],
    secret: '123456',
    requestProperty: "auth" //req.auth
});

export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id;
    if (!status) {
        res.status(401).json({
            message: "Ban khong cos quyen truy cap"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        res.status(401).json({
            message: "Ban khong phai Admin"
        })
    }
    next()
}
