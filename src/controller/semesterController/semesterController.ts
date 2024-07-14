import { Request, Response } from "express";
import { SemesterService } from "../../service/semester.service";
import { ResponseController } from "../response.controller";
import { ErrorHandler } from "../error.handler";

export class SemesterController {
  static async get(req: Request, res: Response) {
    try {
      const result = await SemesterService.get(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const result = await SemesterService.getById(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      if (error.message == "404") return ErrorHandler.catch(res, error, "Semester not found", 404);
      return ErrorHandler.catch(res, error);
    }
  }

  static async post(req: Request, res: Response) {
    try {
      const result = await SemesterService.post(req);
      return res.status(201).send(ResponseController.response(res, result));
    } catch (error: any) {
      if (error.code == "P2002") return ErrorHandler.catch(res, error, "Semester already exist");
      return ErrorHandler.catch(res, error);
    }
  }

  static async put(req: Request, res: Response) {
    try {
      const result = await SemesterService.put(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      if (error.code == "P2002") return ErrorHandler.catch(res, error, "Semester already exist");
      return ErrorHandler.catch(res, error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const result = await SemesterService.delete(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }
}
