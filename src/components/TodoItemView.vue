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
            :checked="item.completed_at != null" 
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
                { 'line-through': item.completed_at != null },
                { 'text-gray-400': item.completed_at != null }
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