import { body } from "express-validator";

const schema = [
  body("id")
    .isString()
    .withMessage("id must be a string")
    .notEmpty()
    .withMessage("id must not be empty"),
  body("id_mk")
    .isString()
    .withMessage("id_mk must be a string")
    .notEmpty()
    .withMessage("id_mk must not be empty"),
  body("id_semester")
    .isString()
    .withMessage("id_semester must be a string")
    .notEmpty()
    .withMessage("id_semester must not be empty"),
  body("id_jurusan")
    .isString()
    .withMessage("id_jurusan must be an string")
    .notEmpty()
    .withMessage("id_jurusan must not be empty"),
];

export default schema;
