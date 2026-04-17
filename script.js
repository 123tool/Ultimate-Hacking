const dictionaryData = [
    { name: "Adware", desc: "Software yang menampilkan iklan terus-menerus tanpa izin, seringkali mengumpulkan data pengguna secara diam-diam." },
    { name: "Backdoor", desc: "Metode rahasia untuk melewati autentikasi normal dalam sistem atau algoritma, memungkinkan akses jarak jauh." },
    { name: "Botnet", desc: "Jaringan komputer yang terinfeksi malware dan dikendalikan sebagai grup untuk serangan skala besar seperti DDoS." },
    { name: "Brute Force", desc: "Metode serangan dengan mencoba setiap kemungkinan kombinasi password sampai yang benar ditemukan." },
    { name: "Buffer Overflow", desc: "Anomali di mana program menulis data melebih kapasitas blok memori, sering dimanfaatkan untuk eksekusi kode ilegal." },
    { name: "Carding", desc: "Penyalahgunaan data kartu kredit orang lain untuk berbelanja atau mencairkan saldo secara ilegal." },
    { name: "Cracker", desc: "Individu yang menembus keamanan sistem dengan niat jahat atau merusak, berbeda dengan White Hat Hacker." },
    { name: "DDoS", desc: "Distributed Denial of Service; membanjiri target dengan trafik dari berbagai sumber hingga sistem lumpuh." },
    { name: "Firewall", desc: "Sistem keamanan jaringan yang memantau dan mengontrol trafik masuk/keluar berdasarkan aturan keamanan." },
    { name: "Keystroke Logging", desc: "Perekaman setiap tombol yang ditekan pada keyboard untuk mencuri kredensial seperti password." },
    { name: "Logic Bomb", desc: "Potongan kode yang sengaja dimasukkan ke dalam software yang akan menjalankan fungsi jahat jika kondisi tertentu terpenuhi." },
    { name: "Phishing", desc: "Upaya mendapatkan informasi sensitif dengan menyamar sebagai entitas tepercaya dalam komunikasi elektronik." },
    { name: "Phreaking", desc: "Hacking yang difokuskan pada sistem telekomunikasi atau jaringan telepon." },
    { name: "Social Engineering", desc: "Manipulasi psikologis terhadap seseorang agar mereka memberikan informasi rahasia atau melakukan tindakan tertentu." },
    { name: "Spoofing", desc: "Tindakan memalsukan data (seperti IP atau email) agar terlihat berasal dari sumber yang sah." },
    { name: "Trojan Horse", desc: "Malware yang menyamar sebagai software sah namun melakukan aktivitas berbahaya di latar belakang." },
    { name: "Zero-Day Attack", desc: "Serangan yang mengeksploitasi celah keamanan yang belum diketahui oleh vendor pembuat software." },
    { name: "Ransomware", desc: "Jenis malware yang mengenkripsi data korban dan meminta tebusan uang untuk kunci dekripsinya." },
    { name: "SQL Injection", desc: "Teknik serangan dengan menyisipkan perintah SQL berbahaya ke dalam input data aplikasi untuk manipulasi database." },
    { name: "Man-in-the-Middle (MitM)", desc: "Serangan di mana peretas secara diam-diam memotong dan meneruskan komunikasi antara dua pihak." },
    { name: "Cross-Site Scripting (XSS)", desc: "Menyisipkan skrip berbahaya ke dalam halaman web yang dilihat oleh pengguna lain." },
    { name: "Rootkit", desc: "Kumpulan software yang dirancang untuk menyembunyikan keberadaan proses atau program tertentu di komputer." },
    { name: "Payload", desc: "Bagian dari malware atau exploit yang melakukan tindakan berbahaya (seperti menghapus data atau mencuri file)." },
    { name: "Whaling", desc: "Serangan phishing yang ditargetkan secara khusus kepada eksekutif senior atau tokoh penting." },
    { name: "Honey Pot", desc: "Sistem umpan yang sengaja dibuat untuk didatangi peretas guna mempelajari cara kerja serangan mereka." }
];

const grid = document.getElementById('dictionary-grid');
const searchInput = document.getElementById('searchInput');

function displayData(data) {
    grid.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3><span class="tag">DEF_TYPE</span> ${item.name}</h3>
            <p>${item.desc}</p>
        `;
        grid.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = dictionaryData.filter(i => 
        i.name.toLowerCase().includes(term) || i.desc.toLowerCase().includes(term)
    );
    displayData(filtered);
});

// Init
displayData(dictionaryData);
