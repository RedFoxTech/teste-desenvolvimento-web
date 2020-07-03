import { ValidationError, ValidationErrorItem } from 'sequelize'
import aws from 'aws-sdk'

export const ErrorHandler = (error:ValidationError) => {
  const catchedErrorList = error.errors.map((value:ValidationErrorItem) => {
    return value.message
  })
  return catchedErrorList
}

export const deleteImage = (key:string) => {
  const s3 = new aws.S3()
  s3.deleteObject({
    Bucket: 'pokedexredfox',
    Key: key
  }).promise()
}
