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
        promo_code: "N/A",
        fulfillment: "3PL (PosLaju)",
        estimated_delivery: "12/10/2023",
        payment_method: "Finance Credit: BSN",
        payment_status: "Invoiced Approved",
        payment_due: "11/12/2023",
        tracking_number: "ABX123145",
        products:[
            { id: 1, img: 'img/100plus-lemon-lime-325ml.jpg', name: '100 Plus Lemon Lime 325ml (24 Units Per Carton)', unit_price: 'MYR 2.50', quantity: '24 Unit', total_price: 'MYR 60.00' },
            { id: 2, img: 'img/100plus-regular-500ml.png', name: '100 PLUS REGULAR Bottle 500ml', unit_price: 'MYR 3.00', quantity: '24 Unit', total_price: 'MYR 72.00' },
            { id: 3, img: 'img/glo-lemon-900ml.jpg', name: 'Glo Lemon Dishwashing Liquid 900ml', unit_price: 'MYR 5.50', quantity: '12 Unit', total_price: 'MYR 66.00' },
            { id: 4, img: 'img/shopping-bags-set.jpeg', name: 'Shopping Bags Set (Reusable)', unit_price: 'MYR 12.00', quantity: '10 Unit', total_price: 'MYR 120.00' },
            { id: 5, img: 'img/a4-paper.jpg', name: 'A4 Paper 500 Sheets', unit_price: 'MYR 15.00', quantity: '5 Unit', total_price: 'MYR 75.00' },
            { id: 6, img: 'img/ballpoint-pens-box.jpg', name: 'Ballpoint Pens Box (50 pcs)', unit_price: 'MYR 18.00', quantity: '3 Unit', total_price: 'MYR 54.00' },
            { id: 7, img: 'img/sunflower-oil-5l.jpg', name: 'Sunflower Oil 5L', unit_price: 'MYR 35.00', quantity: '6 Unit', total_price: 'MYR 210.00' },
            { id: 8, img: 'img/thermos-1l.jpg', name: 'Thermos Flask 1L', unit_price: 'MYR 40.00', quantity: '4 Unit', total_price: 'MYR 160.00' },
            { id: 9, img: 'img/office-chair-mesh.png', name: 'Office Chair Mesh Back', unit_price: 'MYR 120.00', quantity: '2 Unit', total_price: 'MYR 240.00' },
            { id: 10, img: 'img/premium-rice-10kg.png', name: 'Premium Rice 10kg', unit_price: 'MYR 45.00', quantity: '8 Unit', total_price: 'MYR 360.00' },
            { id: 11, img: 'img/stapler-heavy-duty.png', name: 'Heavy Duty Stapler', unit_price: 'MYR 28.00', quantity: '5 Unit', total_price: 'MYR 140.00' }
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
             { id: 1, img: 'img/premium-rice-10kg.png', name: 'Premium Grade AA Rice (10kg Bag)', unit_price: 'MYR 45.00', quantity: '20 Bag', total_price: 'MYR 900.00' }, // <-- Updated path
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
        fulfillment: "Seller's Fleet",
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
             { id: 1, img: 'img/office-chair-mesh.png', name: 'Office Chair - Ergonomic Mesh Back', unit_price: 'MYR 250.00', quantity: '5 Unit', total_price: 'MYR 1250.00' } // <-- Updated path
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
             { id: 2, img: 'img/shopping-bags-set.jpeg', name: 'Reusable Shopping Bags (Set of 5)', unit_price: 'MYR 15.00', quantity: '20 Set', total_price: 'MYR 300.00' } // <-- Updated path
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
    card.className = `detail-card ${order.status.toLowerCase().replace(/\s+/g, '-')}`; // Use status for potential styling, replace spaces

    // Calculate number of products from array if available
    const numProductsDisplay = order.products ? order.products.length : (order.number_of_products || 'N/A');

    card.innerHTML = `    
    <div class="detail-card-header">
        <div class="detail-card-header-left">
            <div>
                <h2 id="detailSupplier">${order.supplier}</h2>
                <span class="detail-order-id" id="detailOrderId">${order.order_id}</span>
            </div>
            <span class="detail-status ${order.status.toLowerCase().replace(/\s+/g, '-')}" id="detailStatus">${order.status}</span>
        </div>
        <div class="detail-card-header-right">
            <span class="detail-amount" id="detailAmount">${order.amount}</span>
        </div>
    </div>

    <div class="detail-card-body">
        <div class="detail-grid">
                <div class="detail-item">
                <span class="title">Order Created</span>
                <span class="content" id="detailOrderCreated">${order.order_created}</span>
            </div>
            <div class="detail-item">
                <span class="title">Number of Products</span>
                <span class="content" id="detailNumProducts">${numProductsDisplay}</span>
            </div>
                <div class="detail-item">
                <span class="title">Channel</span>
                <span class="content" id="detailChannel">${order.channel}</span>
            </div>
                <div class="detail-item">
                <span class="title">Promo Code</span>
                <span class="content" id="detailPromoCode">${order.promo_code}</span>
            </div>
            <div class="detail-item">
                <span class="title">Fulfillment</span>
                <span class="content" id="detailFulfillment">${order.fulfillment}</span>
            </div>
            <div class="detail-item">
                <span class="title">${order.delivered_on ? 'Delivered On' : 'Estimated Delivery'}</span>
                <span class="content" id="detailEstimatedDelivery">${order.delivered_on || order.estimated_delivery || 'N/A'}</span>
            </div>
            <div class="detail-item">
                <span class="title">Payment Method</span>
                <span class="content" id="detailPaymentMethod">${order.payment_method}</span>
            </div>
            <div class="detail-item">
                <span class="title">Payment Status</span>
                <span class="content" id="detailPaymentStatus">${order.payment_status}</span>
            </div>
            <div class="detail-item">
                <span class="title">Payment Due</span>
                <span class="content" id="detailPaymentDue">${order.payment_due}</span>
            </div>
            <div class="detail-item">
                <span class="title">Tracking Number</span>
                <span class="content" id="detailTrackingNumber">${order.tracking_number || 'N/A'}</span>
            </div>
            <!-- Add empty divs if needed to fill grid row -->
            <div class="detail-item"></div>
            <div class="detail-item"></div>
        </div>
    </div>

    <div class="detail-card-actions">
        <button class="detail-action-btn view-detail-btn">
            <i class="ph-bold ph-file-magnifying-glass"></i> View Detail
        </button>
        <button class="detail-action-btn download-detail-btn">
                <i class="ph-bold ph-cloud-arrow-down"></i> Download <i class="ph-bold ph-caret-down"></i>
        </button>
        <button class="detail-action-btn mark-received-btn">Mark Received</button>
    </div>
    `;

    const viewDetailButton = card.querySelector('.view-detail-btn');
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