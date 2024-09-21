import React from 'react'

const SubTitle = ({title}) => {
  return (
    <>
        <div className="max-w-2xl mx-auto text-center uppercase ">
          <h4 className="text-[1rem] lg:text-[1.5rem] font-light text-[#2b3163] leading-tight">
           {title}
          </h4>
          
        </div>
    </>
  )
}

export default SubTitle;