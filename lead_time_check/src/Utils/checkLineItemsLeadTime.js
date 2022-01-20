export function getLeadTimeVariantsOnThankYou(orderId) {
  if (orderId) {
    return fetch(`https://stgapi.ringconcierge.com/send_mail_popup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        checkoutId: orderId
      })
    })
    .then(response => response.json())
    // .then(function(response){
    //   conso
    //   if(response.status && response.status == true) {
    //     if(response.data && response.data.length > 0 ) {
    //       // response.data.map(function(leadMesgChangedVariant) {
    //       // })
    //     }
    //   }
    // })
  }
  else {
    return new Error('No order id is present for send_mail_popup api');
  }
}
