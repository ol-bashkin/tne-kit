<template>
  <t-grid cols="12" class="wb-container">
    <t-col col="2">
      <suspense>
        <secondary-sidebar-container />
      </suspense>
    </t-col>
    <t-col col="8">
      <suspense>
        <components-container />
      </suspense>
    </t-col>
    <t-col col="2">
      <primary-sidebar-container />
    </t-col>
  </t-grid>
</template>

<script setup lang="ts">
import ComponentsContainer from "./ComponentsContainer.vue";
import PrimarySidebarContainer from "./PrimarySidebarContainer.vue";
import SecondarySidebarContainer from "./SecondarySidebarContainer.vue";
import store from "@/app/store";
import TGrid from "@/components/TLayout/TGrid/TGrid";
import TCol from "@/components/TLayout/TCol/TCol";

store.dispatch("ComponentsStore/LoadComponents");
</script>

<style lang="scss">
body,
html,
#app,
.wb-app,
.wb-page,
.t-wrapper,
.wb-container {
  height: 100%;
  max-height: 100vh;
}

.wb-app {
  overflow: hidden;
}
</style>
@/components/TLayout/TGrid/TGrid@/components/TLayout/TCol/TCol