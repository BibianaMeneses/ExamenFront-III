import React from 'react'
import UserList from '../components/UserList'

const Home = () => {
  return (
    <main className='body' >
      <h1 className="text-4xl font-bold pt-7">Página Principal</h1>
      <div className='card-grid'>
        <UserList />
      </div>
    </main>
  )
}

export default Home