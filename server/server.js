const express = require("express");
const Clearout = require('@clearoutio/clearout');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const clearout = new Clearout(process.env.API_TOKEN, { timeout: 5000 });

app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post("/validate-email", async (req, res) => {
  const { email } = req.body;

  try {
    const result = await clearout.emailVerifier.verify({ email });

    if (result.status === "valid") {
      res.json({ status: "valid" });
    } else {
      res.json({ status: "invalid", reason: result.sub_status || result.status });
    }

  } catch (error) {
    res.status(500).json({ status: "error", reason: error.message });
  }
});

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
