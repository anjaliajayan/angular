const commonEndPointHelper = require('./../helpers/commonApiEndPointsFetchs');

const NodeCache = require( "node-cache" );
const cache = new NodeCache({ stdTTL: 0, checkperiod: 0 });

module.exports = (req, res, next) => {
    cache.get("appState", async (err, appState) => {

        if(!err) {
          if(appState == undefined) {
            let user = req.user;
            let appState = {};
            appState.user = req.user;
            let organisation = await commonEndPointHelper.fetchOrganisationDetails(user.organisation_id);
            if(organisation) {
                // // console.log(organisation.dataValues.currency_id)
                let currency = await commonEndPointHelper.fetchCurrencyDetails(organisation.dataValues.currency_id);
                if(currency) {
                    appState.organisation = organisation.dataValues;
                    appState.currency = currency.dataValues;
                    cache.set("appState", appState, (err, success) => {
                        if(!err && success) {
                            req.appState = {
                                appState,
                                cached: false
                            };
                        }
                    });
                }
            }
          } else {
            req.appState = {
                appState,
                cached: true
            };

            // // console.log(req.appState);
          }
        } else {
          res.status(500).json({type: 'error', msg: `Critical Error: Application State has been Damaged! contact TPConnects Support Immediately. ERR => ${err}`});
        }

        next();
    });
};
