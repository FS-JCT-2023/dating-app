import Navbar from '@/components/Nav/Nav';
import React, { useEffect, useState } from "react";
import { getServerSession } from 'next-auth';
import { UserType } from '@/components/Nav/Nav';


function getRole(session:any)
{
  switch (session?.user?.role) {
    case 'CLIENT':
      return UserType.Client;
      
    case 'MATCHMAKER':
      return UserType.MatchMaker;
      
    case 'ADMIN':
      return  UserType.Admin;
      
    default:
      return UserType.Client;
  }
}

export default async function ClientDashboard() {
  const session = await getServerSession();
  return (
    <div>
      <Navbar userType={getRole(session)}/>        
    </div>
  );
}
