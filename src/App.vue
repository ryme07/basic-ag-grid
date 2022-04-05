<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~ag-grid-community/src/styles/ag-grid.scss";
@import "~ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine-mixin.scss";

.ag-theme-alpine {
  @include ag-theme-alpine(
    (
      odd-row-background-color: #ace,
      alpine-active-color: deeppink,
    )
  );
}

.ag-header {
  // or write CSS selectors to make customisations beyond what the parameters support
  text-style: italic;
}
</style>
