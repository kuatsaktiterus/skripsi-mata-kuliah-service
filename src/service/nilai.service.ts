import { NilaiResponse, Paging } from "../controller/Controller";
import { CommonHandler } from "../controller/common.handler";
import { prisma } from "../lib/prisma-client";
import { Request } from "express";

export class NilaiService {
  static async get(req: Request): Promise<[NilaiResponse[], Paging]> {
    const { current_page = 1, per_page = 2 } = req.query;

    const [totalNilai, nilai] = await prisma.$transaction([
      prisma.nilai.count(),
      prisma.nilai.findMany({
        skip: Number(per_page) * (Number(current_page) - 1),
        take: Number(per_page),
        orderBy: { createdAt: "desc" },
      }),
    ]);

    const paging = CommonHandler.toPaginate(String(current_page), String(per_page), totalNilai);

    return [
      nilai,
      {
        meta: paging,
      },
    ];
  }

  static async post(req: Request): Promise<NilaiResponse> {
    const { nilai, bobot } = req.body;
    return await prisma.nilai.create({
      data: {
        nilai,
        bobot: Number(bobot),
      },
    });
  }

  static async put(req: Request): Promise<NilaiResponse> {
    const { id, nilai, bobot } = req.body;
    return await prisma.nilai.update({
      where: {
        id: id,
      },
      data: {
        nilai,
        bobot: Number(bobot),
      },
    });
  }

  static async delete(req: Request): Promise<string> {
    let { id } = req.query;
    await prisma.nilai.delete({
      where: { id: String(id) },
    });
    return "Success to delete data nilai"
  }
}
