import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import fs from "fs";

import {
  registerValidation,
  loginValidation,
  tattooCreateValidation,
} from "./validations.js";
import { UserController, TattooController } from "./controllers/index.js";
import { handleValidationErrors, checkAuth } from "./utils/index.js";

mongoose
  .connect(
    `mongodb+srv://ai89zim:V7ztQmYBdMOmBYPn@cluster0.o9sapro.mongodb.net/tattoos_db?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB ok"))
  .catch((error) => console.log("DB error", error));

const app = express();
app.use(cors());

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    if (!fs.existsSync("uploads")) {
      fs.mkdirSync("uploads");
    }
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.post("/upload", checkAuth, upload.single("picture"), (req, res) => {
  res.json({
    message: "Файл загружен",
  });
});

app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);
app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.get("/auth/profile", checkAuth, UserController.getUser);

app.get("/tattoos", TattooController.getAll);

app.post(
  "/tattoos",
  checkAuth,
  tattooCreateValidation,
  handleValidationErrors,
  TattooController.create
);
app.get("/tattoos/:id", TattooController.getOne);
app.delete("/tattoos/:id", checkAuth, TattooController.remove);
app.patch(
  "/tattoos/:id",
  checkAuth,
  tattooCreateValidation,
  handleValidationErrors,
  TattooController.update
);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
