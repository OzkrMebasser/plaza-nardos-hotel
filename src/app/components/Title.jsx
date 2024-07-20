import React from 'react'

const Title = ({title}) => {
  return (
    <>
        <div className="max-w-2xl mx-auto text-center ">
          <h2 className="text-2xl font-light text-[#2b3163] sm:text-4xl sm:leading-tight">
           {title}
          </h2>
          
        </div>
    </>
  )
}

export default Title