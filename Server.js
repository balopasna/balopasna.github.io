const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/approve", async (req, res) => {
  const { paymentId } = req.body;

  // અહીં Pi API દ્વારા Payment Approve કરશો

  res.json({
    success: true,
    paymentId
  });
});

app.post("/complete", async (req, res) => {
  const { paymentId, txid } = req.body;

  // અહીં Pi API દ્વારા Payment Complete કરશો

  res.json({
    success: true,
    paymentId,
    txid
  });
});

app.get("/", (req, res) => {
  res.send("Balopasna Pi Backend Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
