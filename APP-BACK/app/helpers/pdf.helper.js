const fs = require('fs');
const Util = require('util');
const Puppeteer = require('puppeteer');
const Handlebars = require('handlebars');
const ReadFile = Util.promisify(fs.readFile);
const { randomString } = require('./utils');

const loggerFile = 'pdfHelper';
const templatePath = `./app/views/emails/`;
const templateVoucherPath =`./voucher/`;
module.exports = {

  async generatePdf(file, data) {
    const loggerObject = `${loggerFile}generatePdf`;

      try {
        const browser = await Puppeteer.launch();
        const page = await browser.newPage();

        const content = await ReadFile(`${templatePath}${file}.html`, 'utf8')

        const template = Handlebars.compile(content);
        await page.setContent(template(data));
    
        // await page.emulateMedia('screen'); //print with screen
        return pdf = page.pdf();
      }
      catch(error) {
        console.log(loggerObject, error)
        return { status: false }
      }
    
  },


  async savePdf(fileBuffer) {
    const pdfName = randomString(25);
    fs.writeFile(`${templatePath}pdfs/${pdfName}.pdf`, fileBuffer, "binary", err => {
        if(err) {
            console.log(err);
            return { status: false }
        } else {
            console.log("The file was saved!");
            return { status: true }
        }
    });
  },


  async generateVoucherPdf(file, data) {
    const loggerObject = `${loggerFile}generatePdf`;

      try {
        const browser = await Puppeteer.launch();
        const page = await browser.newPage();

        const content = await ReadFile(`${templateVoucherPath}${file}.handlebars`, 'utf8')

        const template = Handlebars.compile(content);
        await page.setContent(template(data));
    
        // await page.emulateMedia('screen'); //print with screen
        return pdf = page.pdf({ printBackground: true});
        
      }
      catch(error) {
        console.log(loggerObject, error)
        return { status: false }
      }
    
  },

  async saveVoucherPdf(fileBuffer,trip_id) { 
    // console.log('fileBuffer,,,,',fileBuffer);
    // const pdfName = randomString(25); 
     fs.writeFile(`${templateVoucherPath}pdfs/Voucher_${trip_id}.pdf`, fileBuffer, "binary", err => { 
         if(err) { 
             console.log(err); 
             return { status: false } 
         } else { 
             console.log("The file was saved!"); 
             return { status: true } 
         } 
     }); 
   } 
 

}

