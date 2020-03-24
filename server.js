const express = require("express");
const app = express();
const cors = require("cors");

const log = require("./routes/api/middleware/log");
const loginRouter = require("./routes/login");
const userRouter = require("./routes/me");
const auth = require("./routes/api/middleware/auth");
const noteRouter = require("./routes/noteRouter");
const registerUserRouter = require("./routes/registerUserRouter");

app.use(express.json());
app.use(log);
app.use(cors());

app.use("/api", loginRouter);
app.use("/api", registerUserRouter);

app.use(auth);
app.use("/api", userRouter);
app.use("/api", noteRouter);

app.listen(8801);
