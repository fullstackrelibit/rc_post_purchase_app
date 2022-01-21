export function getLeadTimeVariantsOnThankYou(orderId, cb) {
  if (orderId) {

    var data = JSON.stringify({
      "checkoutId": orderId
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        // console.log(this.responseText);
        cb( JSON.parse(this.responseText) );
      }
    });

    xhr.open("POST", "https://stgapi.ringconcierge.com/send_mail_popup");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(data);

    // return fetch(`https://stgapi.ringconcierge.com/send_mail_popup`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'credentials': false
    //   },
    //   body: JSON.stringify({
    //     "checkoutId": orderId
    //   })
    // })
    // .then(response => response.json())
    // // .then(function(response){
    // //   conso
    // //   if(response.status && response.status == true) {
    // //     if(response.data && response.data.length > 0 ) {
    // //       // response.data.map(function(leadMesgChangedVariant) {
    // //       // })
    // //     }
    // //   }
    // // })

  }
  else {
    return new Error('No order id is present for send_mail_popup api');
  }
}
