const url = 'https://api.openweathermap.org/data/2.5/';
//const key = '86743d67a20deffa33f5c0b9adb450d8';
 const key = '4702b23f3858bead8cccd0c88e6c90b4';



 let getResult = (cityName) => {
   let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
      .then(weather => {
         return weather.json()
     })
      .then(displayResult)

}
let displayResult = (result) => {
   let city = document.querySelector('.before-city')

   city.innerText = `${result.name},${result.sys.country}`

   let temp = document.querySelector('.before-temp')
   temp.innerText = `${Math.round(result.main.temp)}°C`

   let desc = document.querySelector('.before-desc')
   desc.innerText = result.weather[0].description//
   
   let minmax = document.querySelector('.before-minmax')
   minmax.innerText = `${Math.round(result.main.temp_min)}°C /  ${Math.round(result.main.temp_max)}°C`

   var durum=result.weather[0].description;
  durum=durum.split(" ").join("");
   denemeyazi=document.getElementById("content_u");
    denemeyazi.innerHTML=``;
   switch (true) {
      case (durum.indexOf("açık")!=-1):
         denemeyazi.innerHTML+=`
         <video src="./img/acık.mp4" autoplay muted loop></video></div>`
         break;
      case (durum.indexOf("bulut")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/bulut.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("hafif yağmur")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/hafifyagmur.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("yağmur")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/rain.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("kapalı")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/kapali.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("sis")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/SisliHava.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("kar")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/kar.mov" autoplay muted loop></video></div> `
         break;
      default:
         denemeyazi.innerHTML=``;
         break;
   
   }
}
let getResult2 = (cityName) => {
   let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
      .then(weather => {
         return weather.json()
     })
      .then(displayResult2)

}
let displayResult2 = (result) => {
   console.log(result)
   let city = document.querySelector('.city')

   city.innerText = `${result.name},${result.sys.country}`

   let temp = document.querySelector('.temp')
   temp.innerText = `${Math.round(result.main.temp)}°C`

   var desc = document.querySelector('.desc')
   desc.innerText = result.weather[0].description//
   
   var durum=result.weather[0].description;
   durum=durum.split(" ").join("");

   denemeyazi=document.getElementById("content_u");
      denemeyazi.innerHTML=``;
      switch (true) {
      case (durum.indexOf("açık")!=-1):
         denemeyazi.innerHTML+=`
         <video src="./img/acık.mp4" autoplay muted loop></video></div>`
         break;
      case (durum.indexOf("bulut")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/bulut.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("hafif yağmur")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/hafifyagmur.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("yağmur")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/rain.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("kapalı")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/kapali.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("sis")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/SisliHava.mp4" autoplay muted loop></video></div> `
         break;
         case (durum.indexOf("kar")!=-1):
         denemeyazi.innerHTML+= `
         <video src="./img/kar.mov" autoplay muted loop></video></div> `
         break;
      default:
         denemeyazi.innerHTML=``;
         break;
   
   }
   
   let minmax = document.querySelector('.minmax')
   minmax.innerText = `${Math.round(result.main.temp_min)}°C /  ${Math.round(result.main.temp_max)}°C`



}


const form = document.forms["girisFormu"];// girilen şehri const diye bir değişkene atıyor
const tarih=document.getElementById("searchBarData");
let input=document.getElementById("lastCity");
let input2=document.getElementById("searchBar");

$("document").ready(()=>{
   input.focus();
   
     

})


$(document).keyup(function(e){

   if ($("#lastCity").is(":focus")&& e.keyCode==13) {
      document.getElementById("dis").style.height="450px";
      $("#content").show();
      getResult(String(input.value));
      input.value="";
   }
   
   
   
   if ($("#searchBar").is(":focus")&& e.keyCode==13) {
      document.getElementById("dis").style.height="450px";
      $("#content").show();
      getResult2(String(input2.value));
      input2.value="";
      
   }

   $('form').bind("keypress", function(e) {
      if (e.keyCode == 13) {               
        e.preventDefault();
        return false;
      }
    });
    
    
})








