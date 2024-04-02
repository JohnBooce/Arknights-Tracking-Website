import React, { useState, useEffect } from 'react'
import Navbar from '../navbar'
import { auth } from '../config/firebase'
import { db } from '../config/firebase'
import { doc ,getDocs, collection,  getDoc } from 'firebase/firestore'
import Operators from "../operators.json"

function lookup() {
    const [OperatorCollection, setOperatorCollection] = useState([])
    const [query, setQuery] = useState("");
    const collectionRef = collection(db, 'user')

    const elite = (promotion) => {
        switch(promotion){
            case 0:
                return "./elite/0_s_box.png"
            case 1:
                return "./elite/1_s_box.png"
            case 2:
                return "./elite/2_s_box.png"
        }
    }

    const pot = (potencial) =>{
        switch(potencial){
          case 0:
              return "./potential/1.png"
          case 1:
              return "./potential/2.png"
          case 2:
              return "./potential/3.png"
          case 3:
              return "./potential/4.png"   
          case 4:
            return "./potential/5.png"
          case 5:
            return "./potential/6.png"        
      }
    }

    const bgColor = (rarity) => {
      switch(rarity){
          case 1:
              return "border-slate-400"
          case 2:
              return "border-lime-400"
          case 3:
              return "border-sky-400"
          case 4:
              return "border-fuchsia-300"
          case 5:
              return "border-yellow-400"
          case 6: 
              return "border-orange-600"
      }
  }

    const handleCodeRequest = async() =>{
        try {
          const data = await getDocs(collectionRef)
          const filter = data.docs.filter((doc) => doc.data().name == query).map(async(doc) => {
            const docData = doc.data();
            const subCollectionRef = collection(doc.ref, 'Collection')
            const subData = await getDocs(subCollectionRef)
            const subCollectionDocs = subData.docs.map((subDoc) => subDoc.data());

            return {
              ...docData,
              id: doc.id,
              collection: subCollectionDocs,
            };
          })

          const resolve = await Promise.all(filter)

          setOperatorCollection(resolve)
      
        } catch (error) {
          console.error(error)
        }
    } 

    useEffect(() => {
        handleCodeRequest()
      }, [query])

    console.log(OperatorCollection)
  return (
    <>
    <div>
        <Navbar/>
    </div>
        <div className='grid grid-cols-3 gap-y-10'>
            <h1 className="pt-32 text-white col-start-2 text-center font-bold text-xl">LookUp</h1>
            <h1 className='col-start-2 text-start text-base '>Search Username</h1>
            <div className='col-start-2 flex gap-x-10'>
            <input
              className="rounded text-base col-start-2 w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-white"
              type="text"
              placeholder="Example#1234..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => handleCodeRequest()} className='rounded text-sm text-white w-1/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none hover:ring hover:border-blue-500'> Search</button>
            </div>
        </div>
        {
            OperatorCollection ? 
            <div>
            <div className='grid grid-cols-3 gap-y-10'>
            <h1 className='pt-16 col-start-2 text-center text-xl '>Result:</h1>
            {OperatorCollection.map((doctor) => (
                <div key={doctor.id} className='col-start-2  border flex m-5 '>
                    <img src={`./avatars/${doctor.assistant}.png`} alt={doctor.assistant} className='m-5'/>
                    <div className='py-3'>
                    <h1 className='text-xl font-bold text-white'>Name: {doctor.name}</h1>
                    <h1 className='text-base font-bold text-white'>UID: {doctor.uid}</h1>
                    <h1 className='text-base font-bold text-white'>Level: {doctor.level}</h1>
                    <h1 className='text-base font-bold text-white'>Total Operator: {doctor.total}</h1>
                    <h1 className='text-base font-bold text-white'>Date: {doctor.start}</h1>
                    </div>
                </div>
            ))}
            </div>
            {OperatorCollection.map((doctor) => (
                <div key={doctor.id} className='grid grid-cols-8 col-start-2  flex px-4 py-4 m-5 bg-zinc-900'>
                    {doctor.collection.map((operator) => (
                        <div key={operator.id} className=' m-2  '>
                            <div className='flex pl-3 pt-1 items-center'>
                              <div className='flex'>
                                  <img src={`${elite(operator.promotion)}`} alt={operator.promotion}/>
                              </div>
                              <div className='z-10 w-14 h-14 border border-2 border-amber-400 rounded-full flex items-center justify-center'>
                                  <h1 className='text-center text-base bg-transparent'>{operator.level}</h1>
                              </div>
                              <div className='flex pl-2'>
                                <img src={`${pot(operator.potencials)}`} alt={operator.potencials} className='w-12 h-12 border boder-2 boder-slate-400'/>
                              </div>
                            </div>

                            <div className={`m-2 border-b-8 ${ Object.keys(Operators).includes(operator.id) ? bgColor(Operators[operator.id].rarity): null} grid place-items-center`}>
                                <div className='flex items-center justify-center'>
                                    <img key={operator.id} src={`./avatars/${operator.id}.png`} alt={operator.id}/>
                                </div>
                            </div>

                            <div className='m-2 grid place-items-center'>
                              <div className='flex gap-2'>
                              {operator.Mastery.map((skill) => (
                                <div key={skill.id} className='flex'>
                                    {
                                      skill.masteryLevel === 0 ?
                                          <div className='flex items-center justify-center'>
                                              <img src={`./rank/${operator.skillLevel}.png`} alt={skill.id} className='z-20 w-12 h-12 bg-transparent'/>
                                              <img src='./rank/bg.png' alt={skill.id} className='z-10 w-12 h-12 absolute'/>
                                          </div> 
                                        : 
                                        <div className='flex items-center justify-center'>
                                          <img src={`./rank/m-${skill.masteryLevel}.png`} alt={skill.id} className='z-20 w-12 h-12 bg-transparent'/>
                                          <img src='./rank/bg.png' alt={skill.id} className='z-0 w-12 h-12 absolute'/>
                                        </div> 
                                    }
                                </div>
                              ))}
                            </div>
                            </div>


                            <div>
                            </div>
                            </div>

                    ))}
              </div>
            ))}
            </div>
            : 
            
            null

        }


    </>
  )
}

export default lookup