import React, { useState } from 'react'
import Card  from './Card'
import axios from 'axios'


function Maincontent() {

    const [search,setSearch]=useState("")
    const [bookData,setBookData]=useState([])
    const searchBook = async (evt) => {
        if (evt.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`)
            .then(res=>setBookData(res.data.items))
            .catch(err=>console.log(err))
            
                
            }
          }
    
    
  return (
    
    <>
      <div className=' bg-brown'>
        <div className="header">
             <div className='row1'>
               <h1 style={{fontWeight:'bold' ,fontSize:'50px',fontFamily: "Protest Revolution, serif"}}>A room without books is like <br /> a body without a soul</h1>
              </div> 
              <div className="row2">
                <h2 style={{fontWeight:'bold',fontSize:'30px' }}>Find Your Book</h2>
                 <div className="search">
                   <input type="text" placeholder='Enter your book name.....' value={search} onChange={e=>setSearch(e.target.value) } onKeyPress={searchBook}/>
                   <button ><i className="fas fas-search"></i></button>
                </div>
                <img src="https://tse2.mm.bing.net/th?id=OIP.llDKmcgD98q5zwZ3KH19kQHaEo&pid=Api&P=0&h=180" alt="" />
  
              </div>   
          </div>
          <div className='cardss' style={{display:'flex',marginTop:'10px'}} >
              {
                 <Card book={bookData}/>
              }
  
          </div>
            
      </div>
    </>
  )

}
export default Maincontent