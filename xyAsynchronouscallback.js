var button = document.getElementById('mybutton');
button.onclick = () => {
    console.log('started click event');
    var arr = [];
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        success: (data) => {
            console.log('ajax1 started', data.title);
            arr.push(data.title);
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/todos/2',
                success: (data) => {
                    console.log('ajax2 started', data.title);
                    arr.push(data.title);
                    console.log('ajax2 ended');
                    document.getElementById('mytext').value=arr.join('\n');
                },
                async: true
            });
            console.log('ajax1 ended');
        },
        async: true
    });
    console.log('ended click event');
}