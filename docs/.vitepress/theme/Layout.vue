<template>
  <q-layout view="lHh lpr lFf" container>
    <q-page-container>
      <q-page class="flex flex-col">
        <div class="absolute w-full h-full -z-10 bg-theme-gradient bg-size-400% anim-gradient-15-linear-infinite"></div>
          <div class="p-0 sm:p-4 anim-gradient-30-ease-infinite bg-size-400% flex-1">
            <div class="h-page-full sm:h-page max-h-page-full sm:max-h-page container max-width-lg mx-auto">
              <Content />
            </div>
          </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
.max-width-lg.container {
  max-width: 96em;
}
html,
body,
#app {
  height: 100vh;
}
</style>
