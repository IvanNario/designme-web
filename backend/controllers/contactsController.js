const Contact =
require("../models/Contact");
const transporter =
require("../config/mailer");

const createContact =
async(req,res)=>{

    try{

        const contact =
        await Contact.create(
            req.body
        );

        res.status(201)
           .json(contact);

    }catch(error){

        res.status(500)
           .json(error);

    }
    await transporter.sendMail({

    from:
    process.env.EMAIL_USER,

    to:
    process.env.EMAIL_USER,

    subject:
    "Nuevo mensaje",

    html:`

        <h2>
            Nuevo contacto
        </h2>

        <p>

            ${contact.nombre}

        </p>

        <p>

            ${contact.correo}

        </p>

        <p>

            ${contact.mensaje}

        </p>

    `

});

};

const getContacts =
async(req,res)=>{

    const contacts =
    await Contact.find()
                 .sort({
                     createdAt:-1
                 });

    res.json(contacts);

};

module.exports = {

    createContact,
    getContacts

};
