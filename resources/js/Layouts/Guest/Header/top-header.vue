<template>
    <div class="flex justify-between px-3 py-3">
        <div class="flex">
            <ArrowLeftIcon class="mx-3 my-auto hidden h-8 w-8 laptop:flex" />
            <ArrowRightIcon class="mx-3 my-auto hidden h-8 w-8 laptop:flex" />
        </div>

        <Link :href="route('welcome')" class="flex rounded-l-[50px] rounded-r-sm">
            <ApplicationLogo class="fill-current text-gray-900 h-14 w-14" />
        </Link>

        <div class="mx-2 hidden w-full cursor-pointer items-center text-lg laptop:flex">
            <div class="px-3">
                <MagnifyingGlassIcon class="text-black-500 h-6 w-6" />
            </div>
            <div>
                <h1 class="text-xl font-semibold">Check-up Codes</h1>
                <h2 class="text-sm">{{ $t('header.subtitle') }}</h2>
            </div>
        </div>

        <div class="flex">
            <LanguageIcon class="mx-3 my-auto hidden h-6 w-6 laptop:flex" />
        </div>

        <div class="bg-gray-100 mx-3 hidden w-60 items-center rounded-lg bg-primary-light pt-1.5 laptop:block">
            <div class="flex items-center justify-center">
                <h1 class="text-md font-semibold">03 FEB 2024</h1>
            </div>
            <div class="flex justify-center">
                <h1 class="text-sm">Sat | 17:45</h1>
            </div>
        </div>
        <div class="bg-gray-100 hidden w-72 items-center justify-center rounded-lg bg-primary-light laptop:flex">
            <h4 class="flex text-center font-semibold">Market</h4>
            <ArrowRightCircleIcon class="h-6 w-6" />
        </div>

        <div class="cursor-pointer text-2xl laptop:hidden">☰</div>
    </div>
</template>

<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { LanguageIcon } from '@heroicons/vue/24/solid'
import { ArrowRightCircleIcon } from '@heroicons/vue/24/solid'

import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'
</script>
