export function sendWhatsApp(data: Record<string, any>) {
  try {
    const ownerNumber = "917068531095"; // ✅ WhatsApp number in international format (91 + number without spaces)

    // Format date
    let formattedDate = data.date;
    if (data.date) {
      try {
        formattedDate = new Date(data.date).toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } catch (e) {
        formattedDate = data.date;
      }
    }

    // Create message
    let message = `🎨 *New Nail Art Appointment Request*\n\n`;
    if (data.date) message += `📅 *Date:* ${formattedDate}\n`;
    if (data.time) message += `⏰ *Time:* ${data.time}\n`;
    if (data.people) message += `👥 *Number of People:* ${data.people}\n`;
    if (data.budget) message += `💰 *Budget Range:* ₹${data.budget}\n`;
    if (data.phone) message += `📱 *Client Contact:* +91${data.phone}\n`;

    Object.entries(data).forEach(([key, value]) => {
      if (
        !["date", "time", "people", "budget", "phone"].includes(key) &&
        value
      ) {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
        message += `${formattedKey}: ${value}\n`;
      }
    });

    message += `\n_I would like to book an appointment for nail art services. Please confirm availability and provide any additional details needed._\n\nThank you! ✨`;

    const encodedMsg = encodeURIComponent(message);

    // ✅ Multiple WhatsApp URL formats to handle both saved and unsaved numbers
    const urls = [
      // Method 1: Standard API format (works best for saved numbers)
      `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodedMsg}`,
      // Method 2: With app_absent parameter (better for unsaved numbers)
      `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodedMsg}&app_absent=0`,
      // Method 3: wa.me format (alternative approach)
      `https://wa.me/${ownerNumber}?text=${encodedMsg}`,
      // Method 4: Direct send format (most compatible)
      `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodedMsg}&source=website`,
    ];

    // Try each URL format until one works
    let opened = false;
    for (let i = 0; i < urls.length && !opened; i++) {
      try {
        const newWindow = window.open(urls[i], "_blank");
        if (newWindow) {
          opened = true;
          // Give it a moment to load, then check if it actually opened
          setTimeout(() => {
            if (newWindow.closed) {
              // If the first window closed, try the next format
              if (i < urls.length - 1) {
                window.open(urls[i + 1], "_blank");
              }
            }
          }, 1000);
        }
      } catch (error) {
        console.log(`WhatsApp URL method ${i + 1} failed, trying next...`);
        continue;
      }
    }

    // If all methods fail, show a manual message option
    if (!opened) {
      const manualMessage = `Please send this message manually to +91 7068531095:\n\n${message}`;
      alert(
        "WhatsApp couldn't open automatically. Please copy this message and send it manually:"
      );
      console.log(manualMessage);
    }

    return true;
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return false;
  }
}

// ✅ Instagram messaging function
export function sendInstagram(data: Record<string, any>) {
  try {
    const instagramUsername = "tisha_parlour_";

    // Format date
    let formattedDate = data.date;
    if (data.date) {
      try {
        formattedDate = new Date(data.date).toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      } catch (e) {
        formattedDate = data.date;
      }
    }

    // Create message for Instagram
    let message = `🎨 New Nail Art Appointment Request\n\n`;
    if (data.date) message += `📅 Date: ${formattedDate}\n`;
    if (data.time) message += `⏰ Time: ${data.time}\n`;
    if (data.people) message += `👥 Number of People: ${data.people}\n`;
    if (data.budget) message += `💰 Budget Range: ₹${data.budget}\n`;
    if (data.phone) message += `📱 Client Contact: +91${data.phone}\n`;

    Object.entries(data).forEach(([key, value]) => {
      if (
        !["date", "time", "people", "budget", "phone"].includes(key) &&
        value
      ) {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1);
        message += `${formattedKey}: ${value}\n`;
      }
    });

    message += `\nI would like to book an appointment for nail art services. Please confirm availability and provide any additional details needed.\n\nThank you! ✨`;

    // Instagram deep link - opens Instagram app or web
    const instagramUrl = `https://instagram.com/direct/t/${instagramUsername}`;

    // Try to open Instagram
    try {
      window.open(instagramUrl, "_blank");

      // Show instructions for manual messaging
      setTimeout(() => {
        alert(
          `Instagram opened! Please send this message to @${instagramUsername}:\n\n${message}`
        );
      }, 1000);
    } catch (error) {
      // Fallback: show manual message
      alert(
        `Please send this message to @${instagramUsername} on Instagram:\n\n${message}`
      );
      console.log(`Instagram message for @${instagramUsername}:`, message);
    }

    return true;
  } catch (error) {
    console.error("Error sending Instagram message:", error);
    return false;
  }
}
