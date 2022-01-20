function checkLineItemsleadTime( lineItems ) {
  // getLeadTimeVariantsOnThankYou( lineItems )
  console.log(JSON.stringify(lineItems), "these are line items")
}

function getLeadTimeVariantsOnThankYou(orderId) {
  if (orderId) {
    return fetch(`https://stgapi.ringconcierge.com/send_mail_popup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(function(response){
      if(response.status && response.status == true) {
        if(response.data && response.data.length > 0 ) {
          // response.data.map(function(leadMesgChangedVariant) {
          // })
        }
      }
    })
  }
  else {
  	console.log("===> No order id is present for send_mail_popup api <===")
  }
}

export default checkLineItemsleadTime;
