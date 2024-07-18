const obj1 = {
    name: 'Code Malayalam',
    place: 'Kerala',
    rank: 1000
};
function myFunction(){
    const{
        name,
        place,
        rank,
    } = obj1;

    console.log(name, place, rank);
}

myFunction();