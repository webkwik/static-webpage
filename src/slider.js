const mySiema = new Siema();
document.querySelector('.services-navigation-left').addEventListener('click', () => mySiema.prev());
document.querySelector('.services-navigation-right').addEventListener('click', () => mySiema.next());