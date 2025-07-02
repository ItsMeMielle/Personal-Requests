function fetchPartnerView(partnerId = window.partnerName) {
  const db = firebase.database();
  const ref = db.ref(`gameData/${partnerId}`);

  ref.once("value")
    .then(snapshot => {
      const data = snapshot.val();
      if (!data) {
        console.warn("No data found for partner:", partnerId);
        return;
      }

      const output = document.querySelector("#mudoutput");

      // Create a separator and label
      const divider = document.createElement("div");
      divider.style.borderTop = "1px solid #888";
      divider.style.margin = "8px 0";

      const label = document.createElement("div");
      label.style.color = "pink";
      label.style.fontWeight = "bold";
      label.textContent = `[${partnerId.toUpperCase()}'s View]`;

      const roomBlock = document.createElement("div");
      roomBlock.style.whiteSpace = "pre-wrap";
      roomBlock.style.fontStyle = "italic";
      roomBlock.style.opacity = 0.85;
      roomBlock.innerHTML = data.room;

      const mapPreview = document.createElement("div");
      mapPreview.innerHTML = data.map;
      mapPreview.style.marginTop = "4px";
      mapPreview.style.border = "1px dashed #ffffff";
      mapPreview.style.padding = "4px";
      mapPreview.style.width = "500px";
      mapPreview.style.background = "#000000";

      // Add everything to mudoutput
      output.appendChild(divider);
      output.appendChild(label);
      output.appendChild(roomBlock);
      output.appendChild(mapPreview);

      console.log("Partner view loaded from Firebase");
    })
    .catch(err => console.error("Failed to fetch partner view:", err));
}

fetchPartnerView(window.partnerName);
