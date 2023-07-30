import { UserSession } from '@/types'
import React from 'react'

type MMProfileProps = UserSession

function MMProfile({user}: MMProfileProps) {
  return (
    <div>{JSON.stringify(user)}</div>
  )
}

export default MMProfile