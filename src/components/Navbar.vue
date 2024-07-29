<template>
  <nav class="relative bg-gray-100">
    <div class="mx-auto max-w-7xl px-2 sm:px-8 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button type="button" @click="toggleEvent" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
            </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
                <img class="h-8 w-auto" src="/logo.png" alt="Your Company">
            </div>
           
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <button class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white" :class="active == 0 ? 'bg-gray-700 text-white' : ''" aria-current="page" @click="$emit('add', 0)">Home</button>
                    <button class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white" :class="active == 1 ? 'bg-gray-700 text-white' : ''" 
                    @click="$emit('add', 1)">Introduce</button>
                    <button class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white" :class="active == 2 ? 'bg-gray-700 text-white' : ''" @click="$emit('add', 2)">Skill</button>
                    <button class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white" :class="active == 3 ? 'bg-gray-700 text-white' : ''" @click="$emit('add', 3)">Project</button>
                    <button class="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-gray-700 hover:text-white" :class="active == 4 ? 'bg-gray-700 text-white' : ''" @click="$emit('add', 4)">Contact</button>
                </div>
            </div>
        </div>
        </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
     <template v-if="toggle">
         <div class="sm:hidden" id="mobile-menu">
             <div class="space-y-1 px-2 pb-3 pt-2">
             <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
             <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black" aria-current="page" @click="$emit('add', 0)" :class="active == 0 ? 'bg-gray-700 text-white' : ''" >Home</a>
             <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" @click="$emit('add', 1)" :class="active == 1 ? 'bg-gray-700 text-white' : ''" >Introduce</a>
             <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" @click="$emit('add', 2)" :class="active == 2 ? 'bg-gray-700 text-white' : ''" >Skill</a>
             <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" @click="$emit('add', 3)" :class="active == 3 ? 'bg-gray-700 text-white' : ''" >Project</a>
             <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white" @click="$emit('add', 4)" :class="active == 4 ? 'bg-gray-700 text-white' : ''" >Contact</a>
             </div>
         </div>
     </template>
    </nav>

</template>

<script>
export default {
    props:[
        'active'
    ],
    data() {
        return {
            toggle: false
        }
    },
    methods: {
        toggleEvent() {
            return this.toggle = !this.toggle
        }
    }
}
</script>

<style>

</style>