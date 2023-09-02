import Itinerary from "../models/Itinerary.js";

const controller = {
    getItineraries: async (req, res) => {

        try {
            const itineraries = await Itinerary.find().populate('user').populate('activities').populate({
                path: 'user'}) 

            if (itineraries.length > 0) {
                return res.status(200).json({
                    success: true,
                    itineraries: itineraries
                })
            }
            return res.status(404).json({
                success: true,
                message: 'No itineraries found'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error getting itineraries'
            })
        }
    },

    getItineraryById: async (req, res) => {

        try {
            const oneItinerary = await Itinerary.findById(req.params.id).populate('activities')

            if (oneItinerary) {
                return res.status(200).json({
                    success: true,
                    itinerary: oneItinerary
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

    createItinerary: async (req, res) => {
        try {
            const newItinerary = await Itinerary.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'Itinerary created',
                newItinerary
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating Itinerary'
            })
        }
    },

    updateItinerary: async (req, res) => {
        try {
            await Itinerary.updateOne({ _id: req.params.id }, req.body)

            return res.status(200).json({
                success: true,
                message: 'The Itinerary was updated successfully'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating Itinerary'
            })
        }
    },

    deleteItinerary: async (req, res) => {
        try {
            await Itinerary.deleteOne({ _id: req.params.id })

            return res.status(200).json({
                success: true,
                message: 'The Itinerary it was deleted successfully'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error deleting the Itinerary'
            })
        }
    },
}

export default controller;