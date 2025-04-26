const droparea = document.getElementById('droparea');
const dropImage = document.createElement('img');

const dragenter = (e: DragEvent) => {
  e.preventDefault();
};
const dragover = (e: DragEvent) => {
  e.preventDefault();
};
const drop = (e: DragEvent) => {
  const file = e.dataTransfer?.files[0];
  const reader = new FileReader();

  reader.onload = ((theFile) => {
    return (e) => {
      alert('ondrop');
      dropImage.src = e.target?.result;
      droparea?.appendChild(dropImage);
    };
  })(file);

  reader.readAsDataURL(file);

  e.stopPropagation(); // 이벤트 버블링 막아줌
  e.preventDefault();
};
