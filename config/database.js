module.exports = {
    development: {
        driver: 'nano',
        url: 'http://localhost:5984/compound_db'
    },
    test: {
        driver: 'nano',
        url: 'http://localhost:5984'
    },
    production: {
        driver: 'nano',
        url: 'http://localhost:5984'
    }
};
