async function fetchPost(): Promise<void> {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    const data = await response.json();

    document.getElementById('data')!.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
      `;
  } catch (error) {
    console.error('데이터 에러 발생', error);
  }
}
