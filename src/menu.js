import menuItems from './menu.json';

export default function createMenu() {
    if (!!document.getElementById('menuTop')) {
        const menuTop = document.getElementById('menuTop');
        content.removeChild(menuTop)
    }

    if (!!document.getElementById('body')) {
        const body = document.getElementById('body');
        while (body.lastElementChild) {
            body.removeChild(body.lastElementChild);
        }

        content.removeChild(body);
    }
    
    const menuTop = document.createElement('div');
    menuTop.setAttribute('id', 'menuTop');
    menuTop.textContent = 'Our Menu';
    content.insertBefore(menuTop, foot);

    const body = document.createElement('div');
    body.setAttribute('id', 'body');   
    content.insertBefore(body, foot);

    menuItems.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'itemCard';
        const itemImg = document.createElement('img');
        itemImg.className = 'itemImg';
        const itemName = document.createElement('div');
        itemName.className = 'itemText';
        const itemDescr = document.createElement('div');
        itemDescr.className = 'itemText';

        itemImg.setAttribute('src', item.imgpath);
        itemName.textContent = item.name;
        itemDescr.textContent = item.description;

        itemCard.appendChild(itemImg);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemDescr);
        body.appendChild(itemCard);
    });
}

