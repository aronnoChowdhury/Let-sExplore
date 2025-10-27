const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const aronno = document.getElementById('aronno');
const AC = document.getElementById('AC');
AC.addEventListener('click', () => {
    aronno.classList.toggle('hidden');
});
const suchi = document.getElementById('suchi');
const sh = document.getElementById('su');
su.addEventListener('click', () => {
    suchi.classList.toggle('hidden');
});
const rm = document.getElementById('rm');
const rahman = document.getElementById('rahman');
rm.addEventListener('click', () => {
    rahman.classList.toggle('hidden');
});

function booked(id){
    const btn = document.getElementById(id);
    if(btn.innerText === "Book Now"){
        btn.innerText = "Booked!";
        btn.classList.add("bg-green-500")
    }
}

function mgsSend(id){
    const sended = document.getElementById(id);
    if(sended.innerText = "Send Message"){
        sended.innerText = "Message Sended!";
        sended.classList.add("bg-green-500");
    }
}
