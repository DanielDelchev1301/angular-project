const Parfume = require('../models/Parfume');

exports.getAllParfumes = async () => {
    return await Parfume.find();
}

exports.createParfume = async (parfumeData) => {
    return await Parfume.create(parfumeData);
}