import React from 'react'

function Modal({show,item,onClose}) {
    if(!show){
        return null;
    }
    let datas=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
    <div className="overlay">
        <div className="overlay-inner">
            <button className="close" onClick={onClose}><i class="fa-solid fa-x"></i></button>
            <div className="inner-box">
                <img src={datas} alt="" />
                <div className="info">
                    <h1>{item.volumeInfo.title}</h1>
                    <h3>{item.volumeInfo.authors}</h3>
                    <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate} </span></h4><br />
                    <a href={item.volumeInfo.previewLink} ><button>more</button></a>

                </div>
            </div>
            <div className="description " style={{color:'black'}}>{item.volumeInfo.description} </div>
        </div>
    </div>
    
    </>
  )
}

export default Modal