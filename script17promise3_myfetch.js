
const cache = {
    name: 'Code Malayalam',
}

function getJson(url) {

    if (cache){
        return cache;
    }

    return fetch(url)
    .then((data) => {
        return data.json();
    })
}