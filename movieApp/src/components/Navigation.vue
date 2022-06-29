<template>
  <nav :class="$style.nav">
    <div :class="$style.container">
      <router-link to="/"
        ><span :class="$style.brand">Film izle</span></router-link
      >
      <div :class="$style.left">
        <ul :class="$style.menu">
          <router-link :class="$style['menu-item']" to="/popular"
            >Popular</router-link
          >
          <router-link :class="$style['menu-item']" to="/mylist"
            >MyList</router-link
          >
          <router-link :class="$style['menu-item']" to="/contact"
            >Contact</router-link
          >
        </ul>
        <div :class="$style['search-group']">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          <input type="text" :class="['input', $style.search]" />
        </div>
        <button @click="handleLogin" :class="$style.loginButton">
          Giriş Yap
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  setup() {

  },
  methods: {
    handleLogin() {
      console.log("click");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style module>
.nav {
  height: 70px;
  border-bottom: 2px solid #f6c833;
}

.container {
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  height: 100%;
  align-items: center;
}

.brand {
  font-size: 32px;
  color: #f6c833;
}

.left {
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
}

.menu {
  display: flex;
  column-gap: 1.5rem;
  cursor: pointer;
  font-size: 18px;
}

.menu-item {
  color: inherit;
}

.menu-item:hover {
  color: white;
}

.search-group {
  background-color: #10161d;
  height: 35px;
  width: 250px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  transition: 0.3s all ease-in-out;
}

.search-group:focus-within {
  width: 350px;
}

.search {
  background-color: transparent;
  height: 100%;
  color: white;
  padding: 0 0.5rem;
}

.loginButton {
  height: 35px;
  border-radius: 4px;
  padding: 0 1rem;
  color: white;
  letter-spacing: 1px;
  font-size: 16px;
  background-color: #252c35 !important;
  border: none;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
}

.loginButton:hover {
  transform: scale(1.05);
  font-size: 17px;
}
</style>
