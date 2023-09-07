export const notFoundHandler = (err, req, res, next) => {
    const statusCode = 404;

    const message = 'Not found';

    res.status(statusCode).json({
        success: false,
        message: message,
    });
};