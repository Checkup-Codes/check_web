<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head } from '@inertiajs/vue3'
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-gray-800 text-xl font-semibold leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="sm:px-6 lg:px-8 mx-auto max-w-7xl">
                <div class="bg-white sm:rounded-lg overflow-hidden shadow-sm">
                    <div class="text-gray-900 p-6">You're logged in!</div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
