function toggleLanguage() {
    // Semak bahasa semasa (default English)
    let currentLang = localStorage.getItem("dpchs_lang") || "en";
    let newLang = currentLang === "en" ? "ms" : "en";
    
    // Simpan pilihan bahasa baru
    localStorage.setItem("dpchs_lang", newLang);
    
    // Jalankan fungsi penukaran teks
    applyLanguage(newLang);
}

function applyLanguage(lang) {
    // Tukar ikon bendera mengikut bahasa (pilihan: boleh tukar bendera UK/Malaysia jika ada)
    let flagIcon = document.getElementById("lang-flag-icon");
    if (flagIcon) {
        // Kekalkan bendera atau tukar jika perlu
        flagIcon.src = "images/malaysia-flag.png"; 
    }

    // Cari semua elemen yang ada atribut dwi-bahasa
    const elements = document.querySelectorAll("[data-lang-en], [data-lang-ms]");
    
    elements.forEach(el => {
        if (lang === "ms") {
            if (el.hasAttribute("data-lang-ms")) {
                // Jika elemen adalah input jenis placeholder
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    if (el.hasAttribute("placeholder")) {
                        el.placeholder = el.getAttribute("data-lang-ms");
                    }
                } else {
                    el.innerHTML = el.getAttribute("data-lang-ms");
                }
            }
        } else {
            if (el.hasAttribute("data-lang-en")) {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    if (el.hasAttribute("placeholder")) {
                        el.placeholder = el.getAttribute("data-lang-en");
                    }
                } else {
                    el.innerHTML = el.getAttribute("data-lang-en");
                }
            }
        }
    });
}

// Auto-load bahasa pilihan pengguna apabila laman web dibuka
document.addEventListener("DOMContentLoaded", () => {
    let savedLang = localStorage.getItem("dpchs_lang") || "en";
    applyLanguage(savedLang);
});