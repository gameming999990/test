
function downloadImage() {
    // ให้ html2canvas สร้างรูปภาพจากเนื้อหาของ 'main-content'
    html2canvas(document.querySelector('.main-content')).then(canvas => {
        // แปลง canvas เป็น URL ของรูปภาพ
        const imageURL = canvas.toDataURL('image/png');

        // สร้างลิงก์สำหรับดาวน์โหลด
        const downloadLink = document.createElement('a');
        downloadLink.href = imageURL;
        downloadLink.download = 'งานไรไม่รู้.png';

        // เพิ่มลิงก์ไปยังเอกสาร
        document.body.appendChild(downloadLink);

        // คลิกลิงก์
        downloadLink.click();

        // ลบลิงก์ทิ้ง
        document.body.removeChild(downloadLink);

        // แสดง SweetAlert
        showAlert();
    });
}

