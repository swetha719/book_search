import  Modal  from './Modal'
import React, { useState } from 'react'

function Card({ book }) {
    const [show,setShow]=useState(false)
    const [bookItem,setItem]=useState()

    return (
        <>
            {
                book.map((item) => {
                    let datas=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount
                     if(datas!=undefined && amount!=undefined){
                        return (
                      <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={datas} alt="" />
                                <div className="botttom">
                                    <h3 className='title'>{item.volumeInfo.title}</h3>
                                    <p className='amount'>&#8377;{amount}</p>
                                </div>
                            </div>
                            <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                      </>
                    )}
                })
            }

        </>
    )
}

export default Card