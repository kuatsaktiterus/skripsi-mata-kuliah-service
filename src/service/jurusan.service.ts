import { Request } from "express";
import { prisma } from "../lib/prisma-client";
import { JurusanResponse, Paging } from "../controller/Controller";
import { CommonHandler } from "../controller/common.handler";

export class JurusanService {
  static async get(req: Request): Promise<[JurusanResponse[], Paging]> {
    const { current_page = 1, per_page = 2 } = req.query;

    const [totalJurusan, jurusan] = await prisma.$transaction([
      prisma.jurusan.count(),
      prisma.jurusan.findMany({
        skip: Number(per_page) * (Number(current_page) - 1),
        take: Number(per_page),
        orderBy: { createdAt: "desc" },
      }),
    ]);

    const paging = CommonHandler.toPaginate(String(current_page), String(per_page), totalJurusan)

    return [
      jurusan,
      {
        meta: paging
      },
    ];
  }

  static toPaginate(current_page: string, per_page: string, totalMataKuliah: number) {
    return {
      current_page: current_page,
      last_page: Math.ceil(Number(totalMataKuliah) / Number(per_page)),
      per_page: per_page,
      total: totalMataKuliah,
    }
  }

  static async getById(req: Request): Promise<JurusanResponse> {
    const { id } = req.params;
    return await prisma.jurusan.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  }

  static async post(req: Request): Promise<JurusanResponse> {
    let { nama_jurusan } = req.body;
    return await prisma.jurusan.create({
      data: {
        nama_jurusan,
      },
    });
  }

  static async put(req: Request): Promise<JurusanResponse> {
    const { id, nama_jurusan } = req.body;
    return await prisma.jurusan.update({
      where: {
        id: id,
      },
      data: {
        nama_jurusan,
      },
    });
  }


  static async delete(req: Request): Promise<string> {
    const { id } = req.query;
    await prisma.jurusan.delete({
      where: {
        id: String(id),
      },
    });
    return "Success to delete data jurusan"
  }

}
