import './style.css';
import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const createMain = (() => {
    const content = document.querySelector('#content');

    const head = document.createElement('div');
    head.setAttribute('id', 'head');
    content.appendChild(head);

    const logo = document.createElement('div');
    logo.setAttribute('id', 'logo');
    logo.textContent = 'Culinary by Craig';
    head.appendChild(logo);

    const controls = document.createElement('div');
    controls.setAttribute('id', 'controls');
    head.appendChild(controls);

    const homeLink = document.createElement('p');
    homeLink.textContent = 'Home';
    homeLink.addEventListener('click', createHome);

    const menuLink = document.createElement('p');
    menuLink.textContent = 'Menu';
    menuLink.addEventListener('click', createMenu);

    const contactLink = document.createElement('p');
    contactLink.textContent = 'Contact';
    contactLink.addEventListener('click', createContact);

    controls.appendChild(homeLink);
    controls.appendChild(menuLink);
    controls.appendChild(contactLink);

    

    const foot = document.createElement('div');
    foot.setAttribute('id', 'foot');
    content.appendChild(foot);

    const footContent = document.createElement('p');
    footContent.textContent = "Design by Craig, 2021";
    foot.appendChild(footContent);
})();

createHome();