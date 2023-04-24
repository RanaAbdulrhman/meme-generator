import trollFace from '../assets/trollFace.png'

function Header(){
  return (
    <div className='gradient-background flex items-center justify-stretch text-white py-6 px-10'>
      <img className='w-16' src={trollFace} alt='meme icon'/>
      <span className='text-2xl font-black ml-4'>Meme Generator</span>
      <span className='text-xl font-bold ml-auto'>React Course - Project 3</span>
    </div>
  )
}

export default Header
