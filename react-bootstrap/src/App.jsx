import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div className='container'>
      <div className="row mt-3 py-3">
        <div className="col-md-12">
          <h2>Home Page</h2>
        </div>
      </div>
      <div className="row">
        {data.map((user) => (
          <div key={user.id} className='col-md-4 p-3'>
            <div className='border rounded shadow p-3'>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
