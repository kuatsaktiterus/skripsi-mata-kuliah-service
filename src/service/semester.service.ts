import { Request } from "express";
import { Paging, SemesterResponse } from "../controller/Controller";
import { prisma } from "../lib/prisma-client";
import { CommonHandler } from "../controller/common.handler";
export class SemesterService {
  static async get(req: Request): Promise<[SemesterResponse[], Paging]> {
    const { current_page = 1, per_page = 2 } = req.query;

    const [totalSemester, semester] = await prisma.$transaction([
      prisma.semester.count(),
      prisma.semester.findMany({
        skip: Number(per_page) * (Number(current_page) - 1),
        take: Number(per_page),
        orderBy: { semester: "asc" },
      }),
    ]);

    const paging = CommonHandler.toPaginate(String(current_page), String(per_page), totalSemester);

    return [
      semester,
      {
        meta: paging
      },
    ];

  }

  static async getById(req: Request): Promise<SemesterResponse> {
    const { id } = req.params;
    return await prisma.semester.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  static async post(req: Request): Promise<SemesterResponse> {
    let { semester, batasKrs } = req.body;
    return await prisma.semester.create({
      data: {
        semester,
        batasKrs: Number(batasKrs),
      },
    });
  }

  static async put(req: Request): Promise<SemesterResponse> {
    let { id, semester, batasKrs } = req.body;
    return await prisma.semester.update({
      where: { id: id },
      data: {
        semester,
        batasKrs: Number(batasKrs),
      },
    });
  }

  static async delete(req: Request): Promise<string> {
    let { id } = req.query;
    await prisma.semester.delete({
      where: { id: String(id) },
    });
    return "Success to delete data semester"
  }
}
