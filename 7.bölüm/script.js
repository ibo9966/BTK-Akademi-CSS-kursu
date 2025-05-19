function showTempImage(imageName) {
    const container = document.getElementById("image-popup-area");

    // Alan temizleniyor
    container.innerHTML = "";

    const img = document.createElement("img");
    img.src = `images/${imageName}`;
    img.alt = "Kaplumbağa";
    img.style.border = "1px solid red"; // test için görseli belirginleştir

    console.log("Görsel yüklendi:", img.src); // console'da yolu görelim

    container.appendChild(img);

    // 3 saniye sonra kaldır
    setTimeout(() => {
        container.innerHTML = "";
    }, 3000);
}
