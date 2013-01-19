CREATE TABLE [dbo].[Company]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [Name] NVARCHAR(150) NOT NULL, 
    [StationId] INT NOT NULL, 
	[NumberOfPositions] int NOT NULL,
    [DateAdded] DATETIME NOT NULL DEFAULT GETDATE(), 
    CONSTRAINT [FK_Company_Station] FOREIGN KEY ([StationId]) REFERENCES [Station]([Id])
)
