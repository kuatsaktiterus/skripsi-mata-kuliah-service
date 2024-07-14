import { Request, Response } from "express";
import { NilaiService } from "../../service/nilai.service";
import { ResponseController } from "../response.controller";
import { ErrorHandler } from "../error.handler";

export class NilaiController {
  static async get(req: Request, res: Response) {
    try {
      const result = await NilaiService.get(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      return ErrorHandler.catch(res, error);
    }
  }

  static async post(req: Request, res: Response) {
    try {
      const result = await NilaiService.post(req);
      return res.status(201).send(ResponseController.response(res, result));
    } catch (error: any) {
      if (error.code == "P2002") return ErrorHandler.catch(res, error, "nilai already exist");
      return ErrorHandler.catch(res, error);
    }
  }

  static async put(req: Request, res: Response) {
    try {
      const result = await NilaiService.put(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      if (error.code == "P2002") return ErrorHandler.catch(res, error, "nilai already exist");
      return ErrorHandler.catch(res, error);
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const result = await NilaiService.delete(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      return ErrorHandler.catch(res, error);
    }
  }
}
