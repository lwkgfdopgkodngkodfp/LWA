// Get the user's IP address using the ipify API
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;

    // Get device information
    const userAgent = navigator.userAgent;
    const deviceType = getDeviceType(userAgent);
    const deviceVersion = getDeviceVersion(userAgent);

    // Send the IP address and device information to the Discord Webhook
    const webhookUrl = 'https://discord.com/api/webhooks/1254953983848742982/ztykThnIN97VOwFRgKJ2I0cS6cY4Hj9FjWjNa24-4JK9uZuvE6PVzNu67GASCQJvgxrA';
    const message = ` ** New visitor from IP address: ${ipAddress} using a ${deviceType} ${deviceVersion} ** `;

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: message
      })
    })
    .then(response => response.json())
    .then(data => console.log(`Sent IP address and device information to Discord Webhook: ${data}`))
    .catch(error => console.error(`Error sending IP address and device information to Discord Webhook: ${error}`));
  })
  .catch(error => console.error(`Error getting IP address: ${error}`));

// Helper functions to extract device information from user agent
function getDeviceType(userAgent) {
  if (userAgent.match(/Android/i)) return 'Android';
  if (userAgent.match(/iPhone/i) || userAgent.match(/iPad/i)) return 'iOS';
  if (userAgent.match(/Windows/i)) return 'Windows';
  if (userAgent.match(/Macintosh/i)) return 'Mac';
  return 'Unknown';
}

function getDeviceVersion(userAgent) {
  const versionRegex = /\b(?:Android|iOS|Windows|Mac OS|OS X) ([\d._]+)/;
  const match = userAgent.match(versionRegex);
  return match && match[1] ? match[1] : '1';
}
//-------

 // Get the current URL of the visiting person's website
 const currentUrl = window.location.href;

 // Send the URL to the Discord Webhook
 const webhookUrl = 'https://discord.com/api/webhooks/1254953983848742982/ztykThnIN97VOwFRgKJ2I0cS6cY4Hj9FjWjNa24-4JK9uZuvE6PVzNu67GASCQJvgxrA';
 const message = `New visitor from ${currentUrl}!`;

 fetch(webhookUrl, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     content: message
   })
 })
 .then(response => response.json())
 .then(data => console.log(`Sent URL to Discord Webhook: ${data}`))
 .catch(error => console.error(`Error sending URL to Discord Webhook: ${error}`));

 // ----


//----

