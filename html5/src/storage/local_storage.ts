const saveData = (): void => {
  const keyInput = document.getElementById('key') as HTMLInputElement | null;
  const itemInput = document.getElementById('data') as HTMLInputElement | null;
  const resultDiv = document.getElementById('result') as HTMLDivElement | null;

  if (!keyInput || !itemInput || !resultDiv) return;

  const key: string = keyInput.value.trim();
  const item: string = itemInput.value.trim();

  if (!key || !item) {
    resultDiv.innerText = '키와 값을 모두 입력하세요.';
    return;
  }

  localStorage.setItem(key, item);
  resultDiv.innerText = `"${key}"에 "${item}"이 저장되었습니다.`;
};

const loadData = () => {
  document.getElementById('result')!.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const myKey = localStorage.key(i);
    document.getElementById(
      'result'
    )!.innerHTML += `${myKey} : ${localStorage.getItem(myKey)}`;
  }
};

const removeData = () => {
  localStorage.removeItem(key.value);
  document.getElementById('result')!.innerHTML += `${key.value} 항목 삭제`;
};

const removeAllData = () => {
  localStorage.clear();
};
