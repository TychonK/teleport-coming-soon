'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function Paperplane() {
    return (
        <motion.div
            className="fixed inset-0 z-0 flex justify-center items-center pointer-events-none dark:opacity-10 select-none"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 120,
              ease: "linear"
            }}
          >
        <Image src="/paper-plane-circle.png" alt="Circular planes" height={ 1000 } width={ 1000 } />
      </motion.div>
    )
}