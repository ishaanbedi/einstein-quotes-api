// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



import { createClient } from '@supabase/supabase-js'
export default async function handler(req, res) {
    const supabaseAdmin = createClient(
        process.env.NEXT_SUPABASE_URL,
        process.env.NEXT_SUPABASE_KEY,
      )
      const { data } = await supabaseAdmin
        .from("quotes-api-table")
        .select("*")
        function returnRandomNumber(obj) {
          var size = Object.keys(obj).length;
          return Math.floor(Math.random() * (size -  1))
        }
      
    
    {console.log(data)}
    res.status(200).json({ quote: `${data[returnRandomNumber(data)].quote}` })
  }
  