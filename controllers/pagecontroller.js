const getHomePage = (req,res) =>{
    res.render('Home',{
        link:'Home'
    });
}
const getNewsPage = (req,res) =>{
    res.render('Haberler',{
        link:'Haberler'
    })
}
const getAboutPage = (req,res) =>{
    res.render('Hakkımızda',{
        link:'Hakkımızda'
    });
}
const getCommunicationPage = (req,res) =>{
    res.render('Iletisim',{
        link:'Iletisim'
    });
}
/*const getLastHomePage = (req,res) =>{
    res.render('HomeLast',{
        link:'HomeLast'
    })
}*/

export  {getHomePage,getAboutPage,getCommunicationPage,getNewsPage};