import jwt from "jsonwebtoken";

export const authenticatedMiddleware = (req, res, next) => {
    // get token from header and store in a token variable
    // const token = req.headers['authorization'].split(" ")[1];

    const token = req.cookies.accessToken;
    // if token is not present responde with error
    if (!token) {
        return res.status(404).send({
            success: false,
            message: 'Access denied! No token available',
            error: 'No token Provided',
            data: null
        });
    };

    // decode the token and verify the user
    try {

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).send({
            success: false,
            message: 'Invalid or expired token',
            error: error,
            data: null
        });

    };
};