import City from "../models/City.js";

const controller = {
    getCities: async (req, res) => {

        let queries = {}

        if (req.query.country) {
            queries.country = new RegExp(`^${req.query.country}`, 'i')
        }

        if (req.query.city) {
            queries.city = req.query.city
        }

        try {
            const cities = await City.find(queries).populate('user');

            if (cities.length > 0) {
                return res.status(200).json({
                    success: true,
                    cities: cities
                })
            }
            return res.status(404).json({
                success: true,
                message: 'No cities found'
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error getting cities'
            })
        }
    },

    getCityById: async (req, res) => {

        try {
            const oneCity = await City.findById(req.params.id)

            if (oneCity) {
                return res.status(200).json({
                    success: true,
                    city: oneCity
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

    createCity: async (req, res) => {
        try {
            const newCity = await City.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'City created'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating city'
            })
        }
    },

    updateCity: async (req, res) => {
        try {
            await City.updateOne({ _id: req.params.id }, req.body)

            return res.status(200).json({
                success: true,
                message: 'The city was updated successfully'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Error creating city'
            })
        }
    },

    deleteCity: async (req, res) => {
        try {
            await City.deleteOne({ _id: req.params.id })

            return res.status(200).json({
                success: true,
                message: 'The city it was deleted successfully'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success: false,
                message: 'Error deleting the city'
            })
        }
    },
}

export default controller;