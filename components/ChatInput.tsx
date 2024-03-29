'use client'

import { db } from "@/firebase"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import toast from "react-hot-toast"

type Props = {
    chatId: string
}


function ChatInput({chatId}:Props) {
  const [prompt, setPrompt] = useState("");
  const {data: session} = useSession();

    const model = "gpt-3.5-turbo"

  const sendMessage = async (e: FormEvent<HTMLFormElement>) =>{

    e.preventDefault()
    if(!prompt) return;

    const input = prompt.trim();
    setPrompt("");


    const message: Message = {
        text: input,
        createdAt: serverTimestamp(),
        user: {
            _id: session?.user?.email!,
            name: session?.user?.name!,
            avatar: session?.user?.image!,
        }
    }

    await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
    message
    );

    const notification = toast.loading('CompileX is thinking...');

    await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: input, 
            chatId, 
            model, 
            session,
        }),
    }).then(()=>{
        toast.success('CompileX has responded!',
        {id: notification,
        });
    });


  };
  
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm focus:outline-none">
        
        <form 
        onSubmit={sendMessage}
        className="p-5 space-x-5 flex">
            <input
            className="bg-transparent focus:outline-none flex-1 disabled:cursnor-not-allowed"
            value={prompt}
            type="text"
            placeholder="Type your message here..."
            onChange={(e) => setPrompt(e.target.value)}
            >


            </input>
            <button 
            disabled ={!prompt}
            type="submit"
                className="disabled:bg-gray-300 disabled:cursor-not-allowed bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded" >
                    <PaperAirplaneIcon className="h-4 w-4 -rotate-45"/>
                </button>
        </form>


    </div>
  )
}

export default ChatInput