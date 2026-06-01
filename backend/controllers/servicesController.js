const Service =
require("../models/Service");

const getServices =
async(req,res)=>{
    const services =
    await Service.find();
    res.json(services);
};

const createService =
async(req,res)=>{
    const service =
    await Service.create(req.body);
    res.status(201)
       .json(service);
};

const updateService =
async(req,res)=>{
    const service =
    await Service.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(service);

};

const deleteService =
async(req,res)=>{
    await Service.findByIdAndDelete(
        req.params.id
    );
    res.json({
        message:"Servicio eliminado"
    });
};

const services =
await Service.find({
    activo:true
});
const services =
await Service.find();

module.exports = {
    getServices,
    createService,
    updateService,
    deleteService
};