// --- START OF FILE orders.js ---

const orders = [
    // Order 1
    {
        supplier: "SUPPLIER SHOP SDN BHD",
        order_id: "#85257 - 4893",
        status: "In Transit",
        amount: "MYR 6,270.50", // Adjusted amount based on previous calculation
        order_created: "08/10/2023",
        number_of_products: 10,
        channel: "Platform",
        promo_code: "n/a",
        fulfillment: "3PL (PosLaju)",
        estimated_delivery: "12/10/2023",
        payment_method: "Finance Credit: BSN",
        payment_status: "Invoiced Approved",
        payment_due: "11/12/2023",
        tracking_number: "ABX123145",
        products: [
            { id: 1, img: 'img/100plus-lemon-lime-325ml.jpg', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' }, // <-- Updated path
            { id: 2, img: 'img/100plus-regular-500ml.png', name: '100 PLUS REGULAR Bottle 500 ml Isotonic Drink', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' }, // <-- Updated path
            { id: 3, img: 'img/glo-lemon-900ml.webp', name: 'GLO LEMON CONCENTRATED DISHWASHING LIQUID 900ML 12 X 900ML', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' }, // <-- Updated path
            { id: 4, img: 'img/100plus-lemon-lime-325ml.jpg', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' }, // <-- Updated path
            { id: 5, img: 'img/100plus-regular-500ml.png', name: '100 PLUS REGULAR Bottle 500 ml Isotonic Drink', unit_price: 'MYR 8.33', quantity: '100 Unit', total_price: 'MYR 833.00' }, // <-- Updated path
            { id: 6, img: 'img/glo-lemon-900ml.webp', name: 'GLO LEMON CONCENTRATED DISHWASHING LIQUID 900ML 12 X 900ML', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // <-- Updated path
            { id: 7, img: 'img/100plus-lemon-lime-325ml.jpg', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // <-- Updated path
            { id: 8, img: 'img/100plus-regular-500ml.png', name: '100 PLUS REGULAR Bottle 500 ml Isotonic Drink', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // <-- Updated path
            { id: 9, img: 'img/glo-lemon-900ml.webp', name: 'GLO LEMON CONCENTRATED DISHWASHING LIQUID 900ML 12 X 900ML', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' }, // <-- Updated path
            { id: 10, img: 'img/100plus-lemon-lime-325ml.jpg', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 8.33', quantity: '50 Unit', total_price: 'MYR 416.50' } // <-- Updated path
        ],
        summary: {
            subtotal_excl_tax: "MYR 6247.50",
            voucher_incl_tax: "0.00",
            credit_notes: "0.00",
            subtotal_discounted: "MYR 6247.50",
            tax: "MYR 0.00",
            shipping_cost_incl_tax: "MYR 23.00",
            total: "MYR 6,270.50"
        }
    },

    // Order 2
    {
        supplier: "Teguh Maju Mantul SDN BHD",
        order_id: "#85259 - 4894",
        status: "Completed",
        amount: "MYR 1,900.40",
        order_created: "10/10/2023",
        number_of_products: 2,
        channel: "Platform",
        promo_code: "WELCOME10",
        fulfillment: "J&T Express",
        estimated_delivery: "14/10/2023",
        delivered_on: "13/10/2023",
        payment_method: "Platform Credit",
        payment_status: "Paid",
        payment_due: "N/A",
        tracking_number: "JTX567890",
        products: [
             { id: 1, img: 'img/premium-rice-10kg.jpg', name: 'Premium Grade AA Rice (10kg Bag)', unit_price: 'MYR 45.00', quantity: '20 Bag', total_price: 'MYR 900.00' }, // <-- Updated path
             { id: 2, img: 'img/sunflower-oil-5l.jpg', name: 'Cooking Oil - Sunflower (5L Bottle)', unit_price: 'MYR 32.00', quantity: '30 Bottle', total_price: 'MYR 960.00' } // <-- Updated path
        ],
        summary: {
            subtotal_excl_tax: "MYR 1860.00",
            voucher_incl_tax: "-MYR 18.60",
            credit_notes: "0.00",
            subtotal_discounted: "MYR 1841.40",
            tax: "MYR 9.00",
            shipping_cost_incl_tax: "MYR 50.00",
            total: "MYR 1,900.40"
        }
    },

    // Order 3
    {
        supplier: "Global Trading Co. Sdn Bhd",
        order_id: "#85261 - 4896",
        status: "Pending",
        amount: "MYR 578.90",
        order_created: "14/10/2023",
        number_of_products: 3,
        channel: "Manual",
        promo_code: "None Applied",
        fulfillment: "Internal Delivery",
        estimated_delivery: "18/10/2023",
        payment_method: "Bank Transfer",
        payment_status: "Payment Due",
        payment_due: "21/10/2023",
        tracking_number: "N/A",
        products: [
             { id: 1, img: 'img/a4-paper.jpg', name: 'A4 Paper Bundle (500 Sheets)', unit_price: 'MYR 12.50', quantity: '10 Bundle', total_price: 'MYR 125.00' }, // <-- Updated path
             { id: 2, img: 'img/stapler-heavy-duty.png', name: 'Stapler - Heavy Duty', unit_price: 'MYR 45.00', quantity: '5 Unit', total_price: 'MYR 225.00' }, // <-- Updated path
             { id: 3, img: 'img/ballpoint-pens-box.jpg', name: 'Ballpoint Pens - Black (Box of 50)', unit_price: 'MYR 28.90', quantity: '5 Box', total_price: 'MYR 144.50' } // <-- Updated path
        ],
        summary: {
            subtotal_excl_tax: "MYR 494.50",
            voucher_incl_tax: "0.00",
            credit_notes: "0.00",
            subtotal_discounted: "MYR 494.50",
            tax: "MYR 29.67",
            shipping_cost_incl_tax: "MYR 54.73",
            total: "MYR 578.90"
        }
    },

    // Order 4
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
        payment_status: "Paid",
        payment_due: "N/A",
        tracking_number: "Pending Shipment",
        products: [
             { id: 1, img: 'img/office-chair-mesh.webp', name: 'Office Chair - Ergonomic Mesh Back', unit_price: 'MYR 250.00', quantity: '5 Unit', total_price: 'MYR 1250.00' } // <-- Updated path
        ],
        summary: {
            subtotal_excl_tax: "MYR 1250.00",
            voucher_incl_tax: "-MYR 50.00",
            credit_notes: "0.00",
            subtotal_discounted: "MYR 1200.00",
            tax: "MYR 0.00",
            shipping_cost_incl_tax: "MYR 115.30",
            total: "MYR 1,315.30"
        }
    },

    // Order 5
    {
        supplier: "Yang Terpaling Supplier Sdn Bhd",
        order_id: "#85260 - 4895",
        status: "Rejected",
        amount: "MYR 0.00",
        order_created: "12/10/2023",
        number_of_products: 2,
        channel: "Platform",
        promo_code: "FREESHIP",
        fulfillment: "N/A",
        estimated_delivery: "N/A",
        payment_method: "Platform Credit",
        payment_status: "Refunded",
        payment_due: "N/A",
        tracking_number: "N/A",
        products: [
             { id: 1, img: 'img/thermos-1l.jpg', name: 'Stainless Steel Thermos (1L)', unit_price: 'MYR 65.00', quantity: '10 Unit', total_price: 'MYR 650.00' }, // <-- Updated path
             { id: 2, img: 'img/shopping-bags-set.png', name: 'Reusable Shopping Bags (Set of 5)', unit_price: 'MYR 15.00', quantity: '20 Set', total_price: 'MYR 300.00' } // <-- Updated path
        ],
        summary: {
            subtotal_excl_tax: "MYR 950.00",
            voucher_incl_tax: "0.00",
            credit_notes: "-MYR 950.00",
            subtotal_discounted: "MYR 0.00",
            tax: "MYR 0.00",
            shipping_cost_incl_tax: "MYR 0.00",
            total: "MYR 0.00"
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