function myFetch(url){
    return new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            success: function(msg){
                res(msg);
            },
            error: function(xhr, statusText){
                rej(statusText);
            },
        });
    });
}