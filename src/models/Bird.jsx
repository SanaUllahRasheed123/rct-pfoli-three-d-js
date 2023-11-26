import { useGLTF } from '@react-three/drei'
import React from 'react'

const Bird = () => {
    const {scene,animations} = useGLTF
  return (
   <mesh>
    <primitive/>
   </mesh>
  )
}

export default Bird