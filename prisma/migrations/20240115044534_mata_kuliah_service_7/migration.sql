/*
  Warnings:

  - You are about to drop the column `nama_jur` on the `Jurusan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nama_jurusan]` on the table `Jurusan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nama_jurusan` to the `Jurusan` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[Jurusan] DROP CONSTRAINT [Jurusan_nama_jur_key];

-- AlterTable
ALTER TABLE [dbo].[Jurusan] DROP COLUMN [nama_jur];
ALTER TABLE [dbo].[Jurusan] ADD [nama_jurusan] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[Jurusan] ADD CONSTRAINT [Jurusan_nama_jurusan_key] UNIQUE NONCLUSTERED ([nama_jurusan]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
