// Select the first video on the page
let video = document.querySelector("video");

if (video) {
    let videoURL = window.location.href; // Unique key for each video

    // Load saved timestamp
    chrome.storage.local.get([videoURL], function(result) {
        if (result[videoURL]) {
            video.currentTime = result[videoURL]; // Resume from last time
        }
    });

    // Save timestamp every 5 seconds
    setInterval(() => {
        chrome.storage.local.set({ [videoURL]: video.currentTime });
    }, 5000);
}
