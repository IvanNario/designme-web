const multer = require("multer");

const {
    CloudinaryStorage
} = require(
    "multer-storage-cloudinary"
);

const cloudinary =
require("./cloudinary");

const storage =
new CloudinaryStorage({

    cloudinary,

    params:{
        folder:"designme-services"
    }

});

module.exports =
multer({ storage });

router.post(
    "/",
    protect,
    upload.single("imagen"),
    (req,res)=>{

        res.json({

            imageUrl:
            req.file.path

        });

    }
);