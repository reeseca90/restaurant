export default function createMenu() {
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
    bodyContent.textContent = "This is a placeholder text for the menu page.";
    body.appendChild(bodyContent);

}