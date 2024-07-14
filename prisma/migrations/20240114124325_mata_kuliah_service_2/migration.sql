/*
  Warnings:

  - Added the required column `semester_jurusanId` to the `MataKuliah` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[MataKuliah] ADD [semester_jurusanId] NVARCHAR(1000) NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[MataKuliah] ADD CONSTRAINT [MataKuliah_semester_jurusanId_fkey] FOREIGN KEY ([semester_jurusanId]) REFERENCES [dbo].[SemesterJurusan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
