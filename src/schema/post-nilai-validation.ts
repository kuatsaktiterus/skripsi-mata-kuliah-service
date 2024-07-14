import { body } from "express-validator";

const schema = [
  body("nilai")
    .isString()
    .withMessage("nilai must be a string")
    .notEmpty()
    .withMessage("nilai must not be empty"),
  body("bobot")
    .isFloat({ gt: 0 })
    .withMessage("bobot must be a number")
    .notEmpty()
    .withMessage("bobot must not be empty"),
];

export default schema;
