const Quote =
require("../models/Quote");

const createQuote =
async(req,res)=>{

    try{

        const quote =
        await Quote.create(req.body);

        res.status(201)
           .json(quote);

    }catch(error){

        res.status(500)
           .json(error);

    }

};

const getQuotes =
async(req,res)=>{

    const quotes =
    await Quote.find()
               .sort({
                   createdAt:-1
               });

    res.json(quotes);

};
const updateQuote =
async(req,res)=>{

    const quote =
    await Quote.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new:true }

    );

    res.json(quote);

};

module.exports = {

    createQuote,
    getQuotes

};