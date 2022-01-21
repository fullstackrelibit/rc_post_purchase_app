/**
 * Extend Shopify Checkout with a custom Post Purchase user experience.
 * This template provides two extension points:
 *
 *  1. ShouldRender - Called first, during the checkout process, when the
 *     payment page loads.
 *  2. Render - If requested by `ShouldRender`, will be rendered after checkout
 *     completes
 */
import {
  extend,
  render
} from '@shopify/post-purchase-ui-extensions-react';

import App from './App';

extend('Checkout::PostPurchase::ShouldRender', async ({storage}) => {
  return {
    render,
  };
});

render('Checkout::PostPurchase::Render', () => <App />);
