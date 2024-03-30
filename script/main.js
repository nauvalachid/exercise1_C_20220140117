function Submit() {
    Swal.fire({
        title: "⇛DONE⇚", 
        text: "WeLcOmE to ReD DeViLs",
        icon: "success" 
  });
  }
  
  const waktu = document.getElementById("waktu");
  
  function tanggal(){
    const date = new Date(); 
    const options = {
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short' 
    };
    waktu.innerHTML = date.toLocaleString('id-ID', options); 
  }
  
  setInterval(tanggal, 1000);
  
  tanggal();

  function openLoginPage() {
    // Menampilkan pesan SweetAlert sebelum membuka halaman login
    Swal.fire({
        title: '!!!WeLcOmE ReD DeViLs!!!',
        text: 'Please wait...',
        icon: 'info',
        timer: 1500, // Durasi pesan SweetAlert (dalam milidetik)
        showConfirmButton: false
    }).then(() => {
        // Buka tab baru dan arahkan ke index.html di dalam folder pages
        window.open("./pages/index2.html", "_blank");
    });
}