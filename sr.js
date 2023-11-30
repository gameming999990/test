
function showAlert() {
    // สร้าง SweetAlert
    Swal.fire({
        title: 'สำเร็จ!',
        text: 'ดาวน์โหลดเรียบร้อย',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false,
    
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // แอตทาช function showAlert ในการคลิกปุ่ม
    document.querySelector('button').addEventListener('click', showAlert);
});
