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

  // binAliases will be added to the "bin" field in the package.json and will point to the same main entrypoint.
  // This allows publishing the same binary under multiple names, for example a long and a short name.
  // The main binary name will always be the same as the package name!
  // TODO @bjesuiter: Test whether its working in shell with npm scopes!
  binAliases: z.array(z.string()).optional(),

  // A list of files or folder which will be added to the package.json > files array to be included in the final package
  extraFiles: z.array(z.string()).optional(),
});
export type TargetPackageJson = z.infer<typeof TargetPackageJson>;

export const ExtraAssetsConfig = z.array(z.object({
  from: z.string(),
  // Note: this 'to' path will be appended after the output path
  to: z.string(),
})).optional();
export type ExtraAssetsConfig = z.infer<typeof ExtraAssetsConfig>;

export const Bin2NpmConfig = z.object({
  bin2NpmVersion: z.string().min(1),
  outDir: z.string().default("dist/"),
  binaries: z.array(BinaryConfig),
  targetPackageJson: TargetPackageJson,
  extraAssets: ExtraAssetsConfig,
});

export type Bin2NpmConfig = z.infer<typeof Bin2NpmConfig>;
