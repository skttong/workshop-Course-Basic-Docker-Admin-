# ใช้ Node.js image เป็น base
FROM node:18

# กำหนด working directory ใน container
WORKDIR /app

# คัดลอกไฟล์ package.json และติดตั้ง dependencies
COPY package.json ./
RUN npm install

# คัดลอกไฟล์โปรเจ็กต์ทั้งหมดไปยัง container
COPY . .

# สร้าง build สำหรับ production
RUN npm run build

# ใช้ serve package เพื่อรัน production build
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# เปิดพอร์ตสำหรับ ReactJS frontend
EXPOSE 3000
