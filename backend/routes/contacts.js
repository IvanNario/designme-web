const express =
require("express");

const router =
express.Router();

const {

    createContact,
    getContacts

} = require(
    "../controllers/contactsController"
);

router.post(
    "/",
    createContact
);

router.get(
    "/",
    getContacts
);

module.exports = router;