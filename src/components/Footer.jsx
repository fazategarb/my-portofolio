import React from 'react'

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-center text-white mx-auto max-w-2xl">
      <p>© {new Date().getFullYear()} FazaDX. All rights reserved.</p>
    </footer>
  )
}

export default Footer