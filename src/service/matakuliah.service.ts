import { MataKuliahResponse, Paging } from "../controller/Controller";
import { CommonHandler } from "../controller/common.handler";
import { prisma } from "../lib/prisma-client";
import { Request } from "express";

export class MataKuliahService {
  static async get(req: Request): Promise<[MataKuliahResponse[], Paging]> {
    const { current_page, per_page } = req.query;

    const [totalMataKuliah, mataKuliah] = await prisma.$transaction([
      prisma.mataKuliah.count(),
      prisma.mataKuliah.findMany({
        skip: Number(per_page) * (Number(current_page) - 1),
        take: Number(per_page),
        orderBy: { createdAt: "desc" },
      }),
    ]);

    const paging = CommonHandler.toPaginate(String(current_page), String(per_page), totalMataKuliah)

    return [
      mataKuliah,
      {
        meta: paging
      },
    ];
  }

  static async getById(req: Request): Promise<MataKuliahResponse> {
    const { id } = req.params;
    const mataKuliah = await prisma.mataKuliah.findUnique({
      where: {
        id: id,
      },
    });
    if (!mataKuliah) throw new Error("404");
    return mataKuliah;
  }


  static toPaginate(current_page: string, per_page: string, totalMataKuliah: number) {
    return {
      current_page: current_page,
      last_page: Math.ceil(Number(totalMataKuliah) / Number(per_page)),
      per_page: per_page,
      total: totalMataKuliah,
    }
  }

  static async post(req: Request) {
    let { kode_mk, nama_mk, sks } = req.body;
    return await prisma.mataKuliah.create({
      data: {
        kode_mk,
        nama_mk,
        sks: Number(sks),
      },
    });
  }

  static async put(req: Request): Promise<MataKuliahResponse> {
    const { id, kode_mk, nama_mk, sks } = req.body;
    return await prisma.mataKuliah.update({
      where: {
        id: id,
      },
      data: {
        kode_mk,
        nama_mk,
        sks: Number(sks),
      },
    });
  }

  static async delete(req: Request): Promise<string> {
    const { id } = req.query;
    await prisma.mataKuliah.delete({
      where: {
        id: String(id),
      },
    });
    return "Success to delete data mata kuliah"
  }

}
