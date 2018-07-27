function submissionHandler(event) {
    var form = event.target;
    var formData = {};
    var valid = true;

    function validateEmail(email) {
        var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;
        return emailRegex.test(email);
    }

    for (var i = 0; i < form.length; i++) {
        var child = form[i];

        if (!valid) {
            return;
        } else if (child.type == 'text' && child.value.length > 1) {
            formData[child.name] = child.value;
        } else if (child.type == 'email' && validateEmail(child.value)) {
            formData[child.name] = child.value;
        } else if (child.type == 'textarea' && child.value.length > 1) {
            formData[child.name] = child.value;
        } else if (child.type == 'checkbox') {
            if (child.value == 1) {
                console.log(child.value);
                formData['bot'] = true;
            } else {
                console.log(child.value);
                formData['bot'] = false;
            }
        } else {
            valid = false;
        }
    }

    for (var i = 0; i < form.length; i++) {
        var child = form[i];
        if (child.type != 'submit') {
            child.value = '';
        }
    }

    console.log('Everything worked up until the post request.')

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = responseHandler;

    httpRequest.open('POST', form.action);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(JSON.stringify(formData));


    function responseHandler() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var message = document.createElement('div');
                message.id = 'message';
                message.innerText = httpRequest.responseText;
                
                form.style.display = 'none';
                form.parentNode.insertBefore(message, form.nextSibling);
            } else {
                var message = document.createElement('div');
                message.id = 'message';
                message.innerText = 'There was a problem with your submission. Please check your information and try again.';

                form.parentNode.insertBefore(message, form.nextSibling);
            }
        }
    }

}

window.onload = function() {
    var forms = document.forms;

    for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function(e){
            e.preventDefault();
            submissionHandler(e);
        });
    }
}

// Forms variable is an object, should contain all forms on the page. Length property won't lie.