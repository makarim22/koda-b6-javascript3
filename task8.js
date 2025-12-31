const url = "https://jsonplaceholder.typicode.com/users";

// pasangan huruf besar dan huruf kecil
const lowerCaseMap = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  J: "j",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  U: "u",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z",
};

// fungsi untuk mengubah uppercase menjadi lowercase
function toLowerCaseManual(email) {
  let result = "";
  for (let i = 0; i < email.length; i++) {
    const char = email[i];
    if (char in lowerCaseMap) {
      result += lowerCaseMap[char];
    } else {
      result += char;
    }
  }
  return result;
}

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const arrayEmail = [];
        let manual = false;
        for (let i = 0; i < data.length; i++) {
          if (manual) {
            const emailLowercase = toLowerCaseManual(data[i].email);
            arrayEmail.push(emailLowercase);
            continue;
          } else {
            const emailLowercase = data[i].email.toLowerCase();
            arrayEmail.push(emailLowercase);
          }
        }
        resolve(arrayEmail);
      })
      .catch((err) => reject(err));
  });
}

// versi async await
async function main() {
  try {
    const emails = await fetchData();
    console.log(emails);
  } catch (err) {
    console.log(err);
  }
}
// versi then catch
fetchData()
  .then((emails) => console.log(emails))
  .catch((err) => console.log(err));

main();
