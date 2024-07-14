BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [role] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_username_key] UNIQUE NONCLUSTERED ([username])
);

-- CreateTable
CREATE TABLE [dbo].[Mahasiswa] (
    [id] NVARCHAR(1000) NOT NULL,
    [nim] NVARCHAR(1000) NOT NULL,
    [nama] NVARCHAR(1000) NOT NULL,
    [prodi] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Mahasiswa_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Mahasiswa_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Mahasiswa_nim_key] UNIQUE NONCLUSTERED ([nim]),
    CONSTRAINT [Mahasiswa_userId_key] UNIQUE NONCLUSTERED ([userId])
);

-- CreateTable
CREATE TABLE [dbo].[Admin] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Admin_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Admin_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Admin_userId_key] UNIQUE NONCLUSTERED ([userId])
);

-- CreateTable
CREATE TABLE [dbo].[MataKuliah] (
    [id] NVARCHAR(1000) NOT NULL,
    [kode_mk] NVARCHAR(1000) NOT NULL,
    [nama_mk] NVARCHAR(1000) NOT NULL,
    [sks] INT NOT NULL,
    [bobot] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [MataKuliah_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [MataKuliah_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SemesterJurusan] (
    [id] NVARCHAR(1000) NOT NULL,
    [semesterId] NVARCHAR(1000) NOT NULL,
    [jurusanId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [SemesterJurusan_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [SemesterJurusan_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Jurusan] (
    [id] NVARCHAR(1000) NOT NULL,
    [nama_jur] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Jurusan_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Jurusan_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Semester] (
    [id] NVARCHAR(1000) NOT NULL,
    [semester] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Semester_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Semester_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Mahasiswa] ADD CONSTRAINT [Mahasiswa_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Admin] ADD CONSTRAINT [Admin_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan] ADD CONSTRAINT [SemesterJurusan_semesterId_fkey] FOREIGN KEY ([semesterId]) REFERENCES [dbo].[Semester]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SemesterJurusan] ADD CONSTRAINT [SemesterJurusan_jurusanId_fkey] FOREIGN KEY ([jurusanId]) REFERENCES [dbo].[Jurusan]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
