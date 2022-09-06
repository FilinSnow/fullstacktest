import jwt from 'jsonwebtoken';

export const generateAccessToken = (...data) => {
    const [email, password] = [...data]
    const payload = {
        email, password
    };
    return jwt.sign({
        data: payload
    }, 'secret', {expiresIn: '1h'});

}