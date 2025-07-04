app.post("/webhook", (req, res) => {
  try {
    const intent = req.body.queryResult.intent.displayName;
    const params = req.body.queryResult.parameters;

    if (intent === "CreateEvent") {
      const eventName = params["event-name"];
      const dateTime = params["date-time"];

      return res.json({
        fulfillmentText: `✅ Scheduled "${eventName}" at ${dateTime}`
      });
    }

    res.json({ fulfillmentText: "❌ Unrecognized intent" });

  } catch (err) {
    console.error("💥 Webhook error:", err);
    res.json({ fulfillmentText: "⚠️ Server error: " + err.message });
  }
});



