const fs = require('fs');

const json = fs.readFileSync('./movies.json');

const DB = JSON.parse(json);

const lookup = DB.reduce((acc, curr) => {
    const key = curr.id;
    acc.order.push(key);
    const { id, title , tagline, poster_path, overview } = curr;
    acc[key] = {
        id, title, tagline, poster_path, overview
    };
    return acc;
}, { order: [] });

if(!!lookup.order.length) {
    fs.writeFile('./db.json', JSON.stringify(lookup, null, 4), () => {
        console.log('db created');
    })
} else {
    throw new Error('Problem creating lookup file');
}