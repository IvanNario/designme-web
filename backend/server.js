require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const connectDB =
require("./config/db");

const helmet =
require("helmet");

app.use(
    helmet()
);

const rateLimit =
require(
"express-rate-limit"
);

app.use(

rateLimit({

windowMs:
15 * 60 * 1000,

max:100

})

);

const app =
express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(
    "/api/services",
    require("./routes/services")
);

app.listen(
    process.env.PORT,
    ()=>{
        console.log(
            `Servidor en puerto ${process.env.PORT}`
        );
    }
);

app.use(
    "/api/quotes",
    require("./routes/quotes")
);

app.use(
    "/api/contacts",
    require("./routes/contacts")
);

app.use(
    "/api/auth",
    require("./routes/auth")
);
const path =
require("path");

app.use(

    "/uploads",

    express.static(
        path.join(
            __dirname,
            "uploads"
        )
    )

);
app.use(
    "/api/upload",
    require("./routes/upload")
);

app.use(
    "/api/dashboard",
    require(
        "./routes/dashboard"
    )
);