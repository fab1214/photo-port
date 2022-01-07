import React from 'react';

//pass onClose function as a prop to close modal on button click, and destructre currentPhoto from PhotoList as a prop
function Modal({onClose, currentPhoto}) {
    //destructure currentPhoto into its properties
    const {name, category, description, index} = currentPhoto;
    return (
        <div className='modalBackup'>
            <div className='modalContainer'>
                <h3 className='modalTitle'>
                    {name}
                </h3>
                <img src ={require(`../../assets/large/${category}/${index}.jpg`)} alt='current category'></img>
                <p>{description}</p>
                <button onClick={onClose} type='button'>Close this modal</button>
            </div>
        </div>
    )
}

export default Modal;