const products = [
    {
        productName: 'Pen',
        price: 10
    },
    {
        productName: 'Book',
        price: 20
    }
];
document.body.innerHTML = products.map((item) => {
    return `
    <div className="item">
        <h4>${item.productName}</h4>
        <div>Price: ${item.price}</div>
    </div>`;
});