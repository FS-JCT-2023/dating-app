import Navbar from '@/components/Nav/Nav';
import React, { useEffect, useState } from "react";
import { getServerSession } from 'next-auth';
import { UserType } from '@/components/Nav/Nav';



export default async function ClientDashboard() {
  const session = await getServerSession();
  return (
    <div>
      <Navbar userType={UserType.MatchMaker}/>    
      <div className="">
            {JSON.stringify(session, null, 2)}
          </div>      
    </div>
  );
}