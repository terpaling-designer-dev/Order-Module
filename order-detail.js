// --- START OF FILE detail-script.js ---

document.addEventListener('DOMContentLoaded', () => {
    // Get UI elements
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const detailContentArea = document.querySelector('.detail-content-area'); // Main container

    // Show loading message initially
    if (loadingMessage) loadingMessage.style.display = 'block';
    if (detailContentArea) detailContentArea.style.display = 'none'; // Hide content until ready


    // Get order ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('orderId');

    if (!orderId) {
        showError("No Order ID provided in the URL.");
        return;
    }

    // Find the order in the 'orders' array (assuming orders.js is loaded)
    // Use a timeout to simulate async loading (like an API call)
    setTimeout(() => {
        const order = orders.find(o => o.order_id === orderId);

        if (!order) {
            showError(`Order with ID "${orderId}" not found.`);
            return;
        }

        // Populate the page with order data
        populateOrderDetails(order);
        populateProductList(order.products || []); // Pass products array
        populateSummary(order.summary || {}); // Pass summary object
        showOrderContent(); // Make content visible

    }, 50); // Short delay to allow rendering, simulate fetch

});

function populateOrderDetails(order) {
    // Populate Header Card
    setTextContent('detailSupplier', order.supplier);
    setTextContent('detailOrderId', order.order_id);
    setTextContent('detailAmount', order.amount);

    const statusElement = document.getElementById('detailStatus');
    if (statusElement) {
         setTextContent('detailStatus', order.status);
         // Add class based on status for specific styling
         statusElement.className = `detail-status ${order.status.toLowerCase().replace(/\s+/g, '-')}`; // e.g., in-transit
    }


    // Populate Grid
    setTextContent('detailOrderCreated', order.order_created);
    // Calculate number of products from the array if possible
    const numProducts = order.products ? order.products.length : (order.number_of_products || 'N/A');
    setTextContent('detailNumProducts', numProducts);
    setTextContent('detailChannel', order.channel);
    setTextContent('detailPromoCode', order.promo_code);
    setTextContent('detailFulfillment', order.fulfillment);
    setTextContent('detailEstimatedDelivery', order.estimated_delivery || 'N/A');
    setTextContent('detailPaymentMethod', order.payment_method);
    setTextContent('detailPaymentStatus', order.payment_status);
    setTextContent('detailPaymentDue', order.payment_due);
    setTextContent('detailTrackingNumber', order.tracking_number || 'N/A');
}

function populateProductList(products) {
    const container = document.getElementById('productLinesContainer');
    if (!container) return;

    container.innerHTML = ''; // Clear previous content

    if (!products || products.length === 0) {
        container.innerHTML = '<div class="product-line"><p>No product details available.</p></div>';
        return;
    }

    products.forEach((product, index) => {
        const productLine = document.createElement('div');
        productLine.className = 'product-line';
        productLine.innerHTML = `
            <div class="col-index">${index + 1}</div>
            <div class="col-product">
                <img src="${product.img || 'https://via.placeholder.com/40'}" alt="Product Image" class="product-image">
                <span class="product-name">${product.name || 'N/A'}</span>
            </div>
            <div class="col-price">${product.unit_price || 'N/A'}</div>
            <div class="col-quantity">${product.quantity || 'N/A'}</div>
            <div class="col-total">${product.total_price || 'N/A'}</div>
        `;
        container.appendChild(productLine);
    });
}

function populateSummary(summary) {
     if (!summary) return; // Don't try to populate if no summary object

    setTextContent('summarySubtotalExcl', summary.subtotal_excl_tax || 'N/A');
    setTextContent('summaryVoucher', summary.voucher_incl_tax || 'N/A');
    setTextContent('summaryCreditNotes', summary.credit_notes || 'N/A');
    setTextContent('summarySubtotalDiscounted', summary.subtotal_discounted || 'N/A');
    setTextContent('summaryTax', summary.tax || 'N/A');
    setTextContent('summaryShipping', summary.shipping_cost_incl_tax || 'N/A');
    setTextContent('summaryTotal', summary.total || 'N/A');
}


// Helper function to safely set text content
function setTextContent(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    } else {
        console.warn(`Element with ID '${id}' not found.`);
    }
}


function showError(message) {
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const detailContentArea = document.querySelector('.detail-content-area');

    if (loadingMessage) loadingMessage.style.display = 'none';
    if (detailContentArea) detailContentArea.style.display = 'none';

    if (errorMessage) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }
}

function showOrderContent() {
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const detailContentArea = document.querySelector('.detail-content-area');

    if (loadingMessage) loadingMessage.style.display = 'none';
    if (errorMessage) errorMessage.style.display = 'none';
    if (detailContentArea) detailContentArea.style.display = 'block'; // Show the populated content
}


// --- END OF FILE detail-script.js ---