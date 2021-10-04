
import { franc } from "franc";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];
let langCode = franc(input);


if (langCode === 'und') {
  console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red);
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is: ${language.name}`.green);
}
