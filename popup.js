document.getElementById('redirectBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = new URL(tabs[0].url);
    if (currentUrl.hostname.includes('medium.com')) {
      const freediumUrl = "https://freedium.cfd" + currentUrl.pathname;
      chrome.tabs.create({ url: freediumUrl });
    } else {
      alert('This is not a Medium article, but redirecting to Freedium - might not work as expected.');
      const freediumUrl = "https://freedium.cfd" + currentUrl.pathname;
      chrome.tabs.create({ url: freediumUrl });
    }
  });
});