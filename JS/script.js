// const api="http://localhost:3000";
// var information;
let data = async function (){
      await fetch("http://localhost:3000").then((data)=>{
        return data.json()
      }).then((data)=>{
      document.getElementById("vacation").innerHTML= data.heading;
      document.getElementById("vacation").src= data.image
    }
      );
       
}

data();



