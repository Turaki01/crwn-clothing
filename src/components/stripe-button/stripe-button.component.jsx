import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({
    price
}) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IM7HxAl7ds3ebWlv85GLxfqeG1hNgHMJzp0Knz65cjLmH6lCy8mCA1uFOalOVTtwqk1W3RxjfXeb8fXDkLnaUHk00ozgnmBFW";

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
