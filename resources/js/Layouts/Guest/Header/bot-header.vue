<template>
    <div class="hidden p-3 laptop:flex">
        <div class="flex gap-10">
            <Link v-for="item in menuItems" :key="item.label" :href="item.route">{{ item.label }}</Link>
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
    { label: 'Explore', route: route('lp.explore') },
    { label: 'Products', route: route('lp.products') },
    { label: 'Solutions', route: route('lp.solutions') },
    { label: 'Pricing', route: route('lp.pricing') },
    { label: 'Partners', route: route('lp.partners') },
    { label: 'Resources', route: route('lp.resources') },
]

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
