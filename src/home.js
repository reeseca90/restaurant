export default function createHome() {
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

    const body = document.createElement('div');
    body.setAttribute('id', 'body');
    content.insertBefore(body, foot);

    const bodyContent = document.createElement('div');
    bodyContent.setAttribute('id', 'bodyContent');
    bodyContent.textContent = "Welcome!";
    body.appendChild(bodyContent);

    const homeDesc = document.createElement('div');
    homeDesc.setAttribute('id', 'homeDesc');
    homeDesc.textContent = "A local establishment serving food from all over the world, you won't be disappointed by our menu."
    bodyContent.appendChild(homeDesc);

}