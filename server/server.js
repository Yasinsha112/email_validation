const express = require("express");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config()
const app = express();
const PORT = process.env.PORT;

const API_TOKEN = process.env.API_TOKEN;

app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post("/validate-email", async (req, res) => {
  const { email } = req.body;

  try {
    const apiRes = await fetch("https://api.clearout.io/v2/email_verify/instant", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });

    const data = await apiRes.json();

    if (data.data.status === "valid") {
      res.json({ status: "valid" });
    } else {
      res.json({ status: "invalid", reason: data.data.sub_status?.desc || data.data.status });
    }
  } catch (error) {
    res.status(500).json({ status: "error", reason: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
