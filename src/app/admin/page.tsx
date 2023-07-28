import Navbar from '@/components/Nav/Nav';
import React, { useEffect, useState } from "react";
import { getServerSession } from '@/lib/auth/authorization';
import { UserType } from '@/components/Nav/Nav';




export default async function ClientDashboard() {
  const session = await getServerSession();
  return (
    <div>
      <Navbar userType={UserType.Admin}/>        
      <div className="">
            {JSON.stringify(session, null, 2)}
          </div>  
    </div>
  );
}