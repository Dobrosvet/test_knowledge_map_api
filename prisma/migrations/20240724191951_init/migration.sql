-- CreateTable
CREATE TABLE "Block" (
    "id" TEXT NOT NULL,
    "textId" TEXT,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "dependencyId" TEXT NOT NULL,
    "usageId" TEXT NOT NULL,
    "type" TEXT,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("dependencyId","usageId")
);

-- CreateTable
CREATE TABLE "Translation" (
    "id" TEXT NOT NULL,
    "eng" TEXT NOT NULL,
    "engAutoTranslated" BOOLEAN NOT NULL,
    "rus" TEXT NOT NULL,
    "rusAutoTranslated" BOOLEAN NOT NULL,

    CONSTRAINT "Translation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Source" (
    "type" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "base" TEXT NOT NULL,
    "textId" TEXT,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("type","base","payload")
);

-- CreateTable
CREATE TABLE "Text" (
    "id" TEXT NOT NULL,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titleId" TEXT NOT NULL,
    "contentId" TEXT,
    "filepath" TEXT,
    "doi" TEXT,
    "pmcid" INTEGER,
    "pmid" INTEGER,
    "journalId" TEXT,
    "pubAt" TIMESTAMP(3),
    "license" TEXT,
    "keywords" TEXT[],

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Journal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "ocrid" TEXT,
    "textId" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimalPlatform" (
    "id" TEXT NOT NULL,
    "regxPatterns" TEXT NOT NULL,
    "animalId" TEXT NOT NULL,
    "translationId" TEXT NOT NULL,

    CONSTRAINT "AnimalPlatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameLatin" TEXT NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataHandler" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "textId" TEXT,
    "journalId" TEXT,
    "authorId" TEXT,
    "sourceType" TEXT,
    "sourceBase" TEXT,
    "sourcePayload" TEXT,

    CONSTRAINT "DataHandler_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Translation_eng_key" ON "Translation"("eng");

-- CreateIndex
CREATE UNIQUE INDEX "Translation_rus_key" ON "Translation"("rus");

-- CreateIndex
CREATE UNIQUE INDEX "Text_titleId_key" ON "Text"("titleId");

-- CreateIndex
CREATE UNIQUE INDEX "Text_contentId_key" ON "Text"("contentId");

-- CreateIndex
CREATE UNIQUE INDEX "Text_pmcid_key" ON "Text"("pmcid");

-- AddForeignKey
ALTER TABLE "Block" ADD CONSTRAINT "Block_textId_fkey" FOREIGN KEY ("textId") REFERENCES "Text"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_dependencyId_fkey" FOREIGN KEY ("dependencyId") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_usageId_fkey" FOREIGN KEY ("usageId") REFERENCES "Block"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Source" ADD CONSTRAINT "Source_textId_fkey" FOREIGN KEY ("textId") REFERENCES "Text"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Text" ADD CONSTRAINT "Text_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Translation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Text" ADD CONSTRAINT "Text_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Translation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Text" ADD CONSTRAINT "Text_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_textId_fkey" FOREIGN KEY ("textId") REFERENCES "Text"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalPlatform" ADD CONSTRAINT "AnimalPlatform_translationId_fkey" FOREIGN KEY ("translationId") REFERENCES "Translation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnimalPlatform" ADD CONSTRAINT "AnimalPlatform_animalId_fkey" FOREIGN KEY ("animalId") REFERENCES "Animal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataHandler" ADD CONSTRAINT "DataHandler_textId_fkey" FOREIGN KEY ("textId") REFERENCES "Text"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataHandler" ADD CONSTRAINT "DataHandler_journalId_fkey" FOREIGN KEY ("journalId") REFERENCES "Journal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataHandler" ADD CONSTRAINT "DataHandler_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataHandler" ADD CONSTRAINT "DataHandler_sourceType_sourceBase_sourcePayload_fkey" FOREIGN KEY ("sourceType", "sourceBase", "sourcePayload") REFERENCES "Source"("type", "base", "payload") ON DELETE SET NULL ON UPDATE CASCADE;
