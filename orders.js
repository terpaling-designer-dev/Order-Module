// --- START OF FILE orders.js ---

const orders = [
    // Order 1 (Matches the example image closely)
    {
        supplier: "SUPPLIER SHOP SDN BHD",
        order_id: "#85257 - 4893",
        status: "In Transit",
        amount: "MYR 3,920.68",
        order_created: "08/10/2023",
        number_of_products: 10, // Based on product list length
        channel: "Platform",
        promo_code: "n/a",
        fulfillment: "3PL (PosLaju)",
        estimated_delivery: "12/10/2023",
        payment_method: "Finance Credit: BSN",
        payment_status: "Invoiced Approved",
        payment_due: "11/12/2023",
        tracking_number: "ABX123145",
        products: [
            { id: 1, img: 'https://via.placeholder.com/40/FFDDCC/000?text=P1', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' },
            { id: 2, img: 'https://via.placeholder.com/40/CCEEFF/000?text=P2', name: '100 PLUS REGULAR Bottle 500 ml Isotonic Drink', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' },
            { id: 3, img: 'https://via.placeholder.com/40/DDFFDD/000?text=P3', name: 'GLO LEMON CONCENTRATED DISHWASHING LIQUID 900ML 12 X 900ML', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' },
            { id: 4, img: 'https://via.placeholder.com/40/FFDDCC/000?text=P4', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' },
            { id: 5, img: 'https://via.placeholder.com/40/CCEEFF/000?text=P5', name: '100 PLUS REGULAR Bottle 500 ml Isotonic Drink', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' },
            { id: 6, img: 'https://via.placeholder.com/40/DDFFDD/000?text=P6', name: 'GLO LEMON CONCENTRATED DISHWASHING LIQUID 900ML 12 X 900ML', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // Adjusted quantity/total for variation
            { id: 7, img: 'https://via.placeholder.com/40/FFDDCC/000?text=P7', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // Adjusted quantity/total
            { id: 8, img: 'https://via.placeholder.com/40/CCEEFF/000?text=P8', name: '100 PLUS REGULAR Bottle 500 ml Isotonic Drink', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // Adjusted quantity/total
            { id: 9, img: 'https://via.placeholder.com/40/DDFFDD/000?text=P9', name: 'GLO LEMON CONCENTRATED DISHWASHING LIQUID 900ML 12 X 900ML', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // Adjusted quantity/total
            { id: 10, img: 'https://via.placeholder.com/40/FFDDCC/000?text=P10', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // Adjusted quantity/total
        ],
        // Note: The example image summary doesn't add up correctly with the product list total.
        // I'll make the summary reflect the actual total from the adjusted product list.
        summary: {
            subtotal_excl_tax: "MYR 6247.50", // 5*833 + 5*416.5 = 4165 + 2082.5 = 6247.5
            voucher_incl_tax: "0.00",
            credit_notes: "0.00",
            subtotal_discounted: "MYR 6247.50",
            tax: "MYR 0.00", // Assuming 0 tax for simplicity
            shipping_cost_incl_tax: "MYR 23.00", // Keeping example shipping
            total: "MYR 6,270.50" // This should be the final amount
        },
        // --> OVERRIDE Amount to match calculated total
        amount: "MYR 6,270.50"
    },

    // Order 2 (Completed Order)
    {
        supplier: "Teguh Maju Mantul SDN BHD",
        order_id: "#85259 - 4894",
        status: "Completed",
        amount: "MYR 1,900.40", // Updated amount to match calculated summary
        order_created: "10/10/2023",
        number_of_products: 2,
        channel: "Platform",
        promo_code: "WELCOME10", // Example promo
        fulfillment: "J&T Express",
        estimated_delivery: "14/10/2023",
        delivered_on: "13/10/2023", // Add delivered_on for completed orders
        payment_method: "Platform Credit",
        payment_status: "Paid",
        payment_due: "N/A", // Payment already made
        tracking_number: "JTX567890",
        products: [
             { id: 1, img: 'https://via.placeholder.com/40/ABCDEF/000?text=T1', name: 'Premium Grade AA Rice (10kg Bag)', unit_price: 'MYR 45.00', quantity: '20 Bag', total_price: 'MYR 900.00' },
             { id: 2, img: 'https://via.placeholder.com/40/FEDCBA/000?text=T2', name: 'Cooking Oil - Sunflower (5L Bottle)', unit_price: 'MYR 32.00', quantity: '30 Bottle', total_price: 'MYR 960.00' },
        ],
        summary: {
            subtotal_excl_tax: "MYR 1860.00", // 900 + 960
            voucher_incl_tax: "-MYR 18.60", // 10% Welcome Discount simulation
            credit_notes: "0.00",
            subtotal_discounted: "MYR 1841.40", // 1860 * 0.9
            tax: "MYR 9.00", // Sample tax
            shipping_cost_incl_tax: "MYR 50.00",
            total: "MYR 1,900.40" // 1841.40 + 9 + 50
        }
    },

    // Order 3 (Pending Payment)
    {
        supplier: "Global Trading Co. Sdn Bhd",
        order_id: "#85261 - 4896",
        status: "Pending", // Status implies action needed (payment)
        amount: "MYR 578.90",
        order_created: "14/10/2023",
        number_of_products: 3,
        channel: "Manual",
        promo_code: "None Applied",
        fulfillment: "Internal Delivery",
        estimated_delivery: "18/10/2023",
        payment_method: "Bank Transfer",
        payment_status: "Payment Due", // Awaiting payment
        payment_due: "21/10/2023",
        tracking_number: "N/A", // No tracking until shipped
        products: [
             { id: 1, img: 'https://via.placeholder.com/40/AABBCC/000?text=G1', name: 'A4 Paper Bundle (500 Sheets)', unit_price: 'MYR 12.50', quantity: '10 Bundle', total_price: 'MYR 125.00' },
             { id: 2, img: 'https://via.placeholder.com/40/CCDDEE/000?text=G2', name: 'Stapler - Heavy Duty', unit_price: 'MYR 45.00', quantity: '5 Unit', total_price: 'MYR 225.00' },
             { id: 3, img: 'https://via.placeholder.com/40/EEFFGG/000?text=G3', name: 'Ballpoint Pens - Black (Box of 50)', unit_price: 'MYR 28.90', quantity: '5 Box', total_price: 'MYR 144.50' },
        ],
        summary: {
            subtotal_excl_tax: "MYR 494.50", // 125 + 225 + 144.50
            voucher_incl_tax: "0.00",
            credit_notes: "0.00",
            subtotal_discounted: "MYR 494.50",
            tax: "MYR 29.67", // Example 6% Tax
            shipping_cost_incl_tax: "MYR 54.73", // Example Shipping
            total: "MYR 578.90" // 494.50 + 29.67 + 54.73
        }
    },

    // Order 4 (Processing - Payment Made, Not Shipped)
    {
        supplier: "Kuala Trade Enterprise",
        order_id: "#85262 - 4897",
        status: "Processing",
        amount: "MYR 1,315.30",
        order_created: "15/10/2023",
        number_of_products: 1,
        channel: "Platform",
        promo_code: "OCTSALE",
        fulfillment: "DHL eCommerce",
        estimated_delivery: "20/10/2023",
        payment_method: "Credit Card",
        payment_status: "Paid", // Payment received
        payment_due: "N/A",
        tracking_number: "Pending Shipment", // Indicate it's not shipped yet
        products: [
             { id: 1, img: 'https://via.placeholder.com/40/FF9999/000?text=K1', name: 'Office Chair - Ergonomic Mesh Back', unit_price: 'MYR 250.00', quantity: '5 Unit', total_price: 'MYR 1250.00' },
             // Only one product in this order
        ],
        summary: {
            subtotal_excl_tax: "MYR 1250.00",
            voucher_incl_tax: "-MYR 50.00", // OCTSALE Promo applied
            credit_notes: "0.00",
            subtotal_discounted: "MYR 1200.00", // 1250 - 50
            tax: "MYR 0.00",
            shipping_cost_incl_tax: "MYR 115.30", // Higher shipping for bulky item
            total: "MYR 1,315.30" // 1200 + 115.30
        }
    },

    // Order 5 (Rejected/Cancelled)
    {
        supplier: "Yang Terpaling Supplier Sdn Bhd",
        order_id: "#85260 - 4895",
        status: "Rejected",
        amount: "MYR 0.00", // Often zeroed out or reflects paid amount if refund pending
        order_created: "12/10/2023",
        number_of_products: 2,
        channel: "Platform",
        promo_code: "FREESHIP",
        fulfillment: "N/A", // Not fulfilled
        estimated_delivery: "N/A",
        payment_method: "Platform Credit",
        payment_status: "Refunded", // Or 'Cancelled', 'Payment Failed' etc.
        payment_due: "N/A",
        tracking_number: "N/A",
        products: [
             { id: 1, img: 'https://via.placeholder.com/40/CCCCCC/000?text=Y1', name: 'Stainless Steel Thermos (1L)', unit_price: 'MYR 65.00', quantity: '10 Unit', total_price: 'MYR 650.00' },
             { id: 2, img: 'https://via.placeholder.com/40/AAAAAA/000?text=Y2', name: 'Reusable Shopping Bags (Set of 5)', unit_price: 'MYR 15.00', quantity: '20 Set', total_price: 'MYR 300.00' },
        ],
        summary: { // Summary might reflect original values before rejection or be zeroed
            subtotal_excl_tax: "MYR 950.00",
            voucher_incl_tax: "0.00",
            credit_notes: "-MYR 950.00", // Credit note applied due to rejection
            subtotal_discounted: "MYR 0.00",
            tax: "MYR 0.00",
            shipping_cost_incl_tax: "MYR 0.00", // Free ship promo negated by rejection
            total: "MYR 0.00" // Final amount is zero after refund/rejection
        }
    }
];

// --- Function createOrderCard and the rest of the script from previous examples remain below ---

function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = `order-card ${order.status.toLowerCase().replace(/\s+/g, '-')}`; // Use status for potential styling, replace spaces

    // Calculate number of products from array if available
    const numProductsDisplay = order.products ? order.products.length : (order.number_of_products || 'N/A');

    card.innerHTML = `
        <div class="order-header">
            <div class="supplier-left">
                <div class="data-points">
                    <span class="supplier">${order.supplier}</span>
                    <span class="order-number">${order.order_id}</span>
                </div>
                <span class="status ${order.status.toLowerCase().replace(/\s+/g, '-')}">${order.status}</span>
            </div>
            <h2>${order.amount}</h2>
        </div>
        <div class="order-details">
            <div class="rows">
                <div class="data-points">
                    <div class="title"><p>Order Created</p></div>
                    <div class="content"><p>${order.order_created}</p></div>
                </div>
                <div class="data-points">
                    <div class="title"><p>Number of Products</p></div>
                    <div class="content"><p>${numProductsDisplay}</p></div>
                </div>
                <div class="data-points">
                    <div class="title"><p>Channel</p></div>
                    <div class="content"><p>${order.channel}</p></div>
                </div>
                <div class="data-points">
                    <div class="title"><p>Promo Code</p></div>
                    <div class="content"><p>${order.promo_code}</p></div>
                </div>
                <div class="data-points">
                    <div class="title"><p>Fulfillment</p></div>
                    <div class="content"><p>${order.fulfillment}</p></div>
                </div>
                 <div class="data-points">
                    <div class="title"><p>Est. Delivery / Delivered On</p></div>
                    <div class="content"><p>${order.delivered_on ? order.delivered_on + ' (Delivered)' : order.estimated_delivery || 'N/A'}</p></div>
                </div>
            </div>
            <div class="rows">
                <div class="data-points">
                    <div class="title"><p>Payment Method</p></div>
                    <div class="content"><p>${order.payment_method}</p></div>
                </div>
                <div class="data-points">
                    <div class="title"><p>Payment Status</p></div>
                    <div class="content"><p>${order.payment_status}</p></div>
                </div>
                <div class="data-points">
                    <div class="title"><p>Payment Due</p></div>
                    <div class="content"><p>${order.payment_due}</p></div>
                </div>
                 <div class="data-points"><!-- empty --></div>
                 <div class="data-points"><!-- empty --></div>
                 <div class="data-points"><!-- empty --></div>
            </div>
        </div>
        <div class="order-actions">
            <div class="data-points">
                <div class="title"><p>Tracking Number</p></div>
                <div class="content"><p>${order.tracking_number || 'N/A'}</p></div>
            </div>
            <div>
                <button class="view-btn">View Detail</button>
                <button class="download-btn">Download</button>
                <button class="manage-btn">Manage Financing</button>
            </div>
        </div>
    `;

    const viewDetailButton = card.querySelector('.view-btn');
    if (viewDetailButton) {
        viewDetailButton.addEventListener('click', () => {
            const encodedOrderId = encodeURIComponent(order.order_id);
            window.location.href = `order-detail.html?orderId=${encodedOrderId}`;
        });
    }
    return card;
}

const orderTable = document.getElementById('orderTable');
if (orderTable) {
    orders.forEach(order => {
        const card = createOrderCard(order);
        orderTable.appendChild(card);
    });
} else {
    // This check prevents errors if orders.js is loaded on order-detail.html
    // where 'orderTable' doesn't exist.
    // console.log("Element with ID 'orderTable' not found (expected on detail page).");
}


// --- END OF FILE orders.js ---