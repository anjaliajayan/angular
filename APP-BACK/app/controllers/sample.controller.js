const express = require('express');
const router = express.Router();

const pdfHelper = require('../helpers/pdf.helper');
const utilsHelper = require('../helpers/utils');

/**
 * @swagger
 *
 * /api/sample/pdf:
 *   get:
 *    tags:
 *      - Testing Routes
 *    summary: Sample PDF file generator
 *    description: Sample PDF file generator
 *    consumes:
 *       - application/json
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Return object
 *      400:
 *       description: Bad Request
 *      401:
 *        description: Not Authrized
 *      403:
 *        description: You do not have necessary permissions for the resource or JWT Expired
 *      500:
 *         description: Something went wrong
 */
router.get('/pdf', async (req, res) => {

  try {
        // generate PDF on the fly.
        // html files are in views/email/
        // all generated pdf files will be saved in views/email/pdfs/
        const pdfData = {
            purchase_date: 'purchase_date',
            due_date: 'due_date',
            name: 'name',
            total: 'total',
            due_date: 'due_date',
            action_url: 'action_url',
            invoice_id: 'invoice_id',
            date: 'date',
            total: 'total',
            support_url: 'support_url',
            invoice_details: [{
                    description: 'description 1',
                    amount: 'amount 1'
                }, {
                    description: 'description 2',
                    amount: 'amount 2'
                }, {
                    description: 'description 3',
                    amount: 'amount 3'
                }, {
                    description: 'description 4',
                    amount: 'amount 4'
                }]
        };
        
        const fileBuffer = await pdfHelper.generatePdf('welcome', pdfData);
        await pdfHelper.savePdf(fileBuffer);

        return utilsHelper.makeResponse(res, true, 200, 'success', 'Request was successful successful', 'File generated successfully');

  }
  catch(err) {
      console.log(err)
      return false;
  }  
});

module.exports = router;
