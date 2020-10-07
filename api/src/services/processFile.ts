import XLSX from 'xlsx'
import { Express } from 'express'

export class ProcessFile {
  public async process (file: Express.Multer.File): Promise<string> {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' })
    const sheetNameList = workbook.SheetNames

    const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]])
    const data = JSON.stringify(jsonData)
    return data
  }
}
