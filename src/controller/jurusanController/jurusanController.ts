import { Request, Response } from "express";
import { JurusanService } from "../../service/jurusan.service";
import { ResponseController } from "../response.controller";
import { ErrorHandler } from "../error.handler";

export class JurusanController {
  static async get(req: Request, res: Response) {
    try {
      const result = await JurusanService.get(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const result = await JurusanService.getById(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async post(req: Request, res: Response) {
    try {
      const result = await JurusanService.post(req);
      return res.status(201).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async put(req: Request, res: Response) {
    try {
      const result = await JurusanService.put(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const result = await JurusanService.delete(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error) {
      return ErrorHandler.catch(res, error);
    }
  }
}
