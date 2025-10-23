document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('showMessageButton');
  const message = document.getElementById('thankYouMessage');

  if (button && message) {
    // 設定按鈕樣式（深藍底、白字）
    button.style.backgroundColor = '#003366';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.padding = '10px 20px';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '16px';

    button.addEventListener('click', () => {
      message.style.display = 'block';
    });
  }
});

