function dragstart(e: DragEvent) {
  document.getElementById('result')!.innerHTML = '드래그가 시작되었습니다.';
  e.dataTransfer?.setData('Text', (e.target as HTMLElement).id);
}

function dragging(e: DragEvent) {
  document.getElementById('result')!.innerHTML = '드래그 중입니당';
}

function dragend(e: DragEvent) {
  document.getElementById('result')!.innerHTML = '드래그 끗';
}

function dragenter(e: DragEvent) {
  document.getElementById('result')!.innerHTML = 'target 영역에 진입';
}

function dragover(e: DragEvent) {
  document.getElementById('result')!.innerHTML = 'target 영역위에 있음';
  e.preventDefault();
}

function dragleave(e: DragEvent) {
  document.getElementById('result')!.innerHTML = 'target 나감';
}

function drop(e: DragEvent) {
  e.preventDefault();

  const draggedId = e.dataTransfer?.getData('Text');
  const draggedEl = document.getElementById(draggedId!);
  const dropTarget = e.currentTarget as HTMLElement;

  if (!draggedEl || !dropTarget) return;

  // drop 대상이 box면 다시 box로 되돌리기
  if (dropTarget.id === 'box') {
    dropTarget.appendChild(draggedEl);
    alert('원래 영역에 드롭되었습니다.');
  }
  // target이면 target 영역으로 이동
  else if (dropTarget.id === 'target') {
    dropTarget.appendChild(draggedEl);
    alert('타겟에 드롭되었습니다.');
  } else {
    // 그 외 영역 무시 또는 에러 방지
    alert('허용되지 않은 영역입니다.');
  }
}

(window as any).dragstart = dragstart;
(window as any).dragging = dragging;
(window as any).dragend = dragend;
(window as any).dragenter = dragenter;
(window as any).dragover = dragover;
(window as any).dragleave = dragleave;
(window as any).drop = drop;
