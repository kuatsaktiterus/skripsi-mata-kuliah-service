import { body } from "express-validator";

const schema = [
  body("id")
    .isString()
    .withMessage("id must be a string")
    .notEmpty()
    .withMessage("id must not be empty"),
  body("semester")
    .isString()
    .withMessage("semester must be a string")
    .notEmpty()
    .withMessage("semester must not be empty"),
  body("batasKrs")
    .isInt({ gt: 0 })
    .withMessage("batasKrs must be an integer")
    .notEmpty()
    .withMessage("batasKrs must not be empty"),
];

export default schema;
