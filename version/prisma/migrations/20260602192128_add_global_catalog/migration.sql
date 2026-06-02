-- CreateTable
CREATE TABLE "GlobalCatalog" (
    "id" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    "movieData" JSONB NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GlobalCatalog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GlobalCatalog_movieId_key" ON "GlobalCatalog"("movieId");
