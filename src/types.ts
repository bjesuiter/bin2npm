import { z } from "zod";

export const BinaryConfig = z.object({
  path: z.string().min(1),
  platform: z.string().min(1),
  arch: z.string().min(1),
});

export type BinaryConfig = z.infer<typeof BinaryConfig>;

export const Bin2NpmConfig = z.object({
  bin2NpmVersion: z.string().min(1),
  binaries: z.array(BinaryConfig),
});

export type Bin2NpmConfig = z.infer<typeof Bin2NpmConfig>;
