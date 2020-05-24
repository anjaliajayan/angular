let GetSaleID = (agent, apiKey, secretKey, reqData) => {
	let getSaleIdData = reqData;
	let soapData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns1="http://tpconnects.com/service/comission">`;
	soapData += `<soapenv:Header><ns1:SecurityHeader>`;
  soapData += `<agent>${agent}</agent><apiKey>${apiKey}</apiKey><secretKey>${secretKey}</secretKey>`;
  soapData += `</ns1:SecurityHeader></soapenv:Header>`;
  soapData += `<soapenv:Body>`;
  soapData += `<ns1:SaveSales>
			<Sales>
				<created>${getSaleIdData.created}</created>
				<endDate>${getSaleIdData.end_date}</endDate>
				<isActive>${getSaleIdData.is_active}</isActive>
				<isActivities>${getSaleIdData.is_activities}</isActivities>
				<isAllAgent>${getSaleIdData.is_all_agent}</isAllAgent>
				<isCar>${getSaleIdData.is_car}</isCar>
				<isCruises>${getSaleIdData.is_cruises}</isCruises>
				<isFlight>${getSaleIdData.is_flight}</isFlight>
				<isFreeSale>${getSaleIdData.is_free_sale}</isFreeSale>
				<isHolidays>${getSaleIdData.is_holidays}</isHolidays>
				<isHotel>${getSaleIdData.is_hotel}</isHotel>
				<isInsurance>${getSaleIdData.is_insurance}</isInsurance>
				<isStopSale>${getSaleIdData.is_stop_sale}</isStopSale>
				<isTransfers>${getSaleIdData.is_transfers}</isTransfers>
				<isVisa>${getSaleIdData.is_visa}</isVisa>
				<name>${getSaleIdData.name}</name>
				<organizationId>${getSaleIdData.organisation_id}</organizationId>
				<preference>${getSaleIdData.preference}</preference>
				<startDate>${getSaleIdData.start_date}</startDate>
				<status>${getSaleIdData.status}</status>
				<usersId>${getSaleIdData.users_id}</usersId>
				<saleId>${getSaleIdData.sale_id}</saleId>
			</Sales>
		</ns1:SaveSales>
	</soapenv:Body>
</soapenv:Envelope>`;

    return soapData;
}
module.exports = GetSaleID;