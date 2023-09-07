import React from 'react'
import { motion } from 'framer-motion'





const Info = () => {
  return (
    <>
        <section class="container bg-[#ffffff] p-6 mx-auto space-y-3">



  <motion.h4 initial={{
                  opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                  transition={{
                    delay: 1,
                  }} class="text-xl font-bold text-gray-500  capitalize font-handjet md:text-3xl text-center"> Tools</motion.h4>
  <motion.p initial={{
                  opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                  transition={{
                    delay: 1,
                  }} class="text-center text-gray-500 font-handjet">Tools will help you get things done in less time.</motion.p>

<div class="flex pt-[250px] items-center justify-center">
    
    <div class="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        <div class="w-full max-w-xs text-center">

            <a  href="/home" >
                <motion.div 
                initial={{
                  opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                  transition={{
                    delay: 0.5,
                  }}
                    class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-[#ffffff] drop-shadow-xl border-4 hover:bg-blue-200 border-blue-200">
                    <div class="py-16 px-4">
                        <h5 class="text-lg font-bold font-handjet text-gray-500 t">Static Page</h5>
                        <span class="mt-1 font-medium text-gray-500 font-handjet">Landing Page</span>
                    </div>
                </motion.div>
            </a>
        </div>

        <div class="w-full max-w-xs text-center">
            <a href="/dash" >
                <motion.div 
                initial={{
                  opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                  transition={{
                    delay: 1.5
                  }}
                    class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-[#ffffff] drop-shadow-xl border-4 hover:bg-red-200 border-red-200">
                    <div class="py-16 px-4">
                        <h5 class="text-lg font-bold text-gray-500 font-handjet">Dashboard</h5>
                        <span class="mt-1 font-medium text-gray-500 font-handjet">Account Page</span>

                    </div>
                </motion.div>
            </a>
        </div>

        <div class="w-full max-w-xs text-center">
            <a href="/service" >
                <motion.div 
                initial={{
                  opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                  transition={{
                    delay: 2
                  }}
                  class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-[#ffffff] drop-shadow-xl border-4 hover:bg-yellow-200 border-yellow-200">
                    <div class="py-16 px-4">
                        <h5 class="text-lg font-bold text-gray-500 font-handjet">Blog Page</h5>
                        <span class="mt-1 font-medium text-gray-500 font-handjet">News Page</span>
                    </div>
                </motion.div>
            </a>
        </div>


        <div class="w-full max-w-xs text-center">
            <a href="/care" >
                <motion.div 
                initial={{
                  opacity: 0,
              }}
                animate={{
                  opacity: 1,
                }}
                  transition={{
                    delay: 2.5
                  }}
                    class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-[#ffffff] drop-shadow-xl border-4 hover:bg-green-200 border-green-200">
                    <div class="py-16 px-4">
                        <h5 class="text-lg font-bold text-gray-500 font-handjet">Customer Care</h5>
                        <span class="mt-1 font-medium text-gray-500 font-handjet">Useful websites collection</span>
                    </div>
                </motion.div>
            </a>
        </div>


        
        



    </div>
</div>
</section>
    </>
  )
}

export default Info