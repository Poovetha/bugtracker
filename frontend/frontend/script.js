let bugId = 1;

// Select the form and table body
const bugForm = document.getElementById("bugForm");
const bugTableBody = document.querySelector("#bugTable tbody");

// Listen for form submission
bugForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  // Get form data
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const severity = document.getElementById("severity").value;

  // Create a new row in the table
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${bugId}</td>
    <td>${title}</td>
    <td>${severity}</td>
    <td><span class="status">Open</span></td>
    <td>
      <button class="markBtn">✔️ Fix</button>
      <button class="deleteBtn">🗑️ Delete</button>
    </td>
  `;

  // Add to table
  bugTableBody.appendChild(row);

  // Reset form
  bugForm.reset();
  bugId++;
});

// Handle actions (Fix / Delete)
bugTableBody.addEventListener("click", function (e) {
  if (e.target.classList.contains("markBtn")) {
    // Mark as fixed
    const statusCell = e.target.closest("tr").querySelector(".status");
    statusCell.textContent = "Fixed";
    statusCell.style.color = "green";
  }

  if (e.target.classList.contains("deleteBtn")) {
    // Delete row
    e.target.closest("tr").remove();
  }
});
