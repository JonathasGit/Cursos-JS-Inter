function getAdmins(map){
    let admins = [];
    for ([key, value] of map){
        if (value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;

}
const usuarios = new Map();

usuarios.set ('Luiz', 'Admin');
usuarios.set ('Jonathas', 'Admin');
usuarios.set ('Jorge', 'Admin');
usuarios.set ('Stephany', 'User');

console.log(getAdmins(usuarios))