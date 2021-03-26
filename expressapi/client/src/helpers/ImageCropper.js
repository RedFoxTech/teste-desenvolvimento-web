import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import { getCroppedImg } from './cropImage'
//getBlob,
const ImageCropper = ({ inputImg }) =>
{
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    /* onCropComplete() will occur each time the user modifies the cropped area, 
    which isn't ideal. A better implementation would be getting the blob 
    only when the user hits the submit button, but this works for now  */
    const onCropComplete = async (_, croppedAreaPixels) =>
    {
        const croppedImage = await getCroppedImg(
            inputImg,
            croppedAreaPixels
        )
        return croppedImage
    }

    return (
        /* need to have a parent with `position: relative` 
    to prevent cropper taking up whole page */
        <img src=
            {<Cropper
                image={inputImg}
                crop={crop}
                zoom={zoom}
                aspect={1.497}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
            />}
        />
    )
}

export default ImageCropper