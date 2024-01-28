<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <Head title="Home" />

   <GuestLayout>
        <!--<div v-if="canLogin" class="">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class=""
                >Dashboard</Link>
           
            <template v-else>
                <Link
                    :href="route('login')"
                    class=""
                    >Log in</Link
                >
               
                <Link
                    v-if="canRegister"
                    :href="route('register')"
                    class="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Register</Link
                >
            </template>
        </div> -->
        <div class="">
            <div class=" text-lg py-6">Site yapma aşaması tatlı tatlı devam etmekte. Open source kodlamaya devam ediyorum. Contributor olmak için <a href="https://discord.gg/9C4JHVjjcd" class="text-pink-700"> DC</a> gel</div>
            
        </div>
    </GuestLayout>
</template>

<style>

</style>
