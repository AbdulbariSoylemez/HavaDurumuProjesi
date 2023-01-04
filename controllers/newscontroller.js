import News from "../models/news.js";

// News.create();
/* News.collection.insertMany(json, function(err,r) {
  assert.equal(null, err);
  assert.equal(json, r.insertedCount);       
  db.close();
 });  */

/*   const getAllTitle = News.find({},function (err,res,callback){  
  if (err) throw err  
  res.forEach(function (item){  
    return item.title;
  })
}); 

 const getAllUrl = News.find({},function (err,res){  
  if (err) throw err  
  res.forEach(function (item){  
    return item.url;
  })
}); 

 const getAllImg = News.find({},function (err,res){  
  if (err) throw err  
  res.forEach(function (item){ 
    return item.img;
  })
});  */

const getAllNews = async(req,res) =>{
  try{
    const haberler = await News.find({}).select('title url img -_id');
    res.status(200).render('Haberler',{ element:haberler,link:'Haberler'});
  }catch(error){
    res.status(500).json({
      succeded:false,
      error
    });
  }
};
export{getAllNews}

 




