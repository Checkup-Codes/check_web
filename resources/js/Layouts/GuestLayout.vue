<script setup>
import Sidebar from '@/Layouts/Guest/Sidebar/sidebar.vue'
import Header from '@/Layouts/Guest/Header/header.vue'
</script>

<template>
    <div class="bg-primary flex flex-row">
        <div class="hidden laptop:block laptop:w-[270px]">
            <Sidebar />
        </div>
        <div class="mx-1 w-full">
            <Header />
            <div class="col-span-2 h-full border-2 border-black">
                <div class="container">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
