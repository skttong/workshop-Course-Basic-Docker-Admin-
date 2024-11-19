# ใช้ Node.js เป็น Base Image
FROM node:18-alpine

# ตั้ง Working Directory
WORKDIR /app

# คัดลอกไฟล์ Package และติดตั้ง Dependencies
COPY package.json ./
RUN npm install
RUN npm install express --save


# คัดลอกไฟล์ทั้งหมดไปยัง Container
COPY . .

# เปิด Port ที่ใช้
EXPOSE 6000

# รันแอปพลิเคชัน Backend
CMD ["node", "server.js"]
