<template>
  <section class="loginSection"></section>
</template>
<script>
export default {};
</script>

<style lang="scss">
.loginSection {
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginForm {
  width: 500px;
  background-color: #1c252f;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
}

.heading {
  font-size: 32px;
  border-bottom: 2px #f1f1f1;
}
</style>
