<template>
    <div class="main-header">
        <div class="main-header__logo"><router-link to='/'>SERVICIO SIMULADO DE IMPUESTOS</router-link></div>
    </div>
</template>

<style scoped>
.main-header {
    color: white;
    height: 100px;
    background-color: var(--blue-800);
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: end;
    padding: 20px 10px;
}
.main-header__logo {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    max-width: 30%;
    line-height: 1;
}

a, a:visited {
    color: white;
}
</style>