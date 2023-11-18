const wordSearch = (letters, word) => {

    const horizontalJoin = letters.map(ls => ls.join(''));

    const verticalJoin = letters[0].map(i => letters.map(row => row[i]).join(''));

    for (l of horizontalJoin) {
        if (l.includes(word) || l.split('').reverse().join('').includes(word)) {
            return true;
        }
    }

    for (r of verticalJoin) {
        if (r.includes(word)) return true;
    }

    return false;
}
module.exports = wordSearch