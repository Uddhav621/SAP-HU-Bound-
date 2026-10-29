    // Quantity counter state
let currentQty = 4;

// Update quantity on plus/minus click
function updateQty(amount) {
    currentQty = Math.max(1, currentQty + amount);
    document.getElementById('qtyValue').innerText = currentQty;
}

// Mimic scanner feature logic
function triggerScan(field) {
    alert("Barcode scanner initiated for: " + field);
}

// Add scanned entry to the data table
function submitData() {
    const mat = document.getElementById('materialNumber').value;
    const qty = document.getElementById('qtyValue').innerText;
    
    if (!mat) {
        return alert("Please enter a Material Number");
    }

    const now = new Date();
    const timeStr = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const tbody = document.getElementById('materialsBody');
    
    // Clear previous highlights from older table entries
    document.querySelectorAll('#materialsBody tr').forEach(r => r.classList.remove('highlighted-row'));

    // Insert new scan row dynamically at top
    const newRow = document.createElement('tr');
    newRow.className = "highlighted-row";
    newRow.innerHTML = `<td><b>${mat}</b></td><td>${qty}</td><td>${timeStr}</td>`;
    tbody.insertBefore(newRow, tbody.firstChild);

    // Refresh row tracking counts
    const count = tbody.getElementsByTagName('tr').length;
    document.getElementById('totalItemsText').innerText = "Total Items: " + count;
}

// Verification action submit logic
function completeVerification() {
    alert("Verification workflow finalized and submitted to SAP core system.");
}
