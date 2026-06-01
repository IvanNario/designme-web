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
            req.file.path

        });

    }
);

module.exports =
router;