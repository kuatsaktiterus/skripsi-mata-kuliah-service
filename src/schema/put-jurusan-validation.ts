import { body } from "express-validator";

const schema = [
  body("id")
    .isString()
    .withMessage("id must be a string")
    .notEmpty()
    .withMessage("id must not be empty"),
  body("nama_jurusan")
    .isString()
    .withMessage("nama_jurusan must be a string")
    .notEmpty()
    .withMessage("nama_jurusan must not be empty"),
];

export default schema;
