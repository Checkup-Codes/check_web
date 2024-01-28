<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <div class="container mx-auto">
        <div class="flex items-center gap-10 text-md py-3">
            <Link :href="route('welcome')" class="flex items-center">
                <ApplicationLogo class="w-20 h-20 fill-current text-gray-900" />
                <span class="pl-1 text-xl text-blue-800 font-bold"
                    >Check-up Codes</span
                >
            </Link>

            <Link :href="route('lp.explore')">Explore</Link>
            <Link :href="route('lp.products')">Products</Link>
            <Link :href="route('lp.solutions')">Solutions</Link>
            <Link :href="route('lp.pricing')">Pricing</Link>
            <Link :href="route('lp.partners')">Partners</Link>
            <Link :href="route('lp.resources')">Resources</Link>
        </div>

        <div class="container">
            <slot />
        </div>
    </div>
</template>
