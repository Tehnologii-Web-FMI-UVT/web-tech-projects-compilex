import { SessionProvider } from '@/components/Session-Provider'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'
import SideBar from '@/components/SideBar'



export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  
    const session = await getServerSession(authOptions)
  
    
    return (
        <main className="h-screen bg-[#111827] overflow-auto">
          <SessionProvider session={session}>
          {!session ?(
            <Login/>
  
          ):(
            <div className='flex'>
            <div className='bg-[#182236] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
              <SideBar/>
            </div>
              <div className="mx-auto max-w-screen-xl h-full w-full">
            {children}
              </div>
            </div>
            
          )}
          </SessionProvider>
        </main>
    );
  }