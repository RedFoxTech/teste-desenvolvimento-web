function handleFile(event, id){
  const fileName = document.querySelector(id);
  fileName.innerHTML = event.target.value.split("\\").pop();
}

export default handleFile;