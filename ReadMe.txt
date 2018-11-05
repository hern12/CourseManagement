CourseManagement Skillane

ตัว folder มี 3 ไฟล์หลักๆ คือ client, server และ CourseDB.sql ครับ
ตัว  CourseDB.sql เป็น sql script สำหรับสร้าง DB และ insert ข้อมูลบางส่วนเช่น User, Role เป้นต้นครับ
ตัว client ใช้ vue ครับ
ตัว server ใช้ expressjs ครับ
ตัว sql ใช้ Microsoft SQL ครับ

การติดตั้ง DB
ตัว Sql server ผมใช้ Sql Authentication นะครับ Config file สำหรับ server จะอยู่ใน PATH server/config/dbConfig.js สามารถไปแก้ข้อมูลที่อยู่ในนั้นได้นะครับเพื่อให้สามารถเชื่อมต่อเข้า db ได้
เปิด Sql server แล้วสร้าง DB ขึ้นมาชื่อ CourseManagement จากนั้นนำ CourseDB.sql ไป Run

การติดตั้ง client และ server
1.ตัว client และตัว server เข้าผ่าน command และรันคำสั่ง yarn ทั้ง 2 Folder

การรันระบบสำหรับ dev
client สั่ง yarn serve
server สั่ง yarn start

ตัว login ผมไม่ได้ทำระบบ Register ไว้เพราะฉะนั้นสามารถดู user ได้ที่ tblUsers นะครับ

Login Detail

Instructor
ID: instructor1
Pass: 123123

Student
ID: student1
Pass: 123123

ตัวระบบนี้ผมคิดว่าน่าจะทำงานครอบคลุมตาม requirement ที่ไฟล์  PDF นะครับ
ปล.ขออภัยที่ส่ง assignment ล่าช้านะครับพอดีผมติด assignment ของที่อื่นร่วมกับงานที่ทำประจำเลยมีเวลาทำจริงๆจังแค่เสาร์อาทิตย์ที่ผ่านมาครับ ผิดถูกประการใดผมขออภัยมา ณ ที่นี้ด้วยนะครับ และสุดท้ายขอบคุณสำหรับ assignment สนุกๆครับ

