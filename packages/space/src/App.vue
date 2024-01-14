<template>
  <t-app class="wb-app" :theme="theme">
    <router-view />
  </t-app>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TApp } from "@/components";
import store from "@/app/store";

const theme = computed(() => store.getters["SettingsStore/getTheme"]);
</script>
