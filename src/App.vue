<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import MobileBottomDock from './components/MobileBottomDock.vue'
import WhatsAppFloat from './components/WhatsAppFloat.vue'
import { useSeo } from './composables/useSeo'

useSeo()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <div class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </Transition>
      </RouterView>
    </div>
    <AppFooter />
    <div class="h-20 lg:hidden" aria-hidden="true"></div>
    <MobileBottomDock />
    <WhatsAppFloat />
  </div>
</template>
