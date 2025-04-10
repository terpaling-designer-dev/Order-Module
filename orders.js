const orders = [
    {
        supplier: "SUPPLIER SHOP SDN BHD",
        order_id: "#85258 - 4893",
        status: "Completed",
        amount: "MYR 3,920.68",
        order_created: "08/10/2025",
        number_of_products: 23,
        channel: "Platform",
        promo_code: "None Applied",
        fulfillment: "Poslaju",
        delivered_on: "12/10/2025",
        payment_method: "Platform Credit",
        payment_status: "Payment Due",
        payment_due: "11/12/2025",
        tracking_number: "ABX123145",
    },
    {
        supplier: "Teguh Maju Mantul SDN BHD",
        order_id: "#85259 - 4894",
        status: "Completed",
        amount: "MYR 1,850.40",
        order_created: "10/10/2025",
        number_of_products: 12,
        channel: "Platform",
        promo_code: "WELCOME10",
        fulfillment: "J&T Express",
        delivered_on: "14/10/2025",
        payment_method: "Platform Credit",
        payment_status: "Paid",
        payment_due: "10/12/2025",
        tracking_number: "JTX567890",
    },
    {
        supplier: "Yang Terpaling Supplier Sdn Bhd",
        order_id: "#85260 - 4895",
        status: "Pending",
        amount: "MYR 2,475.90",
        order_created: "12/10/2025",
        number_of_products: 17,
        channel: "Platform",
        promo_code: "FREESHIP",
        fulfillment: "DHL",
        delivered_on: "Pending",
        payment_method: "Platform Credit",
        payment_status: "Payment Due",
        payment_due: "15/12/2025",
        tracking_number: "DHL987654",
    }
    {
        supplier: "Global Trading Co. Sdn Bhd",
        order_id: "#85261 - 4896",
        status: "Completed",
        amount: "MYR 5,678.90",
        order_created: "14/10/2025",
        number_of_products: 30,
        channel: "Platform",
        promo_code: "VIP20",
        fulfillment: "Poslaju",
        delivered_on: "16/10/2025",
        payment_method: "Credit Card",
        payment_status: "Paid",
        payment_due: "14/12/2025",
        tracking_number: "POS123678",
    },
    {
        supplier: "Kuala Trade Enterprise",
        order_id: "#85262 - 4897",
        status: "Pending",
        amount: "MYR 1,250.30",
        order_created: "15/10/2025",
        number_of_products: 8,
        channel: "Platform",
        promo_code: "BLACKFRIDAY",
        fulfillment: "J&T Express",
        delivered_on: "Pending",
        payment_method: "Platform Credit",
        payment_status: "Payment Due",
        payment_due: "15/12/2025",
        tracking_number: "JTX765432",
    }
];

function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = `order-card ${order.status.toLowerCase()}`;

    card.innerHTML = `
        <div class="order-header">
            <div class="supplier-left">
                <div class="data-points">
                    <span class="supplier">${order.supplier}</span>
                    <span class="order-number">${order.order_id}</span>
                </div>
                <span class="status">${order.status}</span>
            </div>
            <h2>${order.amount}</h2>
        </div>
        <div class="order-details">
            <div class="rows">
                <div class="data-points">
                    <div class="title">
                        <p>Order Created</p>
                    </div>
                    <div class="content">
                        <p>${order.order_created}</p>
                    </div>
                </div>
                <div class="data-points">
                    <div class="title">
                        <p>Number of Products</p>
                    </div>
                    <div class="content">
                        <p>${order.number_of_products}</p>
                    </div>
                </div>
                <div class="data-points">
                    <div class="title">
                        <p>Channel</p>
                    </div>
                    <div class="content">
                        <p>${order.channel}</p>
                    </div>
                </div>
                <div class="data-points">
                    <div class="title">
                        <p>Promo Code</p>
                    </div>
                    <div class="content">
                        <p>${order.promo_code}</p>
                    </div>
                </div>
                <div class="data-points">
                    <div class="title">
                        <p>Fulfillment</p>
                    </div>
                    <div class="content">
                        <p>${order.fulfillment}</p>
                    </div>
                </div>
                <div class="data-points">
                    <div class="title">
                        <p>Delivered On</p>
                    </div>
                    <div class="content">
                        <p>${order.delivered_on}</p>
                    </div>
                </div>
            </div>
            <div class="rows">
                <div class="data-points">
                    <div class="title">
                        <p>Payment Method</p>
                    </div>
                    <div class="content">
                        <p>${order.payment_method}</p>
                    </div>
                </div>
                <div class="data-points">
                    <div class="title">
                        <p>Payment Status</p>
                    </div>
                    <div class="content">
                        <p>${order.payment_status}</p>
                    </div>
                </div>
                <div class="data-points">
                    <div class="title">
                        <p>Payment Due</p>
                    </div>
                    <div class="content">
                        <p>${order.payment_due}</p>
                    </div>
                </div>
                <div class="data-points"><!-- empty --></div>
                <div class="data-points"><!-- empty --></div>
                <div class="data-points"><!-- empty --></div>
            </div>
        </div>
        <div class="order-actions">
            <div class="data-points">
                <div class="title"><p>Tracking Number</p></div>
                <div class="content"><p>${order.tracking_number}</p></div>
            </div>
            <div>
                <button class="view-btn">View Detail</button>
                <button class="download-btn">Download</button>
                <button class="manage-btn">Manage Financing</button>
            </div>
        </div>
    `;

    return card;
}

// Append orders to container
const orderTable = document.getElementById('orderTable');
orders.forEach(order => {
    const card = createOrderCard(order);
    orderTable.appendChild(card);
});
