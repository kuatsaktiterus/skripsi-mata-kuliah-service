/*
  Warnings:

  - A unique constraint covering the columns `[nama_jur]` on the table `Jurusan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[kode_mk]` on the table `MataKuliah` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[semester_jurusanId]` on the table `MataKuliah` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[semester]` on the table `Semester` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Jurusan] ADD CONSTRAINT [Jurusan_nama_jur_key] UNIQUE NONCLUSTERED ([nama_jur]);

-- CreateIndex
ALTER TABLE [dbo].[MataKuliah] ADD CONSTRAINT [MataKuliah_kode_mk_key] UNIQUE NONCLUSTERED ([kode_mk]);

-- CreateIndex
ALTER TABLE [dbo].[MataKuliah] ADD CONSTRAINT [MataKuliah_semester_jurusanId_key] UNIQUE NONCLUSTERED ([semester_jurusanId]);

-- CreateIndex
ALTER TABLE [dbo].[Semester] ADD CONSTRAINT [Semester_semester_key] UNIQUE NONCLUSTERED ([semester]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
