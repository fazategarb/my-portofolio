import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 bg-[#161a1d] text-center text-white mx-auto max-w-2xl fixed bottom-0 left-0 right-0 z-10">
      <p className='text-sm'>© {new Date().getFullYear()} fazategarb in <span className='text-[#f5b642]'><a href="https://github.com/fazategarb" target='_blank'>Github</a></span>. All rights reserved.</p>
    </footer>
  )
}

export default Footer