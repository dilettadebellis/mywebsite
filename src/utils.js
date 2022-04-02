export function downloadFile(uri, name) {
  const link = document.createElement("a");
  link.setAttribute("download", name);
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function getAge(birthDayString) {
  const today = new Date();
  const birthDate = new Date(birthDayString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
