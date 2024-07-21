function createLoginForm(parent) {
    const form = document.createElement('form');
    form.className = 'login-form';

    const loginInput = document.createElement('input');
    loginInput.type = 'text';
    loginInput.placeholder = 'Login';
    form.appendChild(loginInput);

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Password';
    form.appendChild(passwordInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Login';
    form.appendChild(submitButton);

    parent.appendChild(form);

    return { form, loginInput, passwordInput, submitButton };
}

function loginPromise(parent) {
    return new Promise((resolve, reject) => {
        const { form, loginInput, passwordInput, submitButton } = createLoginForm(parent);

        submitButton.addEventListener('click', () => {
            const login = loginInput.value;
            const password = passwordInput.value;
            resolve({ login, password });
        });
    });
}

loginPromise(document.getElementById('formContainer')).then(({ login, password }) => {
    console.log(`Ви ввели ${login} та ${password}`);
});
