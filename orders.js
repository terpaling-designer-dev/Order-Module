//Creating a list of 3 orders using the initial data as a base and modifying each slightly
const orders = [
    {
        "supplier": "SUPPLIER SHOP SDN BHD",
        "order_id": "#85258 - 4893",
        "status": "Completed",
        "amount": "MYR 3,920.68",
        "order_created": "08/10/2025",
        "number_of_products": 23,
        "channel": "Platform",
        "promo_code": "None Applied",
        "fulfillment": "Poslaju",
        "delivered_on": "12/10/2025",
        "payment_method": "Platform Credit",
        "payment_status": "Payment Due",
        "payment_due": "11/12/2025",
        "tracking_number": "ABX123145",
    },
    {
        "supplier": "Teguh Maju Mantul SDN BHD",
        "order_id": "#85259 - 4894",
        "status": "Completed",
        "amount": "MYR 1,850.40",
        "order_created": "10/10/2025",
        "number_of_products": 12,
        "channel": "Platform",
        "promo_code": "WELCOME10",
        "fulfillment": "J&T Express",
        "delivered_on": "14/10/2025",
        "payment_method": "Platform Credit",
        "payment_status": "Paid",
        "payment_due": "10/12/2025",
        "tracking_number": "JTX567890",
    },
    {
        "supplier": "Yang Terpaling Supplier Sdn Bhd",
        "order_id": "#85260 - 4895",
        "status": "Pending",
        "amount": "MYR 2,475.90",
        "order_created": "12/10/2025",
        "number_of_products": 17,
        "channel": "Platform",
        "promo_code": "FREESHIP",
        "fulfillment": "DHL",
        "delivered_on": "Pending",
        "payment_method": "Platform Credit",
        "payment_status": "Payment Due",
        "payment_due": "15/12/2025",
        "tracking_number": "DHL987654",
    }
]

// Function to create a new order card element
function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card';

    card.innerHTML = `
        <div class="order-header">
            <h3>${order.supplier}</h3>
            <p>${order.order_id}</p>
        </div>
        <div class="order-details">
            <p>Status: ${order.status}</p>
            <p>Amount: ${order.amount}</p>
            <p>Order Created: ${order.order_created}</p>
            <p>Number of Products: ${order.number_of_products}</p>
            <p>Channel: ${order.channel}</p>
            <p>Promo Code: ${order.promo_code}</p>
            <p>Fulfillment: ${order.fulfillment}</p>
            <p>Delivered On: ${order.delivered_on}</p>
            <p>Payment Method: ${order.payment_method}</p>
            <p>Payment Status: ${order.payment_status}</p>
            <p>Payment Due: ${order.payment_due}</p>
            <p>Tracking Number: ${order.tracking_number}</p>
        </div>`;

    return card;
}

const ordersContainer = document.getElementById('ordersContainer');
orders.forEach(order => {
    ordersContainer.appendChild(createOrderCard(order));
});