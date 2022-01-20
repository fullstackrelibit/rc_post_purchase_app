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
} from '@shopify/post-purchase-ui-extensions-react';

import checkLineItemsleadTime from './Utils/checkLineItemsLeadTime';

export default function App() {
  const {extensionPoint, storage, inputData} = useExtensionInput();

  // useful informations
  let {customerId, lineItems, referenceId} = inputData.initialPurchase;
  // console.log(customerId, lineItems, referenceId, "customerId, lineItems, referenceId")
  // checkLineItemsleadTime(lineItems)

  const initialState = storage.initialData;
  return (
    <>
      <BlockStack spacing="loose">
        <CalloutBanner title="Order Confirmed">
          Thanks for shopping with us!!
        </CalloutBanner>
        <Layout
          maxInlineSize={0.95}
          media={[
            {viewportSize: 'small', sizes: [1, 30, 1]},
            {viewportSize: 'medium', sizes: [300, 30, 0.5]},
            {viewportSize: 'large', sizes: [400, 30, 0.33]},
          ]}
        >
          <TextContainer>
            <TextBlock></TextBlock>
            <TextBlock>Right now I need an API to check lead time change of items in your order</TextBlock>
            <TextBlock>{JSON.stringify(lineItems)}</TextBlock>
          </TextContainer>
        {/*<View>
          <Image source="https://cdn.shopify.com/static/images/examples/img-placeholder-1120x1120.png" />
        </View>
        <View />
        <BlockStack spacing="xloose">
          <TextContainer>
            <Heading>Post-purchase extension</Heading>
            <TextBlock>
              Here you can cross-sell other products, request a product review
              based on a previous purchase, and much more.
            </TextBlock>
          </TextContainer>
          <Button
            submit
            onPress={() => {
              // eslint-disable-next-line no-console
              console.log(`Extension point ${extensionPoint}`, initialState);
            }}
          >
            Primary button
          </Button>
          </BlockStack>*/}

        </Layout>
      </BlockStack>
    </>
  );
}