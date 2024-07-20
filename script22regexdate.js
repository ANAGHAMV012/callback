
function textOnChange(arg) {
    const label = document.getElementById('validation-label');
    const error = validate(arg.value);
    if (error) {
        label.innerText = error;
    } else {
        label.innerText = '';
    }
}

function validate(value) {
    const regex = /^([012]?\d|3[01])-([0]?\d|1[012])-(\d{4})$/i;
    const result = value.match(regex);
    console.log(result);
    if (result === null) {
        return 'Invalid String';
    }else {
        return '';
    }

}