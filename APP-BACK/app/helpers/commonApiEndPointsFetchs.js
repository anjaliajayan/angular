const { setupOrganisation, sequelizeCurrency, Suppliers } = require('../../config/db');

module.exports = {
    fetchOrganisationDetails : async (orgID) => {
        let organisation = await setupOrganisation.findOne({
            where: { organisation_id: orgID }
        });

        return organisation;
    },
    fetchCurrencyDetails : async (currID) => {
        let currency = await sequelizeCurrency.findOne({
            where: { currency_id: currID }
        });

        return currency;
    },
    fetchSupplierDetails : async (gdsCode) => {
        let supplier = await Suppliers.findOne({
            where: { Gds_code: gdsCode }
        });
        // console.log(supplier);

        return supplier;
    }
}