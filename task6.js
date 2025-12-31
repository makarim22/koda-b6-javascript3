const data = [
    { nama: "jaka", waktuTunggu: 5 },
    { nama: "michael", waktuTunggu: 2 },
    { nama: "jodi", waktuTunggu: 3 },
    { nama: "budi", waktuTunggu: 4 },
    { nama: "siti", waktuTunggu: 1 },
    { nama: "andi", waktuTunggu: 6 },
    { nama: "", waktuTunggu: 7 }
];

function queue(data){  
    let index = 0;
    function start(){
      return new Promise((resolve, reject) => {
          const person = data[index];
          if(person.nama !== null && person.nama !== ""){
            console.log("menunggu antrian...");
            setTimeout(function(){
                console.log(`Halo ${person.nama}, pesananmu sudah selesai!`);
                index += 1;
                resolve(start());
            }, person.waktuTunggu*1000);
          } else {
            reject("nama tidak boleh kosong");
          }
      })
    }
    return start();
}

const antrian = queue(data);
antrian.then().catch(
    (err) => {
        console.log(err);
    }
)