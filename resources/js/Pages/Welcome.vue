<script setup>
import { Head, Link } from '@inertiajs/vue3'
import GuestLayout from '@/Layouts/GuestLayout.vue'
import TableCard from '@/Components/Projects/TableCard.vue'

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
})
</script>

<template>
    <Head title="Home" />

    <GuestLayout>
        <div class="bg-primary-dark">
            Site yapma aşaması tatlı tatlı devam etmekte. Open source kodlamaya asd ediyorum. Contributor olmak için
            {{ $t('register.submit') }}
            <a href="https://discord.gg/9C4JHVjjcd" class="text-pink-700"> DC</a>
            gel
        </div>
        <div class="grid grid-cols-2 gap-5 p-5 dark:text-primary">
            <div class="bg-test py-6 text-lg">asdasd</div>
            <table class="">
                <tr class="">
                    <th>Logo</th>
                    <th class="w-[80%]">Contact</th>
                    <th>Link</th>
                </tr>
                <tr>
                    <TableCard name="Check-up Codes" tag="#WebTasarım" precent="85" />
                </tr>
                <tr>
                    <TableCard name="Uçak Analiz Sistemi," tag="#WebTasarım" precent="85" />
                </tr>
                <tr>
                    <TableCard name="Check-up Codes" tag="#WebTasarım" precent="85" />
                </tr>
                <tr>
                    <td>HAHAHA</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>HAHAHA</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>HAHAHA</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table>
        </div>
    </GuestLayout>
</template>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td,
th {
    border: 1px solid #d4d8e5;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #d4d8e5;
}
</style>
