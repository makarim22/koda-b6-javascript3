const data = [
  { nama: "John", waktuTunggu: 5 },
  { nama: "Ed", waktuTunggu: 2 },
  { nama: "Jane", waktuTunggu: 0.5 },
];

function queue(data) {
  let index = 0;

  function start() {
    return new Promise((resolve, reject) => {
      const person = data[index];
      if (person) {      
        console.log("menunggu antrian...");
        setTimeout(function () {
          console.log(`Halo ${person.nama}, pesananmu sudah selesai!`);
          index += 1;
          resolve(start());
        }, person.waktuTunggu * 1000);
      } else {
        reject();
      }
    });
  }
  return start();
}

async function prosesSemua() {
  try {
    const result = await queue(data);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

prosesSemua();
