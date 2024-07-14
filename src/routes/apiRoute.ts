import { Router } from "express";
import { validateRequestSchema } from "../middleware/validate-request";
import verifyAdmin from "../middleware/verify-admin";
import getPaginateSchema from "../schema/get-paginate-validation";
import postMataKuliahSchema from "../schema/post-mata_kuliah-validation";
import putMataKuliahSchema from "../schema/put-mata_kuliah-validation";
import idSchema from "../schema/id-validation";
import postJurusanSchema from "../schema/post-jurusan-validation";
import putJurusanSchema from "../schema/put-jurusan-validation";
import postSemesterSchema from "../schema/post-semester-valdiation";
import putSemesterSchema from "../schema/put-semester-validation";
import postSemesterJurusanMkSchema from "../schema/post-semesterJurusanMk-validation";
import putSemesterJurusanMkSchema from "../schema/put-semesterJurusanMk-validation";
import postNilaiSchema from "../schema/post-nilai-validation";
import putNilaiSchema from "../schema/put-nilai-validation";
import { MataKuliahController } from "../controller/mataKuliahController/mataKuliahController";
import { JurusanController } from "../controller/jurusanController/jurusanController";
import { SemesterController } from "../controller/semesterController/semesterController";
import { semesterJurusanMkController } from "../controller/semesterJurusanMkController/semesterJurusanMkController";
import { NilaiController } from "../controller/nilaiController/nilaiController";

let ROUTER = Router();

ROUTER.get("/", (req, res) => {
  res.send("Hello World");
});

/**
 *
 * Mata kuliah Controller
 *  Admin only = post, put, delete
 * */
ROUTER.get(
  "/mata-kuliah/",
  getPaginateSchema,
  validateRequestSchema,
  MataKuliahController.get
);

ROUTER.get(
  "/mata-kuliah/:id",
  idSchema.schemaParam,
  validateRequestSchema,
  MataKuliahController.getById
);

ROUTER.post(
  "/mata-kuliah/",
  verifyAdmin,
  postMataKuliahSchema,
  validateRequestSchema,
  MataKuliahController.post
);

ROUTER.put(
  "/mata-kuliah/",
  verifyAdmin,
  putMataKuliahSchema,
  validateRequestSchema,
  MataKuliahController.put
);

ROUTER.delete(
  "/mata-kuliah",
  verifyAdmin,
  idSchema.schemaQuery,
  validateRequestSchema,
  MataKuliahController.delete
);

// /**
//  *
//  * Jurusan Controller
//  * Admin only access all controller
//  * */
ROUTER.get(
  "/jurusan/",
  verifyAdmin,
  getPaginateSchema,
  validateRequestSchema,
  JurusanController.get
);

// get by id
ROUTER.get(
  "/jurusan/:id",
  verifyAdmin,
  idSchema.schemaParam,
  validateRequestSchema,
  JurusanController.getById
);

ROUTER.post(
  "/jurusan/",
  verifyAdmin,
  postJurusanSchema,
  validateRequestSchema,
  JurusanController.post
);

ROUTER.put(
  "/jurusan/",
  verifyAdmin,
  putJurusanSchema,
  validateRequestSchema,
  JurusanController.put
);

ROUTER.delete(
  "/jurusan",
  verifyAdmin,
  idSchema.schemaQuery,
  validateRequestSchema,
  JurusanController.delete
);

/**
 *
 * Semester Controller
 * Admin only access 
 * */
ROUTER.get(
  "/semester/",
  verifyAdmin,
  getPaginateSchema,
  validateRequestSchema,
  SemesterController.get
);
//
// get by id
ROUTER.get(
  "/semester/:id",
  verifyAdmin,
  idSchema.schemaParam,
  validateRequestSchema,
  SemesterController.getById
);

ROUTER.post(
  "/semester/",
  verifyAdmin,
  postSemesterSchema,
  validateRequestSchema,
  SemesterController.post
);

ROUTER.put(
  "/semester/",
  verifyAdmin,
  putSemesterSchema,
  validateRequestSchema,
  SemesterController.put
);

ROUTER.delete(
  "/semester",
  verifyAdmin,
  idSchema.schemaQuery,
  validateRequestSchema,
  SemesterController.delete
);

/**
 *
 * semesterJurusan_mk Controller
 * Admin only access all controller
 * */
ROUTER.get(
  "/semester-jurusan-mk/",
  verifyAdmin,
  getPaginateSchema,
  validateRequestSchema,
  semesterJurusanMkController.get
);

// get by id
ROUTER.get(
  "/semester-jurusan-mk/:id",
  verifyAdmin,
  idSchema.schemaParam,
  validateRequestSchema,
  semesterJurusanMkController.getById
);

ROUTER.post(
  "/semester-jurusan-mk/",
  verifyAdmin,
  postSemesterJurusanMkSchema,
  validateRequestSchema,
  semesterJurusanMkController.post
);

ROUTER.put(
  "/semester-jurusan-mk/",
  verifyAdmin,
  putSemesterJurusanMkSchema,
  validateRequestSchema,
  semesterJurusanMkController.put
);

ROUTER.delete(
  "/semester-jurusan-mk",
  verifyAdmin,
  idSchema.schemaQuery,
  validateRequestSchema,
  semesterJurusanMkController.delete
);

/**
 *
 * nilai Controller
 * Admin only access 
 * */
ROUTER.get(
  "/nilai/",
  verifyAdmin,
  getPaginateSchema,
  validateRequestSchema,
  NilaiController.get
);

ROUTER.post(
  "/nilai/",
  verifyAdmin,
  postNilaiSchema,
  validateRequestSchema,
  NilaiController.post
);

ROUTER.put(
  "/nilai/",
  verifyAdmin,
  putNilaiSchema,
  validateRequestSchema,
  NilaiController.put
);

ROUTER.delete(
  "/nilai",
  verifyAdmin,
  idSchema.schemaQuery,
  validateRequestSchema,
  NilaiController.delete
);

export default ROUTER;
