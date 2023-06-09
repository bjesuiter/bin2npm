import { copyAssets } from "./copy-assets.ts";

Deno.test(`copy assets`, async () => {
  await copyAssets();
});
