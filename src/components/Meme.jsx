

function Meme(){
  return (
    <div className="flex justify-center items-center flex-col">
      <span className='text-6xl font-black text-white font-outline-2 -mb-20 z-10'>Shut Up</span>
      <img className='w-3/6' src={memeImg} alt="meme"/>
      <span className='text-6xl -mt-20 text-white font-outline-2 -mb-20 z-10 font-black'>AND TAKE MY MONEY</span>
    </div>
  )
}

export default Meme
