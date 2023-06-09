import { z } from "zod";

const regex =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const SemVer = z.string().regex(regex);

export const BinaryConfig = z.object({
  path: z.string().min(1),
  platform: z.string().min(1),
  arch: z.string().min(1),
});
export type BinaryConfig = z.infer<typeof BinaryConfig>;

export const TargetPackageJson = z.object({
  name: z.string().min(1),
  version: SemVer,
  description: z.string(),
});
export type TargetPackageJson = z.infer<typeof TargetPackageJson>;

export const Bin2NpmConfig = z.object({
  bin2NpmVersion: z.string().min(1),
  binaries: z.array(BinaryConfig),
  targetPackageJson: TargetPackageJson,
});

export type Bin2NpmConfig = z.infer<typeof Bin2NpmConfig>;
