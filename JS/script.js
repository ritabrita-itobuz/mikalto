
const data = async function (){
      await fetch("http://localhost:3000").then((data)=>{
        return data.json()
      }).then((data) => {
      const enjoy = document.getElementById("enjoy-text");
      const vacation = document.getElementById("vacation-text");
      const background = document.getElementById("vacation");
      const hideaway = document.getElementById("beautiful-hideaway");
      const wellness = document.getElementById("wellness");
      const wellnesskey = document.getElementById("wellness-subheading");
      const firstroom = document.getElementById("first-room");
      const secondroom = document.getElementById("second-room");
      const thirdroom = document.getElementById("third-room");
      const fourthroom = document.getElementById("fourth-room");

      enjoy.innerHTML = data.enjoy;
      vacation.innerHTML = data.vacation;
      background.style.backgroundImage = `url(${data.image})`;
      hideaway.innerHTML = data.hideaway;
      wellness.innerHTML = data.wellness;
      wellnesskey.innerHTML = data.wellnesskey;
      firstroom.src = data.singleRoomPicture;
      secondroom.src = data.doubleRoomPicture;
      thirdroom.src = data.thirdRoomPicture;
      fourthroom.src = data.fourthRoomPicture;
      
    }
);       
}

data();

window.onload=function(){
  let today = new Date().toISOString().split('T')[0];
  document.getElementsByName("fromToday")[0].setAttribute('min', today);
  document.getElementsByName("afterMarkedDate")[0].setAttribute('min', today);
}

const swiper = new Swiper(".mySwiper", {
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});



