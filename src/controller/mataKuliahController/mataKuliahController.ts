import { Request, Response } from "express";
import { MataKuliahService } from "../../service/matakuliah.service";
import { ResponseController } from "../response.controller";
import { ErrorHandler } from "../error.handler";

export class MataKuliahController {
  static async get(req: Request, res: Response) {
    try {
      const result = await MataKuliahService.get(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const result = await MataKuliahService.getById(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      if (error.message == "404") return ErrorHandler.catch(res, error, "Mata Kuliah not found", 404);
      return ErrorHandler.catch(res, error);
    }
  }

  static async post(req: Request, res: Response) {
    try {
      const result = await MataKuliahService.post(req);
      return res.status(201).send(ResponseController.response(res, result));
    } catch (error: any) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async put(req: Request, res: Response) {
    try {
      const result = await MataKuliahService.put(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const result = await MataKuliahService.delete(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      return ErrorHandler.catch(res, error);
    }
  }
}
