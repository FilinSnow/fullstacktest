import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, 'secret', (err, user) => {
            if (err) {
                return res.status(403).send({message: 'Not authorized'});
            }
            next();
        });
    } else {
        res.sendStatus(401);
    }
}