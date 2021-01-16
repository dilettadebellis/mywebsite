export function downloadFile(uri, name) {
  const link = document.createElement("a");
  link.setAttribute("download", name);
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
