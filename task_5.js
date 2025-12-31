const data = [
    { nama: "jaka", waktuTunggu: 5 },
    { nama: "michael", waktuTunggu: 2 },
    { nama: "jodi", waktuTunggu: 3 },
    { nama: "budi", waktuTunggu: 4 },
    { nama: "siti", waktuTunggu: 1 },
    { nama: "andi", waktuTunggu: 6 },
    { nama: "rudi", waktuTunggu: 7 },
    { nama: "", waktuTunggu: 2 },
    { nama: "Yusuf", waktuTunggu: 2 }
];


function prosesSatuOrang(person){
    return new Promise((resolve, reject) => {
        let waktu = person.waktuTunggu;

        if(person.nama === null || person.nama === ""){
            reject("nama tidak boleh kosong");
        }

        const interval = setInterval(() => {
            waktu -= 1;
            console.log("menunggu antrian...");
            if (waktu === 0) {
                console.log(`Halo ${person.nama}, pesananmu sudah selesai!`);
                clearInterval(interval);
                resolve();
            }
        }, 1000);
    })
}

async function prosesSemua() {
    for (let i = 0; i < data.length; i++) {
        await prosesSatuOrang(data[i]);
    }
}

prosesSemua().then(() => {
    console.log("Semua pesanan sudah diproses");
}).catch((err) => {
    console.log(err);
});