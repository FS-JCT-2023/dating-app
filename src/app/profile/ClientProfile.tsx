import { UserSession } from '@/types'
import React from 'react'

type ClientProfileProps = UserSession

function ClientProfile({user}: ClientProfileProps) {
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default ClientProfile
