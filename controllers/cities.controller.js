const controller = {
    getCities: (req, res) => {
        res.json({
            cities: [
                {name: 'Argentina'},
                {name: 'Estados Unidos'}
            ]
        });
    },
    postCities: () => {},
    deleteCities: () => {},
}

export default controller;