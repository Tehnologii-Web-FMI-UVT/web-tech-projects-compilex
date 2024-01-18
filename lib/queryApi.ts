import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => 

{

    const res = await openai.chat.completions.create({
        model,
        messages: [{"role": "user", "content": prompt}],

      })
      
        
        return res;

};

        

export default query;