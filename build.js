const fs = require("fs");
const path = require("path");

const root = __dirname;
const output = path.join(root, "public");

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const item of ["index.html", "styles", "images"]) {
  fs.cpSync(path.join(root, item), path.join(output, item), { recursive: true });
}
