
export const errorHandler = (err, req, res, next) => {
    console.error('Error en errorHandler:', err);
    const statusCode = 500;

    const message = 'Something went wrong';

    res.status(statusCode).json({
        success: false,
        message: message,
    });
};

