import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

// Obtener el directorio actual utilizando import.meta.url
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const recurseAndRenameFiles = async (dirPath) => {
  const files = await fs.promises.readdir(dirPath)

  for (const file of files) {
    const filePath = path.join(dirPath, file)
    const fileStat = await fs.promises.stat(filePath)

    if (fileStat.isDirectory()) {
      await recurseAndRenameFiles(filePath)
    } else if (fileStat.isFile()) {
      const ext = path.extname(filePath)
      if (ext === ".js" || ext === ".jsx") {
        const newFilePath = filePath.replace(ext, ".tsx")
        await fs.promises.rename(filePath, newFilePath)
        const fileContent = await fs.promises.readFile(newFilePath, "utf-8")

        const newContent = fileContent.replace(
          /import (.+) from '(.+)'/g,
          (match, importName, importPath) => {
            const newImportPath = importPath.replace(/\.jsx?$/, ".tsx")
            return `import ${importName} from '${newImportPath}'`
          }
        )

        await fs.promises.writeFile(newFilePath, newContent)
      }
    }
  }
}

recurseAndRenameFiles(path.join(__dirname, "src"))
