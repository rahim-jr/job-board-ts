
// Temporary no-op UploadThing router to avoid bundling the real
// UploadThing server packages, which are currently incompatible with Turbopack.
// Replace with the real router implementation once the upstream issue is fixed.

export const ourFileRouter = {} as const;

export type OurFileRouter = typeof ourFileRouter;
