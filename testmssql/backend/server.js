const express = require('express');
const sql = require('mssql'); // ใช้ mssql แทน mongoose

const app = express();
const PORT = 6000;

// SQL Server connection configuration
const config = {
  user: 'sa', // ชื่อผู้ใช้ (ตัวอย่างใช้ 'sa' สำหรับ SQL Server)
  password: process.env.DB_PASSWORD || 'your_password', // รหัสผ่าน (สามารถใช้ env variable)
  server: 'localhost', // ที่อยู่ของ SQL Server
  database: 'mydatabase', // ชื่อฐานข้อมูล
  options: {
    encrypt: true, // ใช้สำหรับการเชื่อมต่อกับ Azure SQL, ใช้ false สำหรับ Local
    trustServerCertificate: true // ใช้สำหรับการเชื่อมต่อในเครื่องที่ใช้ self-signed certificates
  }
};

// เชื่อมต่อกับ SQL Server
sql.connect(config)
  .then(pool => {
    console.log("Connected to MSSQL");
    // ตัวอย่างการทำงานกับฐานข้อมูล
    app.get("/", (req, res) => {
      res.send("Hello from Backend (MSSQL)!");
    });
  })
  .catch(err => {
    console.error("MSSQL connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
