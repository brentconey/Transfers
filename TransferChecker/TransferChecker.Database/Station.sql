CREATE TABLE [dbo].[Station]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
	[BattalionId] INT NOT NULL,
    [Number] INT NOT NULL, 
    [Name] NVARCHAR(250) NOT NULL, 
    [DateAdded] DATETIME NOT NULL DEFAULT GETDATE(), 
    CONSTRAINT [FK_Station_ToBattalion] FOREIGN KEY ([BattalionId]) REFERENCES [Battalion]([Id]) 
)
