import { UserSession } from '@/types'
import React from 'react'

type AdminProfileProps = UserSession

function AdminProfile({user}: AdminProfileProps) {
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default AdminProfile