const puppeteer= Require=("puppeteer");
const scrape= async()=>
{
    const url='https://www.ardahan.edu.tr/'
const browser= await puppeteer.launch();
const page = await browser.newpage();
await page.goto(url);
await page.pdf({path:'yazdirma.pdf' , format:'a4'});

const {el}=await page.$x('//*[@id="ContentPlaceHolder1_liste_icerik"]');
console.log(el);
const textContent=await el.getProperty("textContent");
const textValue=await text.jsonValue();
console.log(textValue);

browser.close();

}
scrape("Aktif_Duyurular");
