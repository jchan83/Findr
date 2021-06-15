import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm =({ onInputChange, onSubmit }) => {
    return(
    <div>
        <p className='f3 font'>
            {'This crystal ball will fulfill your craving'}
        </p>
        <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                <button className='font w-30 grow f4 link ph3 pv2 dib black bg-light-purple'
                onClick ={onSubmit}>
                 Ask!</button>
            </div>
        </div>
    </div>
    )
}




export default ImageLinkForm;