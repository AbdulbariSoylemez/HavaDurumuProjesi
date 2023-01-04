import axios from 'axios';
import { load } from 'cheerio';
const url = 'https://www.haber7.com/etiket/hava+durumu';
let articles = [];
axios(url)
    .then(response => {
       const html = response.data;
       const $ = load(html); 
       $('a',html).each(function(){
           const title = $(this).attr('title');
           const url = $(this).attr('href');
           const img = $(this).find('img').attr('src');
           const date = $(this).find('.time').text();
           articles.push({
            title,
            url,
            img,
           });
       });
    }).catch(err => console.error(err));

export let json = articles;
    








