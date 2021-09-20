const customerservices = require('../data/Customers/CustomerService');

const getAllCustomers = async (req, res) => {
    try {
        const data = await customerservices.getAllCustomers();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllCustomers
}