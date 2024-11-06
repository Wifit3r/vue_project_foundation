<template>
    <header>
    <div class="container1">
      <div class="header">
        <div class="header__inner">
          <div class="header__logo"><img
              src="../assets/img/logo.jpg"
              alt="">Фонд</div>
        </div>
          <nav class="nav">
            <nav v-if="isOpen" class="burger-menu">
              <div>
                <a class="nav_link" @mouseover="this.isHoverd = true" @mouseleave="this.isHoverd = false" >Реквізити</a>
                  <div class="payment-border" v-show="isVisible" @mouseover="this.isHoverd = true" @mouseleave="this.isHoverd = false" >
                    <p class="dropdown-text" >Тут будуть платіжні реквізити</p>
                  </div>
              </div>
              <a class="nav_link" href="/map">Діяльність</a>
              <a class="nav_link" href="/news">Новини</a>
              <a class="nav_link" id="meta" href="/">Мета</a>
            </nav>
            <button class="burger-btn" @click="toggleMenu()">
             <span :class="{ 'open': isOpen }"></span>
             <span :class="{ 'open': isOpen }"></span>
             <span :class="{ 'open': isOpen }"></span>
            </button>
            <div class="container2">
              <div>
                <a class="nav_link" @mouseover="this.isHoverd = true" @mouseleave=" this.isHoverd = false" >Реквізити</a>
                  <div v-show="isVisible" @mouseover="this.isHoverd = true" @mouseleave="this.isHoverd = false" >
                    <p class="dropdown-text" >Тут будуть платіжні реквізити</p>
                  </div>
              </div>

              <a class="nav_link" href="/map">Діяльність</a>
              <a class="nav_link" href="/news">Новини</a>
              <a class="nav_link" id="meta" href="/">Мета</a>
            </div>
          </nav>
      </div>
    </div>
  </header>
</template>

<script>
/* eslint-disable */
export default{
    name: 'HeaderVue',

data() {
  return {
    isOpen:false,
    counter: 0,
    isHoverd: false,
    label : "Мета фонду",
    label1 : "Цілі Фонду",
    Text: "Фонд створено з метою, здійснення благодійної діяльності в інтересах громадян, суспільства; надання допомоги постраждалим від воєнних дій; надання допомоги тим, хто у скрутному становищі за станом здоров’я та по іншим причинам;надання допомоги дітям-сиротам, дітям з малозабезпечених та неблагополучних сімей, дітям з інвалідністю,внутрішньо переміщеним особам; створення простору для самореалізації дітей та молоді; пропаганди здорового способу життя; фінансування проєктів із підтримки існуючих та створення і будівництва нових майданчиків, дитячих будинків таін.; затверджувати і виконувати благодійні програми.",
    Text1:"Цілями благодійної діяльності Фонду є надання допомоги для сприяння законним інтересам бенефіціарів: особам, які постраждали чи можуть постраждати від збройної агресії, малозабезпеченим, тим хто у скрутному становищі, зокрема, за станом здоров’я та по іншим причинам. Крім того, Фонд активно сприяє соціальній реабілітації постраждалих, допомагаючи їм відновлювати психологічне та емоційне здоров’я через програми підтримки та реабілітаційні заходи. Одним з важливих напрямків діяльності є надання гуманітарної допомоги у вигляді продовольства, медикаментів, одягу та інших необхідних речей."
  };
},
methods:{
  toggleMenu(){
    this.isOpen = !this.isOpen
  }

},
computed:{
  isVisible() {
    if(this.counter%2  == 0){
      return this.isHoverd
    }
    else{
      setInterval(100)
    }
    this.counter ++;
    return this.isHoverd
  }
}
}
</script>
<style scoped>
.burger-btn {
  cursor: pointer;
  display: none; 
  flex-direction: column;
  justify-content: space-around;  
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  padding: 0;
}
.payment-border{
  position: absolute;
  z-index: 1000;
  width: 50vw;
  margin-left: -45vw;
  margin-top: -5vh;  
}
.container2{
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  flex-direction: row;
}
@media (max-width: 768px) {
  .burger-btn {
    display: flex;
  }
  .container2{
    display: none;
  }
  .header{
    height: 100px;
  }
}

