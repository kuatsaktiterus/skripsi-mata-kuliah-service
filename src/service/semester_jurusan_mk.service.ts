import { Paging, SemesterJurusanMkResponse } from "../controller/Controller";
import { CommonHandler } from "../controller/common.handler";
import { prisma } from "../lib/prisma-client";
import { Request } from "express";

export class SemesterJurusanMkService {
  static async get(req: Request): Promise<[SemesterJurusanMkResponse[], Paging]> {
    const { current_page = 1, per_page = 2 } = req.query;

    const [totalSemesterJurusanMk, semesterJurusanMk] =
      await prisma.$transaction([
        prisma.semesterJurusan_mk.count(),
        prisma.semesterJurusan_mk.findMany({
          skip: Number(per_page) * (Number(current_page) - 1),
          take: Number(per_page),
          orderBy: { createdAt: "desc" },
        }),
      ]);

    const paging = CommonHandler.toPaginate(String(current_page), String(per_page), totalSemesterJurusanMk);

    return [
      semesterJurusanMk,
      {
        meta: paging,
      },
    ];
  }

  static async getById(req: Request): Promise<SemesterJurusanMkResponse> {
    const { id } = req.params;
    return await prisma.semesterJurusan_mk.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  static async post(req: Request): Promise<SemesterJurusanMkResponse> {
    const { id_mk, id_semester, id_jurusan } = req.body;
    return await prisma.semesterJurusan_mk.create({
      data: {
        jurusanId: id_jurusan,
        semesterId: id_semester,
        mataKuliahId: id_mk,
      },
    });
  }

  static async put(req: Request): Promise<SemesterJurusanMkResponse> {
    const { id, id_mk, id_semester, id_jurusan } = req.body;
    return await prisma.semesterJurusan_mk.update({
      where: {
        id: id,
      },
      data: {
        mataKuliahId: id_mk,
        jurusanId: id_jurusan,
        semesterId: id_semester,
      },
    });
  }

  static async delete(req: Request): Promise<string> {
    const { id } = req.query;
    await prisma.semesterJurusan_mk.delete({
      where: {
        id: String(id),
      },
    });
    return "Success to delete data";
  }
}
