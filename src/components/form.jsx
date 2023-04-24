import { useState, useEffect } from 'react'
import defaultMemeImg from '../assets/memeimg.png'

function Form(){
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    "topText":"Top Text", 
    "bottomText":"Bottom Text", 
    "randomImage":defaultMemeImg
  });

  useEffect(
    () => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
    }
  ,[])

  function handleChange(){
    const {name, value} = event.target;
    setMeme(prevData => (
      {
        ...prevData, 
        [name]: value
      }
    ))
  }
  function getMemeImg(){
    const i = Math.floor(Math.random() * allMemes.length);
    const memeUrl = allMemes[i].url;
    setMeme(prevMeme => (
      {
        ...prevMeme, 
        "randomImage":memeUrl
      }
    ));
  }
  return (
    <div>
      <div className=" px-32 py-16">
        <div className='grid grid-cols-2 items-center justify-stretch gap-5'>
          <input 
            className="border border-1.5 border-gray-400 rounded-md h-12 px-5" 
            type="text" 
            placeholder="Top Text"
            name='topText'
            value={meme.topText}
            onChange={handleChange}
            />
          <input 
            className="border border-gray-400 rounded-md h-12 px-5" 
            type="text" 
            placeholder="Bottom Text"
            name='bottomText'
            value={meme.bottomText}
            onChange={handleChange}/>
          <button 
            onClick={getMemeImg} 
            className="gradient-background border border-gray-400 rounded-md col-span-full h-12 marker: text-white font-black text-lg" 
            type="submit">
              Get a new meme image 🖼
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col relative">
        <span className='text-6xl font-black text-white font-outline-2 top-5 z-10 absolute'>{meme.topText}</span>
        <img className=' w-4/12' src={meme.randomImage} alt="meme"/>
        <span className='text-6xl -mt-20 text-white font-outline-2 z-10 bottom-5 font-black absolute'>{meme.bottomText}</span>
      </div>
    </div>

  )
}

export default Form
