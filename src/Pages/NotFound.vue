<template>

    <div class="text-left p-6">
        <h1 class="text-8xl font-bold">404 Not Found</h1>
        <p class="text-2xl">Sorry, The page you are looking for cannot be found!</p>
        <div class="mt-6">
            <RouterLink 
            :to="{ name: 'Home' }"
             class="mt-6 bg-white text-dark-green border border-dark-green hover:bg-dark-green hover:text-white p-1 px-10 text-center transition ease-in duration-150">
              Home
            </RouterLink>
        </div>
    </div>

</template>