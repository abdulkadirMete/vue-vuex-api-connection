<template>
  <div :class="$style.loadingWrapper">
    <div :class="$style.loading"></div>
  </div>
</template>
<script>
export default {};
</script>
<style module>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loadingWrapper {
  width: 100vw;
  height: calc(100vh - 70px);
  margin-top: 70px;
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading {
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  border-radius: 50%;
  border: 3px solid #f6ba22;
  border-top-color: var(--clr-primary-5);
  animation: spinner 0.6s linear infinite;
}
</style>
