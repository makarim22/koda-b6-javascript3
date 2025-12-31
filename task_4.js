const data = [
    { nama: "jaka", waktuTunggu: 5 },
    { nama: "michael", waktuTunggu: 2 },
    { nama: "jodi", waktuTunggu: 3 },
    { nama: "budi", waktuTunggu: 4 },
    { nama: "siti", waktuTunggu: 1 },
    { nama: "andi", waktuTunggu: 6 },
    { nama: "rudi", waktuTunggu: 7 }
];

const interval = setInterval(() => {
    let semuaSelesai = true;
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].waktuTunggu > 0) {
            data[i].waktuTunggu -= 1;
            semuaSelesai = false;

            if (data[i].waktuTunggu === 0) {
                console.log(`Halo ${data[i].nama}, pesananmu sudah selesai!`);
                console.log("menunggu antrian...");
            }
        }
    }
    
    if (semuaSelesai) {
        clearInterval(interval);
    }
}, 1000);
