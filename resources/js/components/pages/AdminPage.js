import React from 'react'
import AdminSidenav from '../layout/adminlayout/AdminSidenav'
import AdminContent from '../layout/adminlayout/AdminContent'
import Adminleftbar from '../layout/adminlayout/Adminleftbar'

const AdminPage = () => {
  return (
    <section className='admin'>
     <AdminSidenav />
     <AdminContent />
     <Adminleftbar />
     
    </section>
  )
}

export default AdminPage