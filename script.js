function handleResize() {
  const div = document.getElementById("input-div");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const newWidth = (0.49*width).toString();

  div.style.width = newWidth.concat("px");
}

window.addEventListener('resize', handleResize);
