// create the image with a src of the base64 string
const createImage = (url) =>
    new Promise((resolve, reject) =>
    {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', error => reject(error))
        image.setAttribute('crossOrigin', 'anonymous')
        image.src = url
    })

export const getCroppedImg = async (imageSrc) =>
{
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    const imageWidth = image.width,
        imageHeight = image.height,
        imageRatio = image.width / image.height
    const canvasRatio = 274 / 153
    let crop
    if (imageRatio > canvasRatio) // largura maior
    {
        let augmentedHeight = imageHeight * canvasRatio
        let newWidth = imageWidth * (augmentedHeight / imageWidth)
        let halfDifference = (imageWidth - newWidth) / 2

        crop = { x: halfDifference, y: 0, width: newWidth + halfDifference, height: imageHeight }
    }
    else if (canvasRatio > imageRatio) // altura maior
    {
        let augmentedWidth = imageHeight * canvasRatio
        let newHeight = imageHeight * (imageWidth / augmentedWidth)
        let halfDifference = (imageHeight - newHeight) / 2

        crop = { x: 0, y: halfDifference, width: imageWidth, height: newHeight + halfDifference }
    }

    /* setting canvas width & height allows us to 
    resize from the original image resolution */
    canvas.width = 274
    canvas.height = 153

    ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        canvas.width,
        canvas.height
    )

    return canvas.toDataURL()

}