const express =
require("express");

const router =
express.Router();

const upload =
require("../config/multer");

router.post(

    "/",

    upload.single("imagen"),

    (req,res)=>{

        res.json({

            imageUrl:

            `http://localhost:3000/uploads/${req.file.filename}`

        });

    }

);

module.exports = router;