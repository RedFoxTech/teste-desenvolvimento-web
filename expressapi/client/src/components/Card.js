import React, { useState, useEffect, Fragment } from 'react';
import ImageCropper from '../helpers/ImageCropper'
import { getCroppedImg } from '../helpers/cropImage'

const Card = ({ pokemon }) =>
{
    const [image, setImage] = useState(null)
    const [cropped, setCropped] = useState(null)

    useEffect(() =>
    {
        if (image)
        {
            getCroppedImg(image).then((result) =>
            {
                setCropped(result)
            })
        }
    }, [image]);

    const imageLoader = (pokemon) =>
    {
        // set image and activate cropping effect
    }

    return (<Fragment>
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image">
                    <img src={cropped} />
                    {imageLoader(pokemon.imgname)}
                    <span className="card-title"></span>
                </div>
                <div className="card-content">
                    <p>Name: {pokemon.name}</p>
                    <p>Type: {pokemon.type1}</p>
                    <p>Atack power: {pokemon.atk}</p>
                    <p>Defense power: {pokemon.def}</p>
                    <p>Sta: {pokemon.sta}</p>
                </div>
                <div className="card-action">
                    <a href="#">Click me</a>
                </div>
            </div>
        </div>
    </Fragment>);
};

export default Card;
