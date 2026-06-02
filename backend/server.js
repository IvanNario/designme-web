require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();

app.use(helmet());

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));

app.use(
    cors({
        origin: [
            "https://designme-web.vercel.app"
        ]
    })
);

app.use(express.json());

app.use(
    "/uploads",
    express.static(
        path.join(
            __dirname,
            "uploads"
        )
    )
);

app.use("/api/services", require("./routes/services"));
app.use("/api/quotes", require("./routes/quotes"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/upload", require("./routes/upload"));
app.use("/api/dashboard", require("./routes/dashboard"));

const PORT =
process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor en puerto ${PORT}`
    );

});