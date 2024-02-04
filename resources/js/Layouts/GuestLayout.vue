<script setup>
import Sidebar from '@/Layouts/Guest/Sidebar/sidebar.vue'
import Header from '@/Layouts/Guest/Header/header.vue'
</script>

<template>
    <div class="flex flex-row bg-primary-light dark:bg-primary-dark">
        <div class="hidden laptop:block laptop:w-[270px]">
            <Sidebar />
        </div>
        <div class="mx-1 w-full">
            <Header />
            <div class="border-black col-span-2 h-full border-2">
                <div class="container">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
