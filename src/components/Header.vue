<template>
  <header>
    <div class="container1">
      <div class="header">
        <div class="header__inner">
          <div class="header__logo">
            <img src="../assets/img/logo.jpg" alt="">Фонд
          </div>
        </div>

        <nav class="nav">
          <!-- Меню-бургер -->
          <div v-if="isOpen" class="burger-menu">
            <div @mouseover="isHoverd = true" @mouseleave="isHoverd = false">
              <a class="nav_link">Реквізити</a>
              <div class="payment-border" v-show="isHoverd">
                <p class="dropdown-text">Тут будуть платіжні реквізити</p>
              </div>
            </div>
            <a class="nav_link" href="/map">Діяльність</a>
            <a class="nav_link" href="/news">Новини</a>
            <a class="nav_link" id="meta" href="/">Мета</a>
          </div>

          <button class="burger-btn" @click="toggleMenu">
            <span :class="{ 'open': isOpen }"></span>
            <span :class="{ 'open': isOpen }"></span>
            <span :class="{ 'open': isOpen }"></span>
          </button>

          <div class="container2">
            <div @mouseover="isHoverd = true" @mouseleave="isHoverd = false">
              <a class="nav_link">Реквізити</a>
              <div v-show="isHoverd">
                <p class="dropdown-text">Тут будуть платіжні реквізити</p>
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
export default {
  name: 'HeaderVue',
  data() {
    return {
      isOpen: false,
      isHoverd: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped>
.container1{
  max-width: 100%;
  width: 100vw;
}
.burger-btn {
  cursor: pointer;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
}

.burger-btn span {
  width: 100%;
  height: 3px;
  background: #333;
  transition: all 0.3s ease;
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
  top: 100%;
  left: 0;
  width: 200px;
  border-radius: 8px;
  z-index: 10001;
}

.container2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.payment-border {
  position: absolute;
  z-index: 1000;
  width: 50vw;
  margin-left: -45vw;
  margin-top: -5vh;
}

.dropdown-text {
  background-color: wheat;
  font-size: 11px;
  padding: 3vw;
  height: 100px;
  border-radius: 2vw;
  position: absolute;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.nav {
  display: flex;
  align-items: center;
  font-size: 24px;
  text-transform: uppercase;
  margin-right: 40px;
}

.nav_link {
  color: black;
  text-decoration: none;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border-radius: 3px;
  font-size: 24px;
  transition: transform 0.2s ease;
}

.nav_link:hover {
  color: wheat;
  background-color: rgb(66, 60, 50);
  transform: translateY(5px);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgb(229, 149, 91);
  padding-top: 20px;
  padding-bottom: 20px;
}

.header__logo {
  display: flex;
  align-items: center;
  font-size: 5vw;
  color: wheat;
}

.header__logo img {
  width: 100px;
  height: 100px;
  border-radius: 100px;
  margin-right: 18px;
}

@media (max-width: 768px) {
  .burger-btn {
    display: flex;
  }

  .container2 {
    display: none;
  }

  .header {
    height: 100px;
  }
}
</style>
