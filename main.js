onload = () =>{
        document.body.classList.remove("container");
};

const audio = document.getElementById('myAudio');
        audio.currentTime = 181; // Atur waktu mulai pada detik ke-30 (ganti sesuai kebutuhan Anda)

        audio.oncanplay = function() {
            audio.play();
        }






