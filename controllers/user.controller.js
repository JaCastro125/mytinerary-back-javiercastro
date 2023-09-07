import User from "../models/User.js"

const controller = {
    getUsers: async (req, res, next) => {
        try {
            const getUsersArray = await User.find()

            if (getUsersArray.length > 0) {
                return res.status(200).json({
                    success: true,
                    User: getUsersArray
                })
            }
            else {
                next()
            }

        } catch (error) {
            next(error);
        }
    },
    getUserById: async (req, res, next) => {

        try {
            const getUserById = await User.findById(req.params.id)
            return res.status(200).json({
                success: true,
                user: getUserById
            })
        } catch (error) {
            next(error);
        }
    },
    createUser: async (req, res, next) => {
        try {
            const newUser = await User.create(req.body);

            return res.status(200).json({
                success: true,
                message: 'User created'
            })
        } catch (error) {
            console.error('Error at createUser:', error);
            next(error);
        }
    },
    deleteUser: async (req, res, next) => {
        try {
            const deleteUser = await User.findByIdAndDelete(req.params.id)
            return res.status(200).json({
                success: true,
                message: 'User deleted'
            })
        } catch (error) {
            next(error);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const updateUserArray = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.status(200).json({
                success: true,
                message: 'User updated',
                updateUserArray
            })
        } catch (error) {
            next(error);
        }
    }
}

export default controller