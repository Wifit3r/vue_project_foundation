/* eslint-disable */
<script>
export default {
  name: 'MyFooter'
}

</script>
<template>
  <footer >
    <div class="contact-menu">
        <p>
          <i class="pi pi-inbox"></i>
          <a class="other-contacts" href="mailto:example@email.com">example@email.com</a>
        </p>
      </div>
      <div class="contact-menu">
        <p>
          <i class="pi pi-phone"></i>
          <a class="other-contacts" href="tel:+380123456789" >+38 (012) 345-67-89</a>
        </p>
    </div>
    <div class="contact-menu">
      <i class="pi pi-building"></i>
      <a class="map-point" href="https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB.+%D0%97%D0%B0%D1%80%D1%96%D1%87%D0%BD%D0%B0,+%D0%9A%D1%83%D1%88%D0%BD%D0%B8%D1%86%D1%8F,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+90151/@48.4397938,23.2488711,13.82z/data=!4m10!1m2!2m1!1z0LLRg9C7LiDQl9Cw0YDRltGH0L3QsCwgMTM0LCDRgS4g0JrRg9GI0L3QuNGG0Y8sINCl0YPRgdGC0YHRjNC60LjQuSDRgC3QvSwg0JfQsNC60LDRgNC_0LDRgtGB0YzQutCwINC-0LHQuy4sINCj0LrRgNCw0ZfQvdCw!3m6!1s0x4739cf501076e815:0x3d161de6a7308553!8m2!3d48.4396973!4d23.2584358!15sCnvQstGD0LsuINCX0LDRgNGW0YfQvdCwLCAxMzQsINGBLiDQmtGD0YjQvdC40YbRjywg0KXRg9GB0YLRgdGM0LrQuNC5INGALdC9LCDQl9Cw0LrQsNGA0L_QsNGC0YHRjNC60LAg0L7QsdC7Liwg0KPQutGA0LDRl9C90LCSAQVyb3V0ZeABAA!16s%2Fg%2F11v5x88nd5?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D">вул. Зарічна, 134, с. Кушниця,Хустський р-н, Закарпатська обл.,Україна</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: rgb(229, 149, 91);
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  align-content: center;
  height: 60px;
  width: 100vw;
  max-width: 100%;
  margin-top: 20px;
}



footer p{
  border-style: bold;
  border-width: 2px;
  width: 10vw;
}

footer i{
  margin-right: 1vw;
}

.contact-menu{
  border-radius: 8px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  margin-left: 10%;
  margin-right: 10%;
  height: 20px;
  width: 80%;
  font-size: 1vw;
  font-family: Arial, sans-serif;;
  margin: 2vw;
}

.contact-menu ul {
  list-style: none;
  display: flex;
  gap: 15px;

}
.contact-menu p {
display: flex;
flex-direction: row;
}
.contact-menu li {
  display: flex;
  align-items: center;

}

.contact-menu i.icon {
  font-size: 14px;
  margin-right: 5px;
}
.map-point {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  text-wrap:wrap;
}
.other-contacts {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  text-wrap:nowrap;
}

.contact-menu a:hover {
  text-decoration: underline;
}

.contact-menu li:last-child {
  font-weight: bold;
  color: #333;
}

@media (max-width: 500px){
  .contact-menu{
    font-size: 7px;
  }
  
}

@media (max-width: 819px) {
  .contact-menu {
    font-size: 10px;
  }
}
</style>
