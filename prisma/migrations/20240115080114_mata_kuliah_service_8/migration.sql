/*
  Warnings:

  - You are about to drop the `SemesterJurusan_Matakuliah` table. If the table is not empty, all the data it contains will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[SemesterJurusan_Matakuliah] DROP CONSTRAINT [SemesterJurusan_Matakuliah_MataKuliahId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[SemesterJurusan_Matakuliah] DROP CONSTRAINT [SemesterJurusan_Matakuliah_SemesterJurusanId_fkey];

-- DropTable
DROP TABLE [dbo].[SemesterJurusan_Matakuliah];

-- CreateTable
CREATE TABLE [dbo].[SemesterJurusan_mk] (
    [id] NVARCHAR(1000) NOT NULL,
    [SemesterJurusanId] NVARCHAR(1000) NOT NULL,
    [MataKuliahId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [SemesterJurusan_mk_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [SemesterJurusan_mk_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan_mk] ADD CONSTRAINT [SemesterJurusan_mk_SemesterJurusanId_fkey] FOREIGN KEY ([SemesterJurusanId]) REFERENCES [dbo].[SemesterJurusan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan_mk] ADD CONSTRAINT [SemesterJurusan_mk_MataKuliahId_fkey] FOREIGN KEY ([MataKuliahId]) REFERENCES [dbo].[MataKuliah]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
