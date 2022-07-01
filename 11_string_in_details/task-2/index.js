function sortContacts(arr, sortDir = true) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.sort((a, b) =>
        sortDir ?
            b.name.localeCompare(a.name) : a.name.localeCompare(b.name)

    );
}

const contacts = [{ name: 'Tom', phoneNumber: '7372378278' }, { name: 'Tom', phoneNumber: '7372378278' }, { name: 'Zom', phoneNumber: '7372378278' }, { name: 'Bom', phoneNumber: '7372378278' }];
console.log(sortContacts(contacts,false));

console.log(('f').localeCompare('a'));