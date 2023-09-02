import Activity from "../models/Activity.js";

const controller = {
    getActivities: async (req, res) => {

        try {
            const activities = await Activity.find()

            if (activities.length > 0) {
                return res.status(200).json({
                    success: true,
                    activities: activities
                })
            }
            return res.status(404).json({
                success: true,
                message: 'Activities not found'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error getting activities'
            })
        }
    },

    getActivityById: async (req, res) => {

        try {
            const oneActivity = await Activity.findById((req.params.id))

            if (oneActivity) {
                return res.status(200).json({
                    success: true,
                    activity: oneActivity
                })
            }

            return res.status(404).json({
                success: false,
                message: 'Not find id'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error getting id'
            })
        }
    },

    createActivity: async (req, res) => {
        try {
            const newActivity = await Activity.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'Activity created'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating Activity'
            })
        }
    },

    updateActivity: async (req, res) => {
        try {
            await Activity.updateOne({ _id: req.params.id }, req.body)

            return res.status(200).json({
                success: true,
                message: 'The Activity was updated successfully'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating Activity'
            })
        }
    },

    deleteActivity: async (req, res) => {
        try {
            await Activity.deleteOne({ _id: req.params.id })

            return res.status(200).json({
                success: true,
                message: 'The Activity it was deleted successfully'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error deleting the Activity'
            })
        }
    },
}

export default controller;
