import fs from "fs";
import path from "path";

export function removeMDFile(file) {
  console.log("--> remove file:", file);
  if (!fs.existsSync(file)) {
    return;
  }

  // Read the Markdown file
  const content = fs.readFileSync(file, "utf8");

  const imageUrls = content.match(/<img.*?src="(.*?)"/g) || [];
  imageUrls.forEach((match) => {
    const srcMatch = match.match(/src="(.*?)"/);
    if (srcMatch) {
      const rawPath = (srcMatch[1] || "").replace("./", "");
      const fileBasename = path.dirname(file);
      const targetAssetsImage = `${fileBasename}/${rawPath}`;
      if (fs.existsSync(targetAssetsImage)) {
        console.log("--> remove file image: ", targetAssetsImage);
        fs.unlinkSync(targetAssetsImage);
      }
    }
  });

  // remove markdown file
  fs.unlinkSync(file);
}
