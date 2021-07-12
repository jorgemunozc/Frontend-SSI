<template>
  <div class="main-header text-xs">
    <div class="main-header__logo">
      <router-link to="/">
        SERVICIO SIMULADO <br>DE IMPUESTOS
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.main-header {
    color: white;
    height: 80px;
    background-color: var(--blue-800);
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding-left: 1rem;
}
.main-header__logo {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    width: 50%;
    line-height: 1;
}

a, a:visited {
    color: white;
}
</style>