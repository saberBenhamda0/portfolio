/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 glasses.gltf 
Author: Marius.Eder (https://sketchfab.com/Marius.Eder)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/glasses-007651a9450746a5b6c5a126d484cd52
Title: Glasses
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/desktop_pc/glasses.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.9}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_5.geometry} material={materials.Frame} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.Handles} />
          <mesh geometry={nodes.Object_9.geometry} material={materials['Frame.1']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/glasses.gltf')
