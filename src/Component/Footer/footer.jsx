import React from 'react'

function Footer() {
  return (
<section id="Footer">
  <footer className="bg-gray-900 text-gray-300 py-6">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
      </div>
      <div className="flex justify-center mt-4 md:mt-0 space-x-6">
        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
          <svg
            fill="currentColor"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M22.46 6c-.77 3.42-3.2 5.79-6.12 7.18a12.6 12.6 0 01-8.35.88c-2.2-.52-4.27-1.54-5.94-3.03a8.4 8.4 0 001.2 1.07c2.13 1.75 4.87 2.79 7.7 3.18a12.84 12.84 0 0010.42-4.8 12.61 12.61 0 003.8-8.58 11.68 11.68 0 01-3.48 1.73z"></path>
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
          <svg
            fill="currentColor"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.66 4.41a4.41 4.41 0 00-6.22 0L12 7.85l-3.44-3.44a4.41 4.41 0 00-6.22 6.22L5.78 12l-3.44 3.44a4.41 4.41 0 006.22 6.22L12 16.15l3.44 3.44a4.41 4.41 0 006.22-6.22L18.22 12l3.44-3.44a4.41 4.41 0 000-6.22z"></path>
          </svg>
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
          <svg
            fill="currentColor"
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.18 20.23H3.85V9.04h3.33zm-1.67-12.81A1.9 1.9 0 113.61 5.5a1.9 1.9 0 012.9 1.92v.02h.01zm14.65 12.81h-3.33v-5.94c0-1.42-.5-2.39-1.76-2.39-.96 0-1.53.65-1.78 1.28-.09.21-.11.51-.11.81v6.23h-3.33v-8.7h3.33v1.23c.46-.71 1.29-1.74 3.14-1.74 2.29 0 4 1.5 4 4.72z"></path>
          </svg>
        </a>
      </div>
    </div>
    <div className="text-center mt-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
    </div>
  </footer>
</section>

  )
}

export default Footer