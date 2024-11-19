const express = require("express");
const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); // ใช้สำหรับอัพโหลดไฟล์ชั่วคราว

require("dotenv").config();

const app = express();
const PORT = 5000;

// เชื่อมต่อ MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

// ตั้งค่า AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

// API สำหรับอัพโหลดไฟล์ไปยัง S3
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: require("fs").createReadStream(file.path),
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Failed to upload file.");
    }
    res.status(200).send(`File uploaded successfully. URL: ${data.Location}`);
  });
});

// ตัวอย่าง API อื่น
app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
