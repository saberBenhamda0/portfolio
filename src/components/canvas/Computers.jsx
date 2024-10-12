import React, { useRef } from 'react'

import { Suspense, useEffect, useState } from 'react'
import {Canvas} from "@react-three/fiber"
import {  Preload } from "@react-three/drei"

import { useFrame } from '@react-three/fiber'

import Glasses  from '../../../public/desktop_pc/Glasses'

import CanvasLoader from "../Loader"

const Computers = () => {
  const ref = useRef()

  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const positionY = window.pageYOffset
    setScrollPosition(positionY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Update model position and rotation based on scroll position
  useFrame((state, delta)=> {
    // ref.current.position.z += (Math.sin(state.clock.elapsedTime) ) / 2
    ref.current.rotation.y = scrollPosition / 120
   ref.current.position.z = scrollPosition / 78
   ref.current.position.y = -scrollPosition / 1000
  ref.current.rotation.x = -scrollPosition / 800
 
   })

  // Handle screen width for responsiveness
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const isMobile = width <= 768


  return (
    <mesh
    className="absolute z-20"
    scale={ isMobile ? 1.5 : 2.5}
    position={ [0, 0 ,1] }
     ref={ref}>


      <Glasses  />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
