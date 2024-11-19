# ใช้ Node.js image เป็น base
FROM node:18

# กำหนด working directory ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และติดตั้ง dependencies
COPY package.json ./
RUN npm install

# คัดลอกไฟล์โปรเจ็กต์ทั้งหมดไปยัง container
COPY . .

# เปิดพอร์ตที่ backend ใช้
EXPOSE 5000

# คำสั่งเริ่มต้นเมื่อ container เริ่มทำงาน
CMD ["node", "app.js"]
