import crypto from 'crypto'
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'

const s3 = multerS3({
  s3: new aws.S3(),
  bucket: 'pokedexredfox',
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: 'public-read',
  key: (req:any, file:any, cb:any) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err)

      const fileName = `${hash.toString('hex')}-${file.originalname}`

      cb(null, fileName)
    })
  }
})
const config = {
  storage: s3,
  fileFilter: (req:any, file:any, cb:any) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpg',
      'image/png',
      'image/gif'
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid File Type'))
    }
  }
}

export default config
