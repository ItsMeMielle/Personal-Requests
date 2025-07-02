// 1. Load Firebase SDKs only if not loaded
function loadFirebaseSDK(callback) {
  if (window.firebase?.apps?.length) {
    console.log("Firebase already loaded");
    callback();
    return;
  }

  const scripts = [
    "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",
    "https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"
  ];

  let loaded = 0;
  scripts.forEach(src => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      loaded++;
      if (loaded === scripts.length) {
        console.log("Firebase SDKs loaded");
        callback();
      }
    };
    script.onerror = () => console.error(`Failed to load Firebase script: ${src}`);
    document.head.appendChild(script);
  });
}

// 2. Initialize Firebase
function initFirebase() {
  if (!window.firebase || firebase.apps.length) {
    console.log("Firebase already initialized or not available");
    return;
  }

  const firebaseConfig = {
    apiKey: "AIzaSyCPMd9Qt59rVHFy4of5zuwEEMFzrzhWY_0",
    authDomain: "private-scry.firebaseapp.com",
    databaseURL: "https://private-scry-default-rtdb.firebaseio.com",
    projectId: "private-scry",
    storageBucket: "private-scry.firebasestorage.app",
    messagingSenderId: "792520074545",
    appId: "1:792520074545:web:c98c12e43f085de233bc10",
    measurementId: "G-K1QHXPPN67"
  };

  firebase.initializeApp(firebaseConfig);
  console.log("Firebase initialized");
}

// 3. Observe #mudoutput and send room/map data
function observeAndSendData(userId = window.profileName) {
  const mudOutput = document.querySelector("#mudoutput");

  let collecting = false;
  let roomNodes = [];

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      const added = Array.from(mutation.addedNodes).filter(node => node.nodeType === 1);

      for (const node of added) {
        const text = node.textContent || "";

        if (!collecting && /^The area is .* (darkness|light)\.$/i.test(text)) {
          collecting = true;
          roomNodes = [node];
          continue;
        }

        if (collecting) {
          if (node.classList.contains("prompt")) {
            // Done collecting: send to Firebase
            const roomHTML = roomNodes.map(n => n.outerHTML).join("");
            const mapHTML = document.querySelector("#magicmap")?.innerHTML || "";
            const payload = {
              room: roomHTML,
              map: mapHTML,
              timestamp: Date.now()
            };

            firebase.database().ref(`gameData/${userId}`).set(payload)
              .then(() => console.log("Sent to Firebase:", payload))
              .catch(err => console.error("Firebase write failed:", err));

            // Reset for next capture
            collecting = false;
            roomNodes = [];
            continue;
          }

          // Still collecting
          roomNodes.push(node);
        }
      }
    }
  });

  observer.observe(mudOutput, { childList: true });
  console.log("Now observing #mudoutput for room changes");
}

// 4. Combine all steps
loadFirebaseSDK(() => {
  initFirebase();
  observeAndSendData(window.profileName);
});
