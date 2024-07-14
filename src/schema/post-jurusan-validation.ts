import { body } from "express-validator";

const schema = [
  body("nama_jurusan")
    .isString()
    .withMessage("nama_jurusan must be a string")
    .notEmpty()
    .withMessage("nama_jurusan must not be empty"),
];

export default schema;
