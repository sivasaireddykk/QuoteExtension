import React, { useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa"
import { BsDownload } from "react-icons/bs"
import { FiShare2 } from "react-icons/fi"
import { SlHeart } from "react-icons/sl"
import { AiFillHeart } from "react-icons/ai"
import { BsArrowUpRight } from "react-icons/bs"
import Likes from './Likes';

function App() {


  const [openLikes, setOpenLikes] = useState(false);
  const [likes, setLikes] = useState([]);



  const handleFetchRandomQuote = () => { }

  const setTodayQuote = () => { }

  const download = () => { }

  const share = () => { }

  const closeLikes = () => {
    setOpenLikes(false)
  }

  return (
    <div className="font-monteserat flex justify-center items-center">
      <div className=''>
        <h1 className='heading  text-center text-2xl mt-5  font-bold'>Random Quote Generator</h1>
        <div className='flex flex-col justify-center items-center'>
          <Likes likes={likes} open={openLikes} closeLikes={closeLikes} />
          <div>
            {/* add quote.image as backgroundImage of the div tag below */}
            <div className='p-5 m-5 h-80 w-96 text-white rounded-md relative border border-red-900' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507619920283-d30524d47533?ixlib=rb-1.2.1)", backgroundSize: "100% 100%", backgroundRepeat: "no-repeat" }}>
              <p className='text-sm my-5'>
                <FaQuoteLeft />
                Place quote quotation here
              </p>
              <p className='text-sm text-right'>Add quote author here</p>
              <p className='flex justify-start absolute bottom-3 w-full left-0'>
                <button className=' px-3 py-2 w-14  shadow ml-3 bg-white hover:text-gray-400  text-black font-bold flex justify-center' ><BsDownload /></button>
                <button className=' px-3 py-2 w-14 shadow ml-3 bg-white text-black hover:text-gray-400 font-bold flex justify-center'><FiShare2 /></button>
                <button className=' px-3 py-2 w-14 shadow ml-3 bg-white text-black hover:text-gray-400 font-bold flex justify-center'><SlHeart /></button>
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button className=' px-3 py-2 w-24 rounded-tl-3xl rounded-br-3xl shadow border bg-white hover:text-gray-400    text-black  flex justify-center'>Today</button>
          <button className=' px-3 py-2 w-24 rounded-tl-3xl rounded-br-3xl  shadow ml-5 border bg-white hover:text-gray-400   text-black flex justify-center'>Random</button>
        </div>
        <div className='flex flex-col justify-center items-center my-5'>
          <div className='text-slate-400 my-5 w-96'>
            <p className='quote'><i>"Place quote quotation here"</i></p>
            <p className='text-right'>Add quote author here</p>
          </div>
          <div className='my-5'>
            <p className='text-slate-400'>
              Images are from unsplash {"  "}
              <a href="https://images.unsplash.com/photo-1507619920283-d30524d47533?ixlib=rb-1.2.1" className='text-red-400' target="_blank" rel="noreferrer">See Image Here</a>
            </p>
          </div>
          <button onClick={() => { setOpenLikes(prev => !prev); }} className='px-3 py-2 w-fit  shadow ml-3 bg-white text-black hover:text-gray-400 font-bold flex justify-center items-center'>
            <span className=''>Liked Quotes</span><BsArrowUpRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;