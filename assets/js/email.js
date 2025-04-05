// Khởi tạo EmailJS với public key của bạn
(function() {
    emailjs.init("nLpco6llNE1VDHqhL"); // Thay YOUR_PUBLIC_KEY bằng public key của bạn từ EmailJS
})();

function sendEmail(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const userEmail = emailInput.value;
    const userMessage = messageInput.value;
    
    // Kiểm tra email hợp lệ
    if (!userEmail || !userEmail.includes('@')) {
        alert('Vui lòng nhập địa chỉ email hợp lệ!');
        return false;
    }
    
    // Kiểm tra message không được trống
    if (!userMessage.trim()) {
        alert('Vui lòng nhập nội dung tin nhắn!');
        return false;
    }
    
    const templateParams = {
        to_email: 'pnhoaian270205@gmail.com',
        from_email: userEmail,
        message: `Tin nhắn từ: ${userEmail}\n\nNội dung:\n${userMessage}`
    };

    // Thay YOUR_SERVICE_ID và YOUR_TEMPLATE_ID bằng ID thực từ tài khoản EmailJS của bạn
    emailjs.send('service_p4lmm3n', 'template_ukv4rwe', templateParams)
        .then(function(response) {
            alert('Cảm ơn bạn đã gửi tin nhắn cho An!');
            emailInput.value = '';
            messageInput.value = '';
        }, function(error) {
            console.log('Error:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại sau!');
        });

    return false;
} 