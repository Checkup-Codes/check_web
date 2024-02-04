<template>
    <div class="flex justify-between px-3 py-3 dark:text-primary">
        <div class="flex">
            <ArrowLeftIcon class="mx-3 my-auto hidden h-8 w-8 laptop:flex" />
            <ArrowRightIcon class="mx-3 my-auto hidden h-8 w-8 laptop:flex" />
        </div>

        <Link :href="route('welcome')" class="flex rounded-l-[50px] rounded-r-sm">
            <ApplicationLogo class="fill-current text-gray-900 h-14 w-14" />
        </Link>

        <div class="mx-2 hidden w-full cursor-pointer items-center text-lg dark:text-primary laptop:flex">
            <div class="px-3">
                <MagnifyingGlassIcon class="text-black-500 h-6 w-6" />
            </div>
            <div>
                <h1 class="text-xl font-semibold">Check-up Codes</h1>
                <h2 class="text-sm">{{ $t('header.subtitle') }}</h2>
            </div>
        </div>

        <div class="flex">
            <button @click="toggleDarkMode" class="mx-3 my-auto hidden h-6 w-6 dark:text-primary-light laptop:flex">
                <SunIcon v-if="isDarkMode" class="h-6 w-6" />
                <MoonIcon v-else class="h-6 w-6" />
            </button>
        </div>

        <div class="flex">
            <LanguageIcon class="mx-3 my-auto hidden h-6 w-6 dark:text-primary laptop:flex" @click="toggleDropdown" />

            <transition name="fade">
                <ul v-if="isDropdownOpen" class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" :href="route('lang.switch', 'en')">English</a></li>
                    <li><a class="dropdown-item" :href="route('lang.switch', 'tr')">Türkçe</a></li>
                </ul>
            </transition>
        </div>

        <div
            class="dark:bg-primary-dark_button bg-primary-light_button mx-3 hidden w-60 items-center rounded-lg pt-1.5 dark:text-primary laptop:block"
        >
            <div class="flex items-center justify-center">
                <h1 class="text-md font-semibold">03 FEB 2024</h1>
            </div>
            <div class="flex justify-center">
                <h1 class="text-sm">Sat | 17:45</h1>
            </div>
        </div>
        <div
            class="dark:bg-primary-dark_button bg-primary-light_button hidden w-72 items-center justify-center rounded-lg dark:text-primary laptop:flex"
        >
            <h4 class="flex text-center font-semibold">Market</h4>
            <ArrowRightCircleIcon class="h-6 w-6" />
        </div>

        <div class="cursor-pointer text-2xl laptop:hidden">☰</div>
    </div>
</template>

<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    MagnifyingGlassIcon,
    MoonIcon,
    SunIcon,
    ArrowRightCircleIcon,
    LanguageIcon,
} from '@heroicons/vue/24/solid'

import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'

const isDarkMode = ref(false)
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    document.documentElement.classList.toggle('dark')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
