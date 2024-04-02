import React from 'react'
import Navbar from '../navbar'

function guide() {
  return (
    <div>
        <Navbar/>
        <div className='pt-32'>
        <div className='grid grid-cols-6'>
          <div className='col-start-2 col-span-4'>
            <h1 className='pb-32 font-bold text-center text-2xl'>Arknights Introduction Guide</h1>
            <div class='border-4 border-white'></div>
          </div>

            <div className='col-start-2 col-span-4'>
              <h1 className='pt-16 font-bold text-center text-2xl text-yellow-300'>Welcome to Arknights! </h1>
              <div className='pt-5 col-start-2 col-span-2'>
              <h1 className='pb-32 font-bold text-center text-base'>   Arknights is a tactical role-playing mobile game developed by Hypergryph and published by Yostar. The game combines tower defense elements with traditional RPG mechanics, creating a unique and engaging experience. As a Doctor, your mission is to lead a team of Operators and defend against various threats in the dystopian world of Terra.</h1>
            </div>

            </div>
            
          <div class='col-start-2 col-span-4 border-4 border-white'></div>
          <div className='col-start-2 col-span-4'>
              <h1 className='pt-16 font-bold text-center text-xl text-yellow-300'>Key Features:</h1>
            </div>
          <div className='pt-20 col-start-2 col-span-3 flex'>
                <div className=''>
                <h1 className='font-bold text-center text-xl text-yellow-200'>Operators</h1>
                <h1 className='pb-16 font-bold text-start text-base'>Operators are the characters you deploy in battles. <br/>Each Operator has a unique class, skills, and stats. <br/>Collect and upgrade Operators to build a diverse and powerful team.</h1>
                <img src='./Home/1.png' className='w-full h-1/2 '/>
                </div>
          </div>
          <div className='col-start-3 col-span-2 bg-transparent flex'>
              <div className=''>
              <h1 className='font-bold text-center text-xl text-yellow-200'>Base Building</h1>
              <h1 className='pb-16 font-bold text-center text-base'>Manage your own facility, Rhodes Island, <br/>where you can produce resources, recruit new Operators, and enhance your team. <br/>Upgrade and expand your base to unlock more features and benefits</h1>
              <img src='./Home/2.png' className='w-full h-1/2 '/>
              </div>
          </div>
          <div className='pt-20 col-start-4 col-span-2 bg-transparent'>
          <div className=''>
              <h1 className='font-bold text-end text-xl text-yellow-200'>Tactical Gameplay</h1>
              <h1 className='pb-16 font-bold text-end text-base'>Engage in tactical battles where you strategically deploy Operators to fend off waves of enemies.<br/>Each Operator has a specific role (e.g., Defender, Sniper, Medic) with strengths and weaknesses.</h1>
              <img src='./Home/3.png' className='w-full h-1/2  self-end'/>
              </div>          
          </div>
          <div className='pt-20 col-start-3 col-span-2 bg-transparent'>
            <div className=''>
              <h1 className='font-bold text-center text-xl text-yellow-200'>Storyline</h1>
              <h1 className='pb-16 font-bold text-center text-base'>Explore the rich narrative of Arknights as you uncover the mysteries of the infected world.<br/>Encounter memorable characters and make decisions that impact the game's storyline.</h1>
              <img src='./Home/4.png' className='w-full h-1/2 '/>
              </div>  
          </div>
          <div className='pt-20 col-start-2 col-span-3 '>
          <div className=''>
                <h1 className='font-bold text-center text-xl text-yellow-200'>Challenging Levels</h1>
                <h1 className='pb-16 font-bold text-start text-base'>Progress through a variety of levels, each presenting unique challenges and enemies.<br/>Master the art of strategic deployment to overcome difficult stages.</h1>
                <img src='./Home/5.png' className='w-full h-1/2 '/>
                </div>  
          </div>
          
        </div>
    </div>
    </div>
  )
}

export default guide