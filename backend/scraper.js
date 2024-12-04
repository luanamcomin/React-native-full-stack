const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeData() {
  const url = 'https://www.youtube.com';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  
  let scrapedData = '';
  $('h1').each((index, element) => {
    scrapedData += $(element).text() + '\n';
  });

  return scrapedData;
}

module.exports = { scrapeData };
