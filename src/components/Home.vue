<template>
  <div class="home">
    <div class="home__wrapper">
      <h1 class="home__title">Autocomplete challenge</h1>
      <h3 class="home__subtitle">
        Search for cities and books with two different autocomplete fields
      </h3>
      <SearchForm />
    </div>
  </div>
</template>

<script>
import SearchForm from './SearchForm.vue'
export default {
  name: 'App',
  components: {
    SearchForm,
  },
}
</script>

<style lang="scss">
.home {
  margin: auto;
  display: flex;
  min-height: 100vh;
  background-image: linear-gradient(
    120deg,
    #0b1872 0%,
    #0b1872 10%,
    #0f40a5 28%,
    #134db3 35%,
    #1b65cb 57%,
    #1e6ed5 74%,
    #3399ff 100%
  );
}

.home__wrapper {
  margin: auto;
  max-width: 500px;
  width: 100%;
}

.home__title {
  font-size: 1.8rem;
  margin-bottom: 30px;
}

.home__subtitle {
  font-size: 1rem;
  font-weight: lighter;
  margin-bottom: 48px;
}

.home__title,
.home__subtitle {
  text-align: center;
  color: #ffffff;
}
</style>
