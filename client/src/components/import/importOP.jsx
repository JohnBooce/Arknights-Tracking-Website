import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import { db } from '../config/firebase'
import { doc ,getDocs, collection, setDoc } from 'firebase/firestore'
import { auth } from '../config/firebase';
import Operators from "../operators.json"
import { data } from 'autoprefixer'

function importOP() {
  const [operatorColl, setOperatorCollection] = useState([]);
  const [email, setEmail] = useState("")
  const [otp, setOTP] = useState("")
  const [status, setStatus] = useState("")
  const [importData, setImportData] = useState(null)
  const [importStatus, setImportStatus] = useState("")



  const collectionRef = collection(db, 'user')
  
  const handleCodeRequest = async() => {
    try {
      const respone = await fetch(`http://127.0.0.1:5000/code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (respone.ok){
        const res = await respone.text()
        setStatus(res)
      }else{
        console.error('Failed to send login request')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleImport = async() => {
    try {
      const respone = await fetch(`http://127.0.0.1:5000/importData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          verificationCode: otp,
        }),
      });

      if (respone.ok){
        const res = await respone.json()
        setImportData(res)
        setImportStatus(true)
      }

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getCollection = async() =>{
      try {
        const data = await getDocs(collectionRef)
        const filter = data.docs.map(async(doc) => {
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

    getCollection()
  }, [])

  console.log(operatorColl)

  const addCollection = async() => {
    try {
      const mainDoc = doc(db, 'user', auth.currentUser.uid);

      await setDoc(mainDoc, {
        id: auth.currentUser.uid,
        assistant: importData.Assistant,
        uid: importData.UID,
        name: importData.Name ,
        level: importData.Level,
        total: importData.total,
        start: importData.Hired,
      });

      await Promise.all(
        importData.Collection.map(async(operator) =>{
          const subDoc = doc(db, `user/${auth.currentUser.uid}/Collection`, operator.id)
          await setDoc(subDoc, {
            id: operator.id,
            promotion: operator.promotion,
            level: operator.level,
            potencials: operator.potencials,
            skillLevel: operator.skillLevel,
            Mastery: operator.mastery,
          })
        }
        )
      )
      
    } catch (error) {
      console.error(error)
      setImportData(error)
    }
  }


  return (
    <div>
        <Navbar/> 
        <div className='grid grid-cols-3 gap-y-10'>
            <h1 className="pt-32 text-white col-start-2 text-center font-bold text-xl">Import In-game Data</h1>
            <h1 className='col-start-2 text-start text-base '>In-game Username</h1>
            <div className='col-start-2 flex gap-x-10'>
            <input
              className="rounded text-base col-start-2 w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-white"
              type="text"
              placeholder="Yostar Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={() => handleCodeRequest()} className='rounded text-sm text-white w-1/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none hover:ring hover:border-blue-500'> Send Code</button>
            </div>
            <div className='flex col-start-2'>
            <input
              className="rounded text-base w-2/3  px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 bg-white"
              type="text"
              placeholder="Verification Code..." 
              onChange={(e) => setOTP(e.target.value)}
            />
           
            </div>

            <div className='col-start-2'>
              <div className='text-center '><button className='rounded text-sm text-white w-1/5 h-16 px-4 py-2 border border-gray-300 rounded-md focus:outline-none hover:ring hover:border-blue-500' onClick={() => handleImport()}> Import </button></div>
            </div>
            { status ? 
            <div className='col-start-2'>
              <h1 className='text-white text-center text-sm'>{status}</h1>
            </div>: null}
              { importStatus ?             
              <div className='col-start-2'>
                <h1 className='text-white text-center text-base'> Successfully import! <br/><button onClick={() => addCollection()}>Press here to add to the account</button></h1>
              </div>: 
              <div className='col-start-2'>
              <h1 className='text-white text-center text-base'>{importStatus}</h1>
              </div>
              
              }

            

        </div>

    </div>
  )
}

export default importOP

/*<div className='col-start-2'>
 {operatorColl.map((op) => (
  <div key={op.id} className='block'>
    <h1>{op.name}</h1>
    {op.collection.map((detail) => (
      <div key={detail.id}>
        <h1>{detail.Name}</h1>
        <h1>{detail.Class}</h1>
      </div>
    ))}
</div>
 ))}
</div>*/