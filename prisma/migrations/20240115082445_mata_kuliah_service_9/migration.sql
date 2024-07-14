/*
  Warnings:

  - You are about to drop the column `MataKuliahId` on the `SemesterJurusan_mk` table. All the data in the column will be lost.
  - You are about to drop the column `SemesterJurusanId` on the `SemesterJurusan_mk` table. All the data in the column will be lost.
  - You are about to drop the `SemesterJurusan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `jurusanId` to the `SemesterJurusan_mk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mataKuliahId` to the `SemesterJurusan_mk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `semesterId` to the `SemesterJurusan_mk` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[SemesterJurusan] DROP CONSTRAINT [SemesterJurusan_jurusanId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[SemesterJurusan] DROP CONSTRAINT [SemesterJurusan_semesterId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[SemesterJurusan_mk] DROP CONSTRAINT [SemesterJurusan_mk_MataKuliahId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[SemesterJurusan_mk] DROP CONSTRAINT [SemesterJurusan_mk_SemesterJurusanId_fkey];

-- AlterTable
ALTER TABLE [dbo].[SemesterJurusan_mk] DROP COLUMN [MataKuliahId],
[SemesterJurusanId];
ALTER TABLE [dbo].[SemesterJurusan_mk] ADD [jurusanId] NVARCHAR(1000) NOT NULL,
[mataKuliahId] NVARCHAR(1000) NOT NULL,
[semesterId] NVARCHAR(1000) NOT NULL;

-- DropTable
DROP TABLE [dbo].[SemesterJurusan];

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan_mk] ADD CONSTRAINT [SemesterJurusan_mk_jurusanId_fkey] FOREIGN KEY ([jurusanId]) REFERENCES [dbo].[Jurusan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan_mk] ADD CONSTRAINT [SemesterJurusan_mk_semesterId_fkey] FOREIGN KEY ([semesterId]) REFERENCES [dbo].[Semester]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan_mk] ADD CONSTRAINT [SemesterJurusan_mk_mataKuliahId_fkey] FOREIGN KEY ([mataKuliahId]) REFERENCES [dbo].[MataKuliah]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
