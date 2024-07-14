/*
  Warnings:

  - You are about to drop the column `semester_jurusanId` on the `MataKuliah` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[MataKuliah] DROP CONSTRAINT [MataKuliah_semester_jurusanId_fkey];

-- AlterTable
ALTER TABLE [dbo].[MataKuliah] DROP COLUMN [semester_jurusanId];

-- CreateTable
CREATE TABLE [dbo].[SemesterJurusan_Matakuliah] (
    [id] NVARCHAR(1000) NOT NULL,
    [SemesterJurusanId] NVARCHAR(1000) NOT NULL,
    [MataKuliahId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [SemesterJurusan_Matakuliah_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [SemesterJurusan_Matakuliah_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan_Matakuliah] ADD CONSTRAINT [SemesterJurusan_Matakuliah_SemesterJurusanId_fkey] FOREIGN KEY ([SemesterJurusanId]) REFERENCES [dbo].[SemesterJurusan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan_Matakuliah] ADD CONSTRAINT [SemesterJurusan_Matakuliah_MataKuliahId_fkey] FOREIGN KEY ([MataKuliahId]) REFERENCES [dbo].[MataKuliah]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
