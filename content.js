let data = [];

function extractData() {
  const elements = document.querySelectorAll(".your-business-card-selector"); 
  elements.forEach((el) => {
    const name = el.querySelector(".your-name-selector")?.innerText;
    const address = el.querySelector(".your-address-selector")?.innerText;
    const rating = el.querySelector(".your-rating-selector")?.innerText;
    
    if (name && address && rating) {
      data.push({ name, address, rating });
    }
  });
  console.log("Data extracted:", data);
}

function downloadData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  chrome.downloads.download({ url, filename: "google_maps_data.json" });
}
