import { body } from "express-validator";

const schema = [
  body("id")
    .isString()
    .withMessage("id must be a string")
    .notEmpty()
    .withMessage("id must not be empty"),
  body("kode_mk")
    .isString()
    .withMessage("kode_mk must be a string")
    .notEmpty()
    .withMessage("kode_mk must not be empty"),
  body("nama_mk")
    .isString()
    .withMessage("nama_mk must be a string")
    .notEmpty()
    .withMessage("nama_mk must not be empty"),
  body("sks")
    .isInt({ gt: 0 })
    .withMessage("sks must be an integer")
    .notEmpty()
    .withMessage("sks must not be empty"),
];

export default schema;
