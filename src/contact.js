export default function createContact() {
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
    bodyContent.textContent = "Contact Us";
    body.appendChild(bodyContent);

    const hoursBox = document.createElement('div');
    hoursBox.className = 'contactDetailsBox';
    hoursBox.innerHTML = 'Hours<br>';
    hoursBox.innerHTML += '<br>Monday - Thursday<br>';
    hoursBox.innerHTML += '<br>11A - 9P<br>';
    hoursBox.innerHTML += '<br>Friday - Saturday<br>';
    hoursBox.innerHTML += '<br>11A - 11P<br>';
    hoursBox.innerHTML += '<br>Closed Sundays';
    bodyContent.appendChild(hoursBox);

    const contactDetailsBox = document.createElement('div');
    contactDetailsBox.className = 'contactDetailsBox';
    bodyContent.appendChild(contactDetailsBox);

    const contactPhone = document.createElement('p');
    contactPhone.textContent = "(555) 456-7890"
    contactDetailsBox.appendChild(contactPhone);
    const contactAddress = document.createElement('p');
    contactAddress.textContent = "123 Main Ln, YourCity";
    contactDetailsBox.appendChild(contactAddress);
    const contactEmail = document.createElement('p');
    contactEmail.textContent = "craig@notarealaddress.com"
    contactDetailsBox.appendChild(contactEmail);

}