import Last from "../models/last.js";
//import fs from "fs";

/* const last_data = fs.readdirSync('./last_data');
for(let i = 0; i < last_data.length; i++ ){
  const data = JSON.parse(fs.readFileSync("./last_data/"+last_data[i],'utf-8'))
  Last.create(data);
} */

const pickLast = async(req,res) =>{
  try{
    const last_city = req.body.last_city;
    const last_date = req.body.last_date;
    const city = await Last.find({"city":last_city}).select('city -_id');
    const deneme = await Last.find({"city":last_city})
    var result=[]
    deneme[0].dates.forEach((e)=>{
      if(e.date==last_date) {
        result.push(e)
      }
    }) 
    res.status(200).render('HomeLast',{
      city,
      result 
    });
  }
  catch(error){
    res.status(500).json({
      succeded:false,
      error
    });
  }
}

export{pickLast}



