import React, { useEffect } from 'react'
import {PouchDB} from './PouchDB'


export default function App() {
  useEffect(() => {
    PouchDB()
  },[])
  return (
    <div>
    <h1>Hello World...!</h1>
    </div>
  )
}
