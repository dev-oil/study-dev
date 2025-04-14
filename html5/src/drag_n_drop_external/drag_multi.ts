const dragover = (e: DragEvent): void => {
  e.preventDefault();
};

const drop = (e: DragEvent): void => {
  e.preventDefault();

  const files: FileList | null = e.dataTransfer?.files;
  const droppable: HTMLElement | null = document.querySelector('.droppable');

  if (!files || !droppable) return;

  for (const file of Array.from(files)) {
    const imageContainer: HTMLDivElement = document.createElement('div');
    imageContainer.className = 'img-container';

    const img: HTMLImageElement = document.createElement('img');
    const reader: FileReader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      const result = event.target?.result;
      if (typeof result === 'string') {
        img.src = result;
      }
    };

    reader.readAsDataURL(file);
    imageContainer.appendChild(img);
    droppable.appendChild(imageContainer);
  }
};
