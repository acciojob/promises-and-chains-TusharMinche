let btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    event.preventDefault(); // prevent page reload

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();

    if (name.length === 0 || age === '') {
        alert("Please enter valid details.");
        return; // stop execution
    }

    let myPromise = () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (parseInt(age) >= 18) res();
                else rej();
            }, 4000);
        });
    };

    myPromise()
        .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
        })
        .catch(() => {
            alert(`Oh sorry ${name}. You aren't old enough.`);
        });
});
