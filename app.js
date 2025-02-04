const friends = [];

const addFriend = () => {
    const name = document.getElementById('friend');
    const listFriends = document.getElementById('listFriends');

    if (isValidName(name)) {
        alert('Please enter a valid Name.');
        name.value = '';
        return;
    }

    addToArray(name.value);
    addToList(name.value, listFriends);

    name.value = '';
};

const sortFriend = () => {
    const index = getRandomIndex(friends.length);
    const result = document.getElementById('result');

    if (result.children.length > 0) {
        result.innerHTML = '';
    }

    const message = `The chosen secret friend is "${friends[index]}"`;

    addToList(message, result);
};

const addToArray = (name) => {
    friends.push(name);
};

const addToList = (value, list) => {
    const item = document.createElement('li');
    item.textContent = value;
    list.appendChild(item);
};

const getRandomIndex = (max) => {
    return Math.floor(Math.random() * (max - 0));
}

const isValidName = (name) => {
    return !name.value.trim() || /[^a-zA-Z\u00C0-\u017F\s]/.test(name.value);
};