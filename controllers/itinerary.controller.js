import Itinerary from "../models/Itinerary.js";

const controller = {
    getItineraries: async (req, res) => {

        try {
            const itineraries = await Itinerary.find().populate('user').populate('activities').populate({
                path: 'user'
            })

            if (itineraries.length > 0) {
                return res.status(200).json({
                    success: true,
                    itineraries: itineraries
                })
            } else {
                next()
            }

        } catch (error) {
            next(error);
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
            } else {
                next()
            }

        } catch (error) {
            next(error);
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
            next(error);
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
            next(error);
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
            next(error);
        }
    },
}

export default controller;