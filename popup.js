chrome.storage.local.get(null, function(items) {
    let videoList = document.getElementById("videoList");

    for (let url in items) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = url;
        a.textContent = url;
        a.target = "_blank";
        li.appendChild(a);
        videoList.appendChild(li);
    }
});
