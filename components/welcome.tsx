'use client';

import { useSession } from "next-auth/react";


function Welcome() {
  const { data: session } = useSession();

    return (
    <div>
      <div className="text-white pt-12 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-bold">
       <h1>Welcome,  {session && session?.user?.name}</h1>
       </div>

       <div className="text-white py-12 text-center text-sm sm:text-md md:text-lg lg:text-xl space-y-5 font-medium">
       <h1>What assistance can I provide for you today?</h1>
       </div>

    </div>
  );
}

export default Welcome