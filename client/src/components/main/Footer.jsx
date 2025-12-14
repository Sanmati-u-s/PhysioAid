import React from 'react'


export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-gray-100 border-t border-gray-200 mt-auto'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Brand */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg'>
              <img src='/images/logo.webp' alt='Physio Aid Logo' className='w-6 h-6 object-contain rounded bg-white' style={{ background: 'transparent' }} />
            </div>
            <span className='text-lg font-semibold text-gray-900'>Physio Aid</span>
          </div>

          {/* Copyright */}
          <p className='text-sm text-gray-600'>
            &copy; {currentYear} Physio Aid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
