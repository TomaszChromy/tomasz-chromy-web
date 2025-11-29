import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

if (!process.env.RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY is missing in .env");
}

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing required fields." });
  }

  const html = `
    <h2>New contact message from portfolio website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || "—"}</p>
    <p><strong>Message:</strong></p>
    <p>${(message || "").replace(/\n/g, "<br>")}</p>
  `;

  try {
    console.log("📨 Sending email via Resend…");

    // aktualny sposób użycia biblioteki Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.RESEND_TO,
      reply_to: email,
      subject: `New portfolio contact from ${name}`,
      html,
    });

    if (error) {
      console.error("❌ Resend error object:", error);
      return res
        .status(500)
        .json({ ok: false, error: error?.message || "Resend error" });
    }

    console.log("✅ Email sent. Resend data:", data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("❌ Contact API error (catch):", err);
    return res
      .status(500)
      .json({ ok: false, error: "Unexpected server error." });
  }
});

app.listen(port, () => {
  console.log(`📨 Contact API running at http://localhost:${port}`);
});
