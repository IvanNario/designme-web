const express =
require("express");

const router =
express.Router();

const protect = require(
    "../middleware/authMiddleware"
);

const allowRoles =
require(
"../middleware/roleMiddleware"
);

const {

    getServices,

    createService,

    updateService,

    deleteService

} = require(
    "../controllers/servicesController"
);

router.get(
    "/",
    getServices
);

router.post(
    "/",
    protect,
    allowRoles("admin"),
    createService
);

router.put(
    "/:id",
    protect,
    allowRoles(
        "admin",
        "editor"
    ),
    updateService
);

router.delete(
    "/:id",
    protect,
    allowRoles("admin"),
    deleteService
);

module.exports = router;
