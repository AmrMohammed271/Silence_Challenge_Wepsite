// إنشاء وظيفة لإضافة إيموجي ضاحك يسقط من أعلى الشاشة
function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = '😂';
    
    // موقع عشوائي على عرض الشاشة
    emoji.style.left = Math.random() * 100 + 'vw';
    // سرعة سقوط عشوائية لكل إيموجي
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's'; 
    
    // إضافة الإيموجي إلى عنصر body
    document.body.appendChild(emoji);
    
    // حذف الإيموجي عند انتهاء الحركة
    emoji.addEventListener('animationend', () => {
        emoji.remove();
    });
}

// إضافة إيموجي جديد كل 300 مللي ثانية
setInterval(createEmoji, 300);
