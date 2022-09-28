import React from 'react'
const ProfileProgress = ({persentage = 0}) => {
  return (
    <div className='relative bg-gray-300 w-full h-[10px] border-gray-400 border'>
        <div style={{width : `${persentage}%`}} className='absolute transition-all duration-500 top-0 left-0 h-full bg-two rounded-full z-[1]'/>
    </div>
  )
}

export default ProfileProgress