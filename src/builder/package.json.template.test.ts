import { renderPackageJson } from "./package.json.template.ts";

Deno.test(`Test package.json rendering`, () => {
  renderPackageJson({
    name: "package-json-template-test",
    version: "0.0.0",
    description: "Testrun for redering package json ",
    binAliases: ["testrun1", "testrun2"],
  });
});
