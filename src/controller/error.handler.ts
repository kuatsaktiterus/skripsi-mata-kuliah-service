import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Response } from "express";
import { ErrorResponse } from "./Controller";

export class ErrorHandler {
  static catch(response: Response, exception?: any, errMsg?: (string | object), code?: number) {
    if (exception instanceof PrismaClientKnownRequestError) {
      let message: string | object;
      switch (exception.code) {
        case "P2002":
          message = "Constraint Failure";
          return response.send(
            this.error400(errMsg || message)
          );
        case "P2025":
          message = "Required data is not found";
          return response.status(404).send(
            this.error404(errMsg || message)
          );
        case "P2003":
          message = "Foreign key constraint failure";
          return response.status(400).send(
            this.error400(errMsg || message)
          );
        default:
          return response.status(500).send(
            this.error500(exception)
          );
      }

    }

    switch (code) {
      case 404:
        return response.status(404).send(
          this.error404(errMsg)
        );
      case 400:
        return response.status(400).send(
          this.error400(errMsg)
        );
    }

    return response.status(500).send(
      this.error500(
        { exception }
      )
    );
  }

  static error404(error?: string | object): ErrorResponse {
    return {
      code: 404,
      status: "NOT FOUND",
      errors: error
    }
  }

  static error400(error?: string | object): ErrorResponse {
    return {
      code: 400,
      status: "BAD REQUEST",
      errors: error
    }
  }

  static error500(error?: string | object): ErrorResponse {
    return {
      code: 500,
      status: "SERVER ERROR",
      errors: error
    }
  }
}

