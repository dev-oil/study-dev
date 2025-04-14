const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
const myContext = canvas.getContext('2d');

// 사각형 그리기
// myContext?.strokeRect(10, 10, 200, 150);
// myContext?.fillRect(250, 10, 200, 150);
// myContext?.fillRect(10, 170, 200, 150);
// myContext?.clearRect(270, 20, 100, 50);

// 선 그리기
// myContext?.beginPath();
// myContext?.moveTo(50, 50);
// myContext?.lineTo(250, 50);
// myContext?.stroke();

// 원 그리기
// myContext?.beginPath();
// myContext?.arc(150, 150, 50, 0, Math.PI * 2);
// myContext?.stroke();

// 텍스트 그리기
// myContext && (myContext.font = '24px Arial'); // myContext.font = '24px Arial'; 이렇게 대입에서는 ?. 사용할 수 없음 (함수 호출이나 프로퍼티 접근 시 안전하게 처리하라는 용도)
// myContext?.fillText('Hello Canvas!', 50, 250);

// 색상 및 선 스타일 설정
// myContext && (myContext.strokeStyle = 'blue');
// myContext && (myContext.lineWidth = 4);
// myContext && (myContext.fillStyle = 'rgba(255, 0, 0, 0.3)');
// myContext?.strokeRect(300, 200, 100, 100);
// myContext?.fillRect(300, 200, 100, 100);

// 그라데이션
if (myContext) {
  const gradient = myContext.createLinearGradient(0, 0, 200, 0);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1, 'blue');
  myContext.fillStyle = gradient;
  myContext.fillRect(0, 0, 200, 100);

  const gradient2 = myContext.createLinearGradient(150, 50, 5, 150);
  gradient2.addColorStop(0, 'yellow');
  gradient2.addColorStop(1, 'green');
  myContext.fillStyle = gradient2;
  myContext.fillRect(0, 100, 200, 100);
}
