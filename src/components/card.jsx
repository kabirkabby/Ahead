import React from 'react'

const Card = (props) => {
  return (

        <div className={`inline-block w-2/6 h-48 p-6 flex-shrink-0 border ${props.className} border-gray-200 rounded-xl hover:shadow-xl transition-shadow duration-300 ease-in-out `}>
            
            <h5 className="mb-2 text-l font-bold tracking-tight text-black">{props.title}</h5>
            <p className="font-normal text-sm text-black">{props.paragraph}</p>
        </div>

  )
}

export default Card