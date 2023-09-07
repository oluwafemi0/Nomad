import React from 'react'

const Navbar = () => {
  return (
    <>
        <div class="fixed top-0  left-0 w-full z-50 bg-[#000000] ">
        <div class="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
            <div class="relative flex h-16 justify-between">
                <div class="flex flex-1 items-stretch justify-start">
                    <a class="flex flex-shrink-0 text-[#fff] text-xl font-bold tracking-wide uppercase items-center" href="/">
                        Tools.
                    </a>
                </div>
                <div class="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
                    <a class="text-[#ffffff] bg-[#dadbf1]  inline-flex items-center justify-center px-8 py-2 border rounded-sm border-[#dadbf1] text-sm font-medium  shadow-sm "
                        href="#">Login
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar