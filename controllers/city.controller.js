import City from "../models/City.js";

const controller = {
    getCities: async (req, res) => {

        let queries = {}

        if (req.query.city) {
            queries.city = new RegExp(`^${req.query.city}`, 'i')
        }

        if (req.query.country) {
            queries.country = req.query.country
        }

        try {
            const cities = await City.find(queries)

            if (cities, lenght > 0) {
                return res.status(200).json({
                    success: true,
                    events: cities
                })
            }

            return res.status(404).json({
                success: true,
                message: 'No se encontraron ciudades'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error al obtener ciudades'
            })
        }
    },

    getCityById: async (res, req) => {
        
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
                message: 'No se pudo encontrar el id'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Error al buscar id'
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
                message: 'Error al crear city'
            })
        }
    }
}

export default controller;