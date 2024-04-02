import React, { useEffect,useState } from "react";
import Operators from "../operators.json"
import SearchBar from "../searchBar";
import Navbar from '../navbar'
import OperatorDetails from "../OperatorDetails/operatorDetails";
import axios from "axios";


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

const OperatorList = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [selectedOperator, setSelectedOperator] = useState(null);
    const parseJSON = Object.values(Operators)
    const [filter, setFilter] = useState([])
    const filterData = parseJSON.filter((op) => op.name.toLowerCase().includes(searchQuery.toLowerCase())).filter((op) => filter.length === 0 || filter.includes(op.class)).sort((a, b) => b.rarity - a.rarity)
    
    
    
    
    const handleOperatorClick = (operator) => {
        setSelectedOperator(operator);
    };

    const handleClosePopup = () => {
      setSelectedOperator(null);
    };

    const handleFilterByClass = (className) => {
        setFilter((prevFilter) => {
          if (prevFilter.includes(className)) {
            return prevFilter.filter((cls) => cls !== className);
          } else {
            return [...prevFilter, className];
          }
        });
    };
    


    return (

        <>
        <Navbar/>
        <div className="pt-32 grid md:grid-cols-6 content-center">
        <h1 className="text-white col-start-2 col-span-4 text-center pb-5 font-bold text-xl">Operator</h1>
        <div className="sm:col-start-3 col-span-2 row-span-2 md:col-start-2 md:col-span-1 text-lg">
        <SearchBar handleSearch={(query) => setSearchQuery(query)}/>
        <div className="col-start-2 col-span-3 flex gap-x-1">
            <button onClick={() => handleFilterByClass('Guard')}><img src="./classes/black/Guard.png" alt="guard" className="w-64"/></button>
            <button onClick={() => handleFilterByClass('Caster')}><img src="./classes/black/Caster.png" alt="caster" className="w-64"/></button>
            <button onClick={() => handleFilterByClass('Vanguard')}><img src="./classes/black/Vanguard.png" alt="vanguard" className="w-64"/></button>
            <button onClick={() => handleFilterByClass('Sniper')}><img src="./classes/black/Sniper.png" alt="sniper" className="w-64"/></button>
            <button onClick={() => handleFilterByClass('Medic')}><img src="./classes/black/Medic.png" alt="medic" className="w-64"/></button>
            <button onClick={() => handleFilterByClass('Specialist')}><img src="./classes/black/Specialist.png" alt="specialist" className="w-64"/></button>
            <button onClick={() => handleFilterByClass('Supporter')}><img src="./classes/black/Supporter.png" alt="supporter" className="w-64"/></button>
            <></>
          </div>
        </div>
            <div className=" pt-4 grid sm:grid-cols-6 md:grid-cols-10 col-start-2 col-span-4 overflow-hidden">
                {filterData.map((op) => (
                    <div key={op.id} className="cursor-pointer" onClick={() => handleOperatorClick(op)}>
                        <div className={`flex-wrap m-1 shadow-xl border-4 ${bgColor(op.rarity)} rounded`}>
                            <ul>
                                <div>
                                <img src={`./avatars/${op.id}.png`} alt={op.id}  className={`${bgColor(op.rarity)}`}/>
                                </div>
                                <div  className="text-center font-medium text-white text-bold text sm:text-xs md:text-lg">
                                <h1>{op.name}</h1>
                                </div>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {selectedOperator && (
        <OperatorDetails operator={selectedOperator} onClose={handleClosePopup} />
        )}
        </>
    )
}

export default OperatorList