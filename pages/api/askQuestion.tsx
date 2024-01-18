import query from '@/lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from "firebase-admin";
import { adminDb } from '@/firebaseAdmin';

type Data ={
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {prompt, chatId, model, session} = req.body;

    if(!prompt){
        res.status(400).json({answer: "Please provide a prompt!"});
        return;
    }

    if(!chatId){
        res.status(400).json({answer: "Please provide a valid chat ID!"});
        return;
    }

    const response = await query(prompt, chatId, model);

    // Check the type of the response
    let messageText: string;
    if (typeof response === 'string') {
        messageText = response;
    } else if (response && response.choices && response.choices.length > 0) {
        messageText = response.choices[0].message.content || "No response text available";
    } else {
        messageText = "CompileX was unable to find an answer for that!";
    }

    const message: Message = {
        text: messageText,
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: "CompileX",
            name: "CompileX",
            avatar: "https://i.imgur.com/2fZ1L4G.jpeg",
        },
    };

    await adminDb.collection("users")
        .doc(session?.user?.email)
        .collection("chats")
        .doc(chatId)
        .collection("messages")
        .add(message);

    res.status(200).json({answer: message.text});
}