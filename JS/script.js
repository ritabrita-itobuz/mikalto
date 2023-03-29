// const api="http://localhost:3000";
// var information;
const data = async function (){
      await fetch("http://localhost:3000").then((data)=>{
        return data.json()
      }).then((data) => {
      const enjoy = document.getElementById("enjoy-text");
      const vacation = document.getElementById("vacation-text");
      const background = document.getElementById("vacation");
      const hideaway = document.getElementById("beautiful-hideaway");
      // const rate = document.getElementById("rate-per-night");

      enjoy.innerHTML= data.enjoy;
      vacation.innerHTML= data.vacation;
      background.style.backgroundImage= `url(${data.image})`;
      hideaway.innerHTML= data.hideaway;
      // rate.innerHTML= data.hideaway;
      
    }
);
       
}

data();



