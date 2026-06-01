const {

    body,
    validationResult

} =
require(
    "express-validator"
);
const validateContact = [

    body("nombre")
    .notEmpty(),

    body("correo")
    .isEmail(),

    body("mensaje")
    .isLength({
        min:10
    }),

    (req,res,next)=>{

        const errors =
        validationResult(req);

        if(
            !errors.isEmpty()
        ){

            return res
            .status(400)
            .json(
                errors.array()
            );

        }

        next();

    }

];

module.exports =
validateContact;
router.post(
    "/",
    validateContact,
    createContact
);