.burger-btn span {
  width: 100%;
  height: 3px;
  background: #333;
  transition: all 1s ease;
}

.burger-btn span.open:nth-child(1) {
  transform: rotate(45deg);
  position: relative;
  top: 8px;
}

.burger-btn span.open:nth-child(2) {
  opacity: 0;
}

.burger-btn span.open:nth-child(3) {
  transform: rotate(-45deg);
  position: relative;
  top: -8px;
}

.burger-menu {
  background-color: #333;
  padding: 20px;
  display: flex;  
  flex-direction: column; 
  position: absolute;
  margin-top: 339px; 
  margin-left: -130px;
  border-radius: 8px;
  z-index: 10001;
}



.burger-menu ul {
  list-style: none;
  padding: 0;
}

.burger-menu li {
  margin: 15px 0;
}

.burger-menu a {
  color: #fff;
  text-decoration: none;
}
.spliter{
  background-color: wheat;  
  width: 100%;
  height: 1vh;
  border-radius: 1vw;
}

.mainGallery {
  margin-top: 20px;
}

.gallery {
  text-align: center;
}

.main-image img {
  width: 28vw;
  height: auto;
  max-width: 400px;
  border-radius: 10px;
}

.controls {
  margin-top: 20px;
  margin-bottom: 20px;
}

.controls button {
  margin-left: 5px;
  margin-right: 5px;
  width: 40px;
  height: 30px;
  border-radius: 5px;
  background-color: wheat;
  border: none;
}

.dropdown-text{
  background-color: wheat;
  font-size: 11px;
  display: flex;
  padding: 3vw;
  height: 100px;
  width: fit-content;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  position:absolute;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}



.controls :hover {
  background-color: rgb(214, 144, 53);
  box-shadow: 2px;
}

.controls :active {
  background-color: burlywood;
  border-color: black;
}


header {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

div {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

.name1 {
  margin-left: 10px;
}

.logomenu {
  background-color: rgb(232, 255, 187);
}

.menu1 {
  display: flex;
  align-items: center;
  justify-content: left;

}

.menu {
  margin-left: -10px;
  margin-top: -10px;
  background-color: burlywood;
  margin-left: 150px;

}

.logomenu {
  width: 15%;
  height: 15%;
  border-radius: 50%;
  max-width: 120px;
  max-height: 120px;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  inset-inline: center;

}


.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  flex-direction: row;
  padding-top: 2vw;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgb(229, 149, 91);
  padding-bottom: 16px;
  max-height: 200px;
}

.header__logo {
  margin-left: 1vw;
  font-size: 50px;
  font-weight: 600;
  color: wheat;
  display: flex;
  align-items: center;
  font-size: 5vw;
}
.header__logo img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-top: -18px;
  margin-right: 18px;
}
@media (max-width: 768px) {
  .header__logo {
  margin-top: 5vw;
  margin-left: -3vw;
  font-weight: 600;
  color: wheat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 5vw;
}
.header__logo img{
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
}
}
.nav {
  display: flex;
  align-items: center;
  align-content:center ;
  justify-items: center;
  font-size: 24 px;
  text-transform: uppercase;
  margin-right: 40px;
}

.nav_link {
  color: black;
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
  margin: 10px;
  position: relative;
  padding: 10px;
  border-radius: 3px;
  border-width: 2px;  
  font-size: 24px;
  transition: transform 0.2s ease;
}

.nav_link::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;

  background-color: wheat;
  opacity: 0;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transition: opacity 0.1s linear;
}


.nav_link:hover {
  color: wheat;
  transition:  color 0.2s linear;
  background-color: rgb(66, 60, 50);
  transition: background-color 0.6s linear;
  transform: translateY(5px) ;
}

.nav_link:hover::after {
  opacity: 1;
}
</style>