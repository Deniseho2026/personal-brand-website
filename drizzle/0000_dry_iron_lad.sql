CREATE TABLE `contactEnquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(180) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(80),
	`enquiryType` enum('counselling','expressive-arts','watercolour','talks-workshops','older-adult-companionship','general') NOT NULL,
	`message` text NOT NULL,
	`locale` enum('en','zh') NOT NULL DEFAULT 'en',
	`consent` boolean NOT NULL,
	`status` enum('new','read','closed') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contactEnquiries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contentItems` (
	`id` int AUTO_INCREMENT NOT NULL,
	`kind` enum('article','artwork','project','collection') NOT NULL,
	`slug` varchar(160) NOT NULL,
	`titleEn` varchar(300) NOT NULL,
	`titleZh` varchar(300) NOT NULL,
	`excerptEn` text,
	`excerptZh` text,
	`bodyEn` text,
	`bodyZh` text,
	`categoryEn` varchar(120),
	`categoryZh` varchar(120),
	`tags` text,
	`imageUrl` varchar(1024),
	`year` varchar(20),
	`mediumEn` varchar(240),
	`mediumZh` varchar(240),
	`featured` boolean NOT NULL DEFAULT false,
	`status` enum('draft','published') NOT NULL DEFAULT 'draft',
	`sortOrder` int NOT NULL DEFAULT 0,
	`publishedAt` timestamp,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contentItems_id` PRIMARY KEY(`id`),
	CONSTRAINT `contentItems_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
