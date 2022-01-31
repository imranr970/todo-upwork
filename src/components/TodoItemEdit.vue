<template>

    <div class="flex">

        <label 
        :for="item.id" 
        :class="isCompletedClasses(item)" 
        class="flex-grow">
            <input 
            type="checkbox" 
            name="" 
            :id="item.id" 
            :checked="item.isCompleted != 0" 
            />
            {{ item.title }}
        </label>

        <span>
            
            <FontIcon 
            icon="pen" 
            class="text-dark-green text-sm cursor-pointer" 
            title="Edit item" 
            @click.prevent="setEditing({ item })"
            />
            
        </span>

    </div>

    
</template>

<script>
    export default {
        
        props: {
            item: {
                required: true,
                type: Object
            }
        },

        setup() {
            
            const isCompletedClasses = (item) => [
                { 'line-through': item.isCompleted != 0 },
                { 'text-gray-400': item.isCompleted != 0 }
            ]

            const setEditing = () => {}

            return {
                setEditing,
                isCompletedClasses
            }

        }

    }
</script>

<style lang="scss" scoped>

</style>