import { SessionProvider } from '@/components/Session-Provider'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'



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
            <div className="mx-auto max-w-screen-xl h-full w-full">
            {children}
            
        </div>
          )}
          </SessionProvider>
        </main>
    );
  }