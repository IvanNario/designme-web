const Service =
require("../models/Service");

const Quote =
require("../models/Quote");

const Contact =
require("../models/Contact");

const getStats =
async(req,res)=>{

    const services =
    await Service.countDocuments();

    const quotes =
    await Quote.countDocuments();

    const contacts =
    await Contact.countDocuments();

    const newQuotes =
    await Quote.countDocuments({

        estado:"nuevo"

    });

    res.json({

        services,

        quotes,

        contacts,

        newQuotes

    });

};

module.exports = {
    getStats
};