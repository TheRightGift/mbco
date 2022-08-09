import React from 'react'
import AdminHero from '../aboutpagelayout/AdminHero'
import AdminChat from './AdminChat'
import Adminposts from './Adminposts'


const AdminContent = () => {
  return (
    <main className="admin-content">
      <div className="">
        <AdminHero />
        <AdminChat />
        <Adminposts />
      </div>
      
    </main>
  )
}

export default AdminContent