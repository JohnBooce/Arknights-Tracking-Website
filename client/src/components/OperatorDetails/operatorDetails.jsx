import React, {useEffect, useState} from 'react'
import './operatorDetails.css'
import OperatorStars from './operatorRarity'
import axios  from 'axios'
import Operators from '../operators.json'

const bgColor = (rarity) => {
    switch(rarity){
        case 1:
            return "bg-slate-400"
        case 2:
            return "bg-lime-400"
        case 3:
            return "bg-sky-400"
        case 4:
            return "bg-fuchsia-300"
        case 5:
            return "bg-yellow-400"
        case 6: 
            return "bg-orange-600"
    }
}



function operatorDetails({operator, onClose}) {

    const [operatorData, setOperatorData] = useState('')
    const [operatorArt, setOperatorArt] = useState('')
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const [ranges, setRanges] = useState([]);



    useEffect(() => {
        let abortController = new AbortController();
    
        const loadOp = async () => {
            try{
                setLoading(true);
                let response = await axios.get(`https://api.rhodesapi.com/api/operator/${operator.name}`, {
                    signal:abortController.signal
                })

                setOperatorData(response.data)
                setError("");
            }catch(error){
                setError("not found",error)
            }finally{
                setLoading(false)
            }
        }

        const loadArt = async () => {
            try{
                setLoading(true);
                let response = await axios.get(`https://api.rhodesapi.com/api/art/${operator.name}?e2=true`, {
                    signal:abortController.signal
                })

                setOperatorArt(response.data)
                setError("");
            }catch(error){
                setError("not found",error)
            }finally{
                setLoading(false)
            }
        }
    
        loadOp();
        loadArt();
        return () => abortController.abort();
    }, [])

    const openLinkInNewTab = (url) => {
        window.open(url, '_blank');
    }

    const loadRange = (operator) =>{
        setRanges(operator.range)
    }

  return (
    <div className='popup'>
        <div className='popup-content'>
            <ul className='wrapper h-full  '>
                <div className='flex'>
                <img className={`${bgColor(operator.rarity)} flex w-1/2 h-1/2 m-5`} src={operatorArt.originalLink} alt={operatorArt.name}/>
                <div className='w-2  border-white bg-white pt-5 mr-5'></div>

                <div className=' pt-5'>
                    <div className='flex '>
                        <img className=" rounded-xl w-1/5" src={`./classes/black/${operator.class}.png`} alt={`${operator.id}`}/>
                        <div className=' py-5'><OperatorStars rarity={operatorData.rarity} /></div>
                    </div>

                    <div className='border-b-2'>
                        <h1 className='text-2xl '>{operator.name}</h1>
                    </div>
                        <h1 className='text-base'>description:</h1>
                        <div className='px-5 pt-1.5 '>
                        <div className='text-lg bg-black'>
                            <h1>gender: {operatorData?.lore?.gender}</h1>
                            <h1>place of birth: {operatorData?.lore?.place_of_birth}</h1>
                            <h1>birthday: {operatorData?.lore?.birthday}</h1>
                            <h1>race: {operatorData?.lore?.race}</h1>
                            <h1>Combat Experience: {operatorData?.lore?.combat_experience}</h1>
                            <h1>height: {operatorData?.lore?.height}</h1>
                        </div>
                    </div>

                    <div className='pt-2 border-2 border-white text-base text-white cursor-pointer' onClick={() => loadRange(operatorData)}>Attack-Range (Press to show) </div>
                    <div className="grid grid-cols-3 gap-x-3" >
                        {ranges?.map((eliteData, eliteIndex) => (
                          <div key={eliteIndex}>
                            <h2 className='text-white'>{eliteData.elite == "Base" ? "E0" : eliteData.elite}</h2>
                            <div className="grid grid-cols-3">
                              {eliteData.range.flat().map((cell, cellIndex) => (
                                    <div
                                      key={cellIndex}
                                      className={`w-12 h-12 border border-gray-400 ${
                                        cell === "attackable" ? "bg-blue-500" : 
                                        cell === "unit" ? "bg-blue-600" :
                                        "bg-red-500"
                                      }`}
                                    >
                                      {/* You can customize the colors based on your logic */}
                                    </div>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                    <div className='pt-5 border-2 border-white flex'>
                        <h1 className='text-base m-2'>Skill:</h1>
                        <div>
                            {Object.values(Operators).filter((uid) => uid.name == operatorData.name).map((op, idx) => (
                                <div key={idx}>
                                    {op.skills.map((skill, skillidx) => (
                                        <div key={skillidx} className='flex border-2'>
                                            <img src={`./skills/${skill.skillId}.png`} alt={skill.skillId} className='w-1/3'/>
                                            <h1 className='place-self-center pl-2 text-center'>{skill.skillName}</h1>
                                        </div>
                                    ))}
                                </div>

                            ))}
                        </div>

                    </div>


                </div>





                <button className='close flex text-end' onClick={onClose}>
                <span className='material-symbols-outlined'> close</span>
                </button>
                </div>
                

            </ul>
        </div>
    </div>
  )
}

export default operatorDetails