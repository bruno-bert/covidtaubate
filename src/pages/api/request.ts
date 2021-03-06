import { NextApiRequest, NextApiResponse } from 'next'
import {getRandomInt} from "../../utils"
type Data = {
  result: string | string[]
}

export default  (req: NextApiRequest, res: NextApiResponse<Data>) => {
  
  console.log("Starting request...")
 
  if (req.method !== "POST"){
    res.status(400).json( { result: "method not supported"})
  }

   if (!req.body.url){
    res.status(400).json( { result: "url required"});
  }

  let {url} = req.body;
  url = url.replace(/youtu.be\//,'youtube.com\/watch?v=');
  url = url.replace(/watch/,'live_chat');
  
 console.log('url', url)

  try{

    //const puppeteer = require('puppeteer')
    const chromium = require('chrome-aws-lambda');
    
    const run = async()=>{
      let result: any
      let browser
      const selector = 'span[id=author-name]'

       //development
       //browser = await puppeteer.launch() 
     

       //production (vercel)
        browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
      }); 

        const page = await browser.newPage()
        //await page.goto(url, { waitUntil: 'networkidle0' })
        await page.goto(url)
 
        result = await page.$$eval(selector, (elemts: any) => { 
          return elemts.map( 
            (elem: any) => 
            { 
              if (elem.innerText )
                return elem.innerText 
            }
          ) 
        })  
        browser.close()   

        const filtered = result.filter( (item: any, index: number) => { return (item!=null && result.indexOf(item)===index ) })
        const index = getRandomInt(0,filtered.length)
        return filtered[index]    
 

     
    }  

     run().then(result=>{     
      res.status(200).json({result})
     }).catch((err: any)=>{
      console.log("Error on request", err.toString()) 
      res.status(400).send({result: err.toString()});
     }); 


  }catch(error){
    console.log("Error on request", error)
    res.status(400).send({result: error});
  }
 
 



}