import React from 'react'
import Navbar from './navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='pt-32'>
        <div className='grid grid-cols-6'>
          <div className='col-start-2 col-span-4'>
            <h1 className='pb-32 font-bold text-center text-2xl'>Arknights Account Tracking</h1>
            <div class='border-4 border-white'></div>
          </div>

            <div className='col-start-2 col-span-4'>
              <h1 className='pt-16 font-bold text-start text-xl'>What is Arknights Account Tracking </h1>
            </div>
            <div className='pt-5 col-start-2 col-span-2'>
              <h1 className='pl-10 font-bold text-start text-base'>Arknights Account Tracking is a Web Application that allow </h1>
              <h1 className='pb-32 font-bold text-start text-base'>you to Import In-game Data Directly! Without Opening Arknights Application. Not Only that! you can share your Data's Collection either for flexing or helping other player by sharing your most OP's operator to that player.</h1>
            </div>
            <div className='col-start-4 col-span-2 m-2 h-1/2 flex items-center justify-center'>
              <div className='border-2 bg-black '>
              <img src={'./Home/sample1.png'} alt={'sample1.png'} />
              </div>
            </div>

          <div class='col-start-2 col-span-4 border-4 border-white'></div>
          <div className='col-start-4 col-span-2'>
              <h1 className='pt-16 font-bold text-end text-xl'>Why do you Need This?</h1>
            </div>
            <div className='col-start-2 col-span-2 m-6 h-1/2 flex items-center justify-center'>
              <div className='border-2 bg-black '>
              <img src={'./Home/sample3.png'} alt={'sample3.png'} />
              </div>
            </div>
          <div className='pt-5 col-start-4 col-span-2'>
              <h1 className='pl-10 font-bold text-start text-base'>In Arknights. You have One-Way to share your Information</h1>
              <h1 className='pb-32 font-bold text-start text-base'>by Sharing your 3 Operators as a Support-Unit for other player to use also when you need the specific support-unit. you might not be able to get what you need. Perhaps you might find one but not in the requirement. That's why you'll need this.</h1>
          </div>

          <div class='col-start-2 col-span-4 border-4 border-white'></div>
          <div className='col-start-2 col-span-4'>
              <h1 className='pt-16 font-bold text-start text-xl'>What service do we Provided?</h1>
            </div>
          <div className='pt-5 col-start-2 col-span-2'>
              <h1 className='pl-10  font-bold text-start text-base'>Import In-game Data</h1>
                <h1 className='pl-20 pt-5 font-bold text-start text-lg'>1. You need to Sign-in/Login by go to Menu {'>'} Login or Sign In </h1>
                <h1 className='pl-20 font-bold text-start text-lg'>2. After you Sign-In/Login. You can import your data by Menu {'>'} Import </h1>
                <h1 className='pl-20 font-bold text-start text-lg'>3. After you Import your data. You can check your data by Menu {'>'} Profile </h1>
                <h1 className='pl-20 pt-5 font-bold text-start text-lg'>** Note that right now. it's only available in EN Server. **</h1>
              
              <h1 className='pt-5 pl-10 font-bold text-start text-base'>Lookup other user</h1>
              <h1 className='pl-20 pt-5 font-bold text-start text-lg'>You can check other user that share the Information by Menu {'>'} LookUp then </h1>
              <h1 className='pl-10 font-bold text-start text-lg'>type-in the name of that user to find what you're' looking for.</h1>

              <h1 className='pt-5 pl-10 font-bold text-start text-base'>Lookup for specific Operator</h1>
              <h1 className='pl-20 pt-5 font-bold text-start text-lg'>by Menu {'>'} Operator then you search/lookup for specific operator for the </h1>
              <h1 className='pl-10 font-bold text-start text-lg'>details. also to look for more details you can go to Full-Deatails Section of each Operator.</h1>
          </div>
          <div className='col-start-4 col-span-2 m-6 h-4/5 flex items-center justify-center'>
              <div className='border-2 bg-black '>
              <img src={'./Home/sample2.png'} alt={'sample2.png'} />
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home