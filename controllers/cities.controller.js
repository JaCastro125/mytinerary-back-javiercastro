import City from "../models/cities.js";

const controller = {
    getCities: async(req, res) => {

        let queries ={}

        if (req.query.name) {
            queries.name = req.query.name
        }

        try {
            const cities = await City.find(queries)

            return res.status(200).json({
                success: true,
                cities: cities
            })
        } catch (error) {
            return res.status(500).json({
                success:false, 
                message:'Error al obtener city'
            })
        }
    },
    postCities: () => { },
    deleteCities: () => { },

    createCities: async (req, res) => {
        try {
            const newCity = await City.create(req.body);

            return res.status(201).json({
                success: true,
                message: 'City created'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success:false, 
                message:'Error al crear city'
            })
        }
    }
}

export default controller;