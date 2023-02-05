import './App.css'
import {useEffect} from 'react'
import axios from 'axios'

const siteApi = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true
  // Origin: 'http://test.com:5173'
})

function App() {
  useEffect(() => {
    siteApi('/').then((res) => console.log({res}))
  }, [])

  return <div className='App'></div>
}

export default App
