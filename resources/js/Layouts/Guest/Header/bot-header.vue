<template>
    <div class="hidden p-3 dark:text-primary laptop:flex">
        <div class="flex gap-10">
            <Link v-for="item in menuItems" :key="item.label" :href="item.route">{{ $t(item.label) }}</Link>
        </div>
    </div>

    <div class="laptop:hidden">
        <div class="flex flex-col gap-4 px-5">
            <Link v-for="item in menuItems" :key="item.label" :href="item.route" @click="toggleMobileMenu">
                {{ item.label }}
            </Link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3'

const isMobileMenuOpen = ref(false)

const menuItems = [
    { label: 'header.explore', route: route('lp.explore') },
    { label: 'header.products', route: route('lp.products') },
    { label: 'header.solutions', route: route('lp.solutions') },
    { label: 'header.pricing', route: route('lp.pricing') },
    { label: 'header.partners', route: route('lp.partners') },
    { label: 'header.resources', route: route('lp.resources') },
]

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
