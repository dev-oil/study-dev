const loginForm = document.getElementById(
  'loginForm'
) as HTMLFormElement | null;
const username = document.getElementById('username') as HTMLInputElement | null;
const userpw = document.getElementById('userpw') as HTMLInputElement | null;
const loginButton = document.getElementById(
  'loginButton'
) as HTMLButtonElement | null;
const welcome = document.getElementById('welcome') as HTMLElement | null;
const loggedInUser = document.getElementById(
  'loggedInUser'
) as HTMLElement | null;
const logoutButton = document.getElementById(
  'logoutButton'
) as HTMLButtonElement | null;

loginButton?.addEventListener('click', () => {
  if (!username || !userpw || !loginForm || !welcome || !loggedInUser) return;

  const id = username.value;
  const pw = userpw.value;

  if (id === 'user' && pw === '1111') {
    alert(`환영합니다, ${id}님!`);

    localStorage.setItem('loggedInUser', id);
    loginForm.style.display = 'none';
    welcome.style.display = 'block';
    loggedInUser.textContent = id;
  } else {
    alert('❌ 아이디 또는 비밀번호가 틀렸습니다.');
  }
});

logoutButton?.addEventListener('click', () => {
  if (!username || !userpw || !loginForm || !welcome || !loggedInUser) return;

  localStorage.removeItem('loggedInUser');

  loginForm.style.display = 'block';
  welcome.style.display = 'none';
  username.value = '';
  userpw.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  if (!username || !userpw || !loginForm || !welcome || !loggedInUser) return;

  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    loginForm.style.display = 'none';
    welcome.style.display = 'block';
    loggedInUser.textContent = storedUser;
  }
});
