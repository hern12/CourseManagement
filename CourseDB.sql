USE [CourseManagement]
GO
/****** Object:  Table [dbo].[tblCategory]    Script Date: 11/4/2018 11:33:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblCategory](
	[CategoryID] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](250) NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
	[Operator] [nvarchar](250) NULL,
 CONSTRAINT [PK_tblCategory] PRIMARY KEY CLUSTERED 
(
	[CategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblCourseMaster]    Script Date: 11/4/2018 11:33:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblCourseMaster](
	[CourseID] [int] IDENTITY(1,1) NOT NULL,
	[CourseName] [nvarchar](250) NULL,
	[CourseDescription] [nvarchar](250) NULL,
	[CourseCategoryID] [int] NULL,
	[CourseStartTime] [datetime] NULL,
	[CourseEndTime] [datetime] NULL,
	[NumberOfStudent] [int] NULL,
	[UserID] [int] NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
	[Operator] [nvarchar](250) NULL,
 CONSTRAINT [PK_tblCourseMaster] PRIMARY KEY CLUSTERED 
(
	[CourseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblRegisterCourseDetails]    Script Date: 11/4/2018 11:33:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblRegisterCourseDetails](
	[RegisterID] [int] IDENTITY(1,1) NOT NULL,
	[SubjectID] [int] NULL,
	[CourseID] [int] NULL,
	[CategoryID] [int] NULL,
	[UserID] [int] NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
	[Operator] [nvarchar](250) NULL,
 CONSTRAINT [PK_tblRegisterCourseDetails] PRIMARY KEY CLUSTERED 
(
	[RegisterID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblRoleMaster]    Script Date: 11/4/2018 11:33:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblRoleMaster](
	[RoleID] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](250) NULL,
	[RoleDescription] [nvarchar](250) NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
	[Operator] [nvarchar](250) NULL,
 CONSTRAINT [PK_tblRoleMaster] PRIMARY KEY CLUSTERED 
(
	[RoleID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblSubject]    Script Date: 11/4/2018 11:33:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblSubject](
	[SubjectID] [int] IDENTITY(1,1) NOT NULL,
	[SubjectName] [nvarchar](250) NULL,
	[CourseID] [int] NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
	[Operator] [nvarchar](250) NULL,
 CONSTRAINT [PK_tblSubject] PRIMARY KEY CLUSTERED 
(
	[SubjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[tblUsers]    Script Date: 11/4/2018 11:33:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblUsers](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](250) NULL,
	[Password] [nvarchar](250) NULL,
	[FirstName] [nvarchar](250) NULL,
	[LastName] [nvarchar](250) NULL,
	[NickName] [nvarchar](250) NULL,
	[BirthDay] [date] NULL,
	[Gender] [nvarchar](1) NULL,
	[RoleID] [int] NULL,
	[CreateDate] [datetime] NULL,
	[UpdateDate] [datetime] NULL,
	[Operator] [nvarchar](250) NULL,
 CONSTRAINT [PK_tblUsers] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[tblCategory] ON 

INSERT [dbo].[tblCategory] ([CategoryID], [CategoryName], [CreateDate], [UpdateDate], [Operator]) VALUES (1, N'Web Development', CAST(0x0000A98E00000000 AS DateTime), CAST(0x0000A98E00000000 AS DateTime), N'Admin')
INSERT [dbo].[tblCategory] ([CategoryID], [CategoryName], [CreateDate], [UpdateDate], [Operator]) VALUES (2, N'Data & Analytics', CAST(0x0000A98E00000000 AS DateTime), CAST(0x0000A98E00000000 AS DateTime), N'Admin')
SET IDENTITY_INSERT [dbo].[tblCategory] OFF
SET IDENTITY_INSERT [dbo].[tblCourseMaster] ON 

INSERT [dbo].[tblCourseMaster] ([CourseID], [CourseName], [CourseDescription], [CourseCategoryID], [CourseStartTime], [CourseEndTime], [NumberOfStudent], [UserID], [CreateDate], [UpdateDate], [Operator]) VALUES (93, N'How to be a web developer', N'join me', 1, CAST(0x0000AA8F011826C0 AS DateTime), CAST(0x0000AA8F011826C0 AS DateTime), 50, 2, CAST(0x0000A98E00CBDEEA AS DateTime), CAST(0x0000A98E00CBDEEA AS DateTime), N'instructor1')
INSERT [dbo].[tblCourseMaster] ([CourseID], [CourseName], [CourseDescription], [CourseCategoryID], [CourseStartTime], [CourseEndTime], [NumberOfStudent], [UserID], [CreateDate], [UpdateDate], [Operator]) VALUES (94, N'How to be Data Analyst', N'If you do not know about this you should สearn with me!', 2, CAST(0x0000A9A5011826C0 AS DateTime), CAST(0x0000A9A7011826C0 AS DateTime), 0, 2, CAST(0x0000A98E00D7100F AS DateTime), CAST(0x0000A98E00D7100F AS DateTime), N'instructor1')
SET IDENTITY_INSERT [dbo].[tblCourseMaster] OFF
SET IDENTITY_INSERT [dbo].[tblRoleMaster] ON 

INSERT [dbo].[tblRoleMaster] ([RoleID], [RoleName], [RoleDescription], [CreateDate], [UpdateDate], [Operator]) VALUES (1, N'Student', NULL, CAST(0x0000A98D00000000 AS DateTime), CAST(0x0000A98D00000000 AS DateTime), N'Admin')
INSERT [dbo].[tblRoleMaster] ([RoleID], [RoleName], [RoleDescription], [CreateDate], [UpdateDate], [Operator]) VALUES (2, N'Instructor', NULL, CAST(0x0000A98D00000000 AS DateTime), CAST(0x0000A98D00000000 AS DateTime), N'Admin')
SET IDENTITY_INSERT [dbo].[tblRoleMaster] OFF
SET IDENTITY_INSERT [dbo].[tblSubject] ON 

INSERT [dbo].[tblSubject] ([SubjectID], [SubjectName], [CourseID], [CreateDate], [UpdateDate], [Operator]) VALUES (14, N'Introduction', 93, CAST(0x000007D300000000 AS DateTime), CAST(0x000007D300000000 AS DateTime), N'instructor1')
INSERT [dbo].[tblSubject] ([SubjectID], [SubjectName], [CourseID], [CreateDate], [UpdateDate], [Operator]) VALUES (15, N'Basic web', 93, CAST(0x000007D300000000 AS DateTime), CAST(0x000007D300000000 AS DateTime), N'instructor1')
INSERT [dbo].[tblSubject] ([SubjectID], [SubjectName], [CourseID], [CreateDate], [UpdateDate], [Operator]) VALUES (16, N'Introduction', 94, CAST(0x000007D300000000 AS DateTime), CAST(0x000007D300000000 AS DateTime), N'instructor1')
INSERT [dbo].[tblSubject] ([SubjectID], [SubjectName], [CourseID], [CreateDate], [UpdateDate], [Operator]) VALUES (17, N'Basic database', 94, CAST(0x000007D300000000 AS DateTime), CAST(0x000007D300000000 AS DateTime), N'instructor1')
SET IDENTITY_INSERT [dbo].[tblSubject] OFF
SET IDENTITY_INSERT [dbo].[tblUsers] ON 

INSERT [dbo].[tblUsers] ([UserID], [UserName], [Password], [FirstName], [LastName], [NickName], [BirthDay], [Gender], [RoleID], [CreateDate], [UpdateDate], [Operator]) VALUES (1, N'student1', N'123123', N'Pakkawat', N'Suwannasam', N'Hern', CAST(0x4D1A0B00 AS Date), N'M', 1, CAST(0x0000A98D00000000 AS DateTime), CAST(0x0000A98D00000000 AS DateTime), N'Admin')
INSERT [dbo].[tblUsers] ([UserID], [UserName], [Password], [FirstName], [LastName], [NickName], [BirthDay], [Gender], [RoleID], [CreateDate], [UpdateDate], [Operator]) VALUES (2, N'instructor1', N'123123', N'Linly', N'Kamui', N'Linly', CAST(0x4D1A0B00 AS Date), N'F', 2, CAST(0x0000A98D00000000 AS DateTime), CAST(0x0000A98D00000000 AS DateTime), N'Admin')
SET IDENTITY_INSERT [dbo].[tblUsers] OFF
ALTER TABLE [dbo].[tblCourseMaster]  WITH CHECK ADD  CONSTRAINT [FK_tblCourseMaster_tblCategory] FOREIGN KEY([CourseCategoryID])
REFERENCES [dbo].[tblCategory] ([CategoryID])
GO
ALTER TABLE [dbo].[tblCourseMaster] CHECK CONSTRAINT [FK_tblCourseMaster_tblCategory]
GO
ALTER TABLE [dbo].[tblCourseMaster]  WITH CHECK ADD  CONSTRAINT [FK_tblCourseMaster_tblUsers] FOREIGN KEY([UserID])
REFERENCES [dbo].[tblUsers] ([UserID])
GO
ALTER TABLE [dbo].[tblCourseMaster] CHECK CONSTRAINT [FK_tblCourseMaster_tblUsers]
GO
ALTER TABLE [dbo].[tblRegisterCourseDetails]  WITH CHECK ADD  CONSTRAINT [FK_tblRegisterCourseDetails_tblCategory] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[tblCategory] ([CategoryID])
GO
ALTER TABLE [dbo].[tblRegisterCourseDetails] CHECK CONSTRAINT [FK_tblRegisterCourseDetails_tblCategory]
GO
ALTER TABLE [dbo].[tblRegisterCourseDetails]  WITH CHECK ADD  CONSTRAINT [FK_tblRegisterCourseDetails_tblCourseMaster] FOREIGN KEY([CourseID])
REFERENCES [dbo].[tblCourseMaster] ([CourseID])
GO
ALTER TABLE [dbo].[tblRegisterCourseDetails] CHECK CONSTRAINT [FK_tblRegisterCourseDetails_tblCourseMaster]
GO
ALTER TABLE [dbo].[tblRegisterCourseDetails]  WITH CHECK ADD  CONSTRAINT [FK_tblRegisterCourseDetails_tblSubject] FOREIGN KEY([SubjectID])
REFERENCES [dbo].[tblSubject] ([SubjectID])
GO
ALTER TABLE [dbo].[tblRegisterCourseDetails] CHECK CONSTRAINT [FK_tblRegisterCourseDetails_tblSubject]
GO
ALTER TABLE [dbo].[tblRegisterCourseDetails]  WITH CHECK ADD  CONSTRAINT [FK_tblRegisterCourseDetails_tblUsers] FOREIGN KEY([UserID])
REFERENCES [dbo].[tblUsers] ([UserID])
GO
ALTER TABLE [dbo].[tblRegisterCourseDetails] CHECK CONSTRAINT [FK_tblRegisterCourseDetails_tblUsers]
GO
ALTER TABLE [dbo].[tblSubject]  WITH CHECK ADD  CONSTRAINT [FK_tblSubject_tblCourseMaster] FOREIGN KEY([CourseID])
REFERENCES [dbo].[tblCourseMaster] ([CourseID])
GO
ALTER TABLE [dbo].[tblSubject] CHECK CONSTRAINT [FK_tblSubject_tblCourseMaster]
GO
ALTER TABLE [dbo].[tblUsers]  WITH CHECK ADD  CONSTRAINT [FK_tblUsers_tblUsers] FOREIGN KEY([RoleID])
REFERENCES [dbo].[tblRoleMaster] ([RoleID])
GO
ALTER TABLE [dbo].[tblUsers] CHECK CONSTRAINT [FK_tblUsers_tblUsers]
GO
