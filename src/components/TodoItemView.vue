<template>

    <div class="flex">

        <label 
        :for="item.id" 
        :class="isCompletedClasses(item)" 
        class="flex-grow cursor-move">
            <input 
            type="checkbox" 
            name="" 
            :id="item.id" 
            :checked="item.completed_at != null"
            @change="markCompleteItem({ id: item.id, checked: $event.target.checked })" 
            />
            {{ item.title }}
        </label>

        <span>
            
            <FontIcon 
            icon="pen" 
            class="text-dark-green text-sm cursor-pointer" 
            title="Edit item" 
            @click.prevent="setEditing({ item, edit: true })"
            />
            
        </span>

    </div>

    
</template>

<script>
    import { useStore } from 'vuex'
    export default {
        
        props: {
            item: {
                required: true,
                type: Object
            }
        },

        setup() {
            
            const store = useStore()

            const isCompletedClasses = (item) => [
                { 'line-through': item.completed_at != null },
                { 'text-gray-400': item.completed_at != null }
            ]

            const markCompleteItem = (data) => store.dispatch('markCompleteItem', data)

            const setEditing = (data) => store.commit('setItemEditing', data)

            return {
                setEditing,
                markCompleteItem,
                isCompletedClasses
            }

        }

    }
</script>

<style lang="scss" scoped>

</style>