'use client'

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Button } from "./ui/button";


function NewChat() {
  
  const router = useRouter();
  const {data : session} = useSession();
  const createNewChat = async() =>{
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'),{
        userId: session?.user?.email!,
        createdAt: serverTimestamp()
      } 
      );

      router.push(`/chat/${doc.id}`);

  }

  return (
    
      <Button onClick={createNewChat} variant={"compilex"} className="w-full mt-5 mb-10">
        NewChat
      </Button>
  )
}

export default NewChat