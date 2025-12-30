const names = ["jaka", "michael", "jodi", "budi", "siti", "andi", "rudi"];

function isSubstring(word, keyword) {
    return word.toLowerCase().includes(keyword.toLowerCase());
}


function findKeyword(keyword) {
    for (let i = 0; i < names.length; i++) {
        if (isSubstring(names[i], keyword)) {
            return "Nama  "  + names[i] + " ditemukan";
        } 
    }
    return "nama " + keyword + " tidak ditemukan";
}

let keyword="abdul";
console.log(findKeyword(keyword));
