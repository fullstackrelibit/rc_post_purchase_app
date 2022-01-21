import {
  useExtensionInput,
  BlockStack,
  Button,
  CalloutBanner,
  Heading,
  Image,
  Layout,
  TextBlock,
  TextContainer,
  View,
  Tiles
} from '@shopify/post-purchase-ui-extensions-react';
import { useEffect } from 'react';
import { useState } from 'react';

import {getLeadTimeVariantsOnThankYou} from './Utils/checkLineItemsLeadTime';

export default function App() {
  const {extensionPoint, storage, inputData} = useExtensionInput();

  // Default state data
  let [leadTimeData, setLeadTimeData] = useState(false);

  // useful informations
  let {customerId, lineItems, referenceId} = inputData.initialPurchase;
  // console.log(customerId, lineItems, referenceId, "customerId, lineItems, referenceId")

  // Getting lead time from API and if it is true then show lead message
  useEffect(() => {
    if( referenceId ) {
      // getLeadTimeVariantsOnThankYou(referenceId, (response) => {
      getLeadTimeVariantsOnThankYou("7390601a37c4bf6850eb144ed4c3474e", (response) => {
        if( response.status ) {
          setLeadTimeData( response.data )
        }
      })
    }
    else {
      alert("No referenceId")
    }
  }, [])

  return (
    <BlockStack spacing="loose">
      {leadTimeData ? <CalloutBanner title="Lead Time Changed">
        An item from you order is currently out of stock and its delivery has been delayed.
      </CalloutBanner> : ''}
      {
        leadTimeData && leadTimeData.map((item, i) =>
          <Layout
            key={i}
            media={[
              {viewportSize: 'small', sizes: [1, 0, 1], maxInlineSize: 0.9},
              {viewportSize: 'medium', sizes: [532, 0, 1], maxInlineSize: 420},
              {viewportSize: 'large', sizes: [560, 38, 340]},
            ]}
          >
            {/*<Image description="product photo" source={item.image} />
            <BlockStack />*/}
            <BlockStack>
              <Heading>{item.name}</Heading>
            </BlockStack>
          </Layout>
        )
      }
    </BlockStack>
  );
}
