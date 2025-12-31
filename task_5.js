const data = [
    { nama: "jaka", waktuTunggu: 5 },
    { nama: "michael", waktuTunggu: 2 },
    { nama: "jodi", waktuTunggu: 3 },
    { nama: "budi", waktuTunggu: 4 },
    { nama: "siti", waktuTunggu: 1 },
    { nama: "andi", waktuTunggu: 6 },
    { nama: "rudi", waktuTunggu: 7 }
];


const prosesPesanan = async () => {
    return new Promise((resolve, reject) => {

        for(let i = 0; i < data.length; i++){
            if(data[i].nama === "" || data[i].nama === null){
                reject("nama tidak boleh kosong");
                return;
            }
        }
        
        const interval = setInterval(() => {
            let selesai = true;
            for (let i = 0; i < data.length; i++) {
            if (data[i].waktuTunggu > 0) {
                data[i].waktuTunggu -= 1;
                selesai = false;
                 console.log("menunggu antrian...");
                if (data[i].waktuTunggu === 0) {
                    console.log(`Halo ${data[i].nama}, pesananmu sudah selesai!`);
                }
            }
        }
        if (selesai) {
            clearInterval(interval);
            resolve();
        }
    }, 1000);
    })
    
}

prosesPesanan().then(() => {
    console.log("semua pesanan selesai");
}).catch((err) => {
    console.log(err);
})
