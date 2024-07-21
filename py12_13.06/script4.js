function promptPromise(text) {
    return new Promise((resolve, reject) => {
        const result = prompt(text);
        if(result !== null){
            resolve(result);
        } 
        else{
            reject();
        }
    });
}

promptPromise("Як тебе звуть?")
    .then(name => console.log(`Тебе звуть ${name}`))
     .catch(() => console.log('Ну навіщо морозитися, нормально ж спілкувалися'));
