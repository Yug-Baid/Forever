import React from 'react'

const Title = ({text1,text2}) => {
  return (
        <div className='inline-flex items-center gap-3'>
            <p className='text-4xl' style={{color:"gray"}}>{text1}</p>
            <p className='text-4xl'>{text2}</p>
             <div className='h-0.5 w-11 bg-[#414141]'></div>
        </div>
  )
}

export default Title