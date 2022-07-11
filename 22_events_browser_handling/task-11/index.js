function manageClasses() {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three_done').classList.toggle('three_done');
  const checkIfContains = document.querySelector('.four').classList.contains('some-class');
  if (checkIfContains) {
    document.querySelector('.four').classList.add('another-class');
  }
}
manageClasses();
