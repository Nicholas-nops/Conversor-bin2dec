function isBinary() {
    $('#sequence').keyup(function (e) {
        if (e.which === 48 || e.which === 49 || e.which === 8) {
        } else {
           this.value = this.value.replace(/[^\\.]/g, '');
           alert('Remeber, binary sequence contains only 0 and 1')
        }
    });
}
function binToDec() {
    try {
        $('#decimal').text('')
        let sequence = $('#sequence').val();
        if (sequence.length > 8) {
            alert('Pay attetion!The sequence can has at max 8 digits.');
        } else {
            var bin = $('#sequence').val();
            var dec = parseInt(bin,2)
            $('#decimal').append('In decimal: ' + dec)
            
        }
    } catch (err) {
        console.log(err);
    }
}