window.onload = function() {
    var form = document.getElementById('form');
    var formData = {};
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        for (var i = 0; i < form.length; i++) {
            if (form[i].type != 'submit') {
                console.log('Found a match');
                formData[form[i].name] = form[i].value;
                form[i].value = '';
            }
        }

        console.log(formData);
    });
}