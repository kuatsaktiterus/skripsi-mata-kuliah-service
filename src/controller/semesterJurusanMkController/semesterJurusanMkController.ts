import { Request, Response } from "express";
import { SemesterJurusanMkService } from "../../service/semester_jurusan_mk.service";
import { ResponseController } from "../response.controller";
import { ErrorHandler } from "../error.handler";

export class semesterJurusanMkController {
  static async get(req: Request, res: Response) {
    try {
      const result = await SemesterJurusanMkService.get(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const result = await SemesterJurusanMkService.getById(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async post(req: Request, res: Response) {
    try {
      const result = await SemesterJurusanMkService.post(req);
      return res.status(201).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async put(req: Request, res: Response) {
    try {
      const result = await SemesterJurusanMkService.put(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const result = await SemesterJurusanMkService.delete(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }
}
