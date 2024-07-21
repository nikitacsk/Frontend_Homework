function confirmPromise(text) {
    return new Promise((resolve, reject) => {
        const result = confirm(text);
        if (result){
            resolve();
        } 
        else{
            reject();
        }
    });
}

confirmPromise('Проміси це складно?')
    .then(() => console.log('не так вже й складно'))
    .catch(() => console.log('respect за посидючість і уважність'));
