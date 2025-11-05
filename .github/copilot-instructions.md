## Repo overview

This is a small static front-end Order Module (no backend code in this repo). Key pages are:

- `index.html` — order list UI. Loads `base.css`, `order-table.css`, `script.js`, then `orders.js`.
- `order-detail.html` — order detail UI. Loads `orders.js` first, then `order-detail.js`.
- `orders.js` — the canonical in-repo data source: an array called `orders` containing order objects and product lines. This is *not* fetched from an API; agents may edit or read this file when making UI/data changes.
- `order-detail.js` — logic that reads URL param `orderId`, finds matching order in `orders` and injects DOM (IDs: `productLinesContainer`, `summaryTotal`, `detailSupplier`, etc.).
- `script.js` — small client behavior (tab switching) used on the list page.

## Big-picture architecture & data flow

- Single-page-per-concern pattern: list page (`index.html`) shows cards generated from `orders.js`. Detail page (`order-detail.html`) reads the same `orders.js` array and renders a detail view.
- Navigation: list -> detail uses URL parameter `orderId` produced with `encodeURIComponent(order.order_id)` in `orders.js` and read via `new URLSearchParams(window.location.search)` in `order-detail.js`.
- Data is synchronous and in-memory; tests or features that need remote data should either simulate fetch with a short timeout or add a simple fetch wrapper and maintain the same object shape.

## Developer workflows

- No build tooling. Open `index.html` or `order-detail.html` directly in a browser to run the app.
- Debugging: use browser DevTools. The code contains console warnings for missing DOM elements. When changing DOM ids or file load order, ensure `orders.js` is loaded before `order-detail.js` on the detail page.
- If you change `orders.js`, update any hardcoded `order_id` links or tests that depend on exact strings.

## Patterns & conventions to follow

- Data shape: each order in `orders` has top-level fields like `supplier`, `order_id`, `status`, `products` (array), and `summary` (object with `total`, `subtotal_excl_tax`, etc.). Keep that shape when adding or modifying orders.
- DOM IDs are relied on by JS: `orderTable` (list container), `productLinesContainer`, `summarySubtotalExcl`, `summaryTotal`, `detailStatus`, `detailAmount`, etc. Prefer updating JS helpers rather than changing IDs across files.
- File load order matters on the detail page: `orders.js` must be included before `order-detail.js`.
- Styling split: global/layout in `base.css`; list/table in `order-table.css`; detail-specific in `order-detail.css`. Keep new component styles in the appropriate file.

## Examples of actionable edits

- To add a new example order: edit `orders.js` and append an object following existing examples; ensure `products` and `summary` fields are populated.
- To add a new field to the detail card: add DOM placeholder with an id in `order-detail.html`, then set it in `order-detail.js` using `setTextContent(id, value)`.
- To change how list -> detail links are created, update `createOrderCard` in `orders.js` (it builds `order-detail.html?orderId=${encodedOrderId}`).

## Safety notes for AI agents

- Avoid refactoring load order or inlining module loaders; this is intentionally minimal and synchronous.
- Don't remove or rename DOM `id`s unless you update all JS references in the same change.
- Keep edits atomic and small (one UI/data change per commit) so the reviewer can validate easily in the browser.

## Where to look for examples

- `orders.js` — canonical data shapes and `createOrderCard` implementation.
- `order-detail.js` — how the page reads URL params and populates the DOM (use `setTextContent` helper pattern).
- `index.html` / `order-detail.html` — script load order and required DOM structure.

If anything here is unclear or you want more detail (for example, a recommended local test harness or adding a simple fake-API wrapper), tell me which area to expand and I'll iterate.
