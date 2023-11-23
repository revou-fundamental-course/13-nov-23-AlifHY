



document.addEventListener("DOMContentLoaded", function () {
   
    const images = [
      "Assets/images.jpeg",
      "Assets/images2.jpeg",
      "Assets/images3.jpeg",
      "Assets/images4.jpeg",

    ];
  
    const slideImage = document.getElementById("banner-review");
  
    let currentImageIndex = 0;
  
    // Fungsi untuk menampilkan gambar berikutnya
    function showNextSlide() {
      slideImage.src = images[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    // Tampilkan slide pertama saat halaman dimuat
    showNextSlide();
  
    // Set interval untuk mengganti gambar setiap beberapa detik
    const intervalId = setInterval(showNextSlide, 3000);
});

function validate() {
const name = document.getElementById("input-name").value;
const email = document.getElementById("input-email").value;
const option = document.getElementById("select-options").value;

if(name.trim() == "" || email.trim() == "" ) {
    alert("Nama dan Email anda tidak boleh kosong!!")
} else {
    alert("Data anda telah kami terima, mohon tunggu ")
}

}


