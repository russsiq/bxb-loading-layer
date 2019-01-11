<template>
    <div class="component" v-if="isActive">
        <div class="spinner">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-eclipse">
                <path stroke="none" d="M12 50A38 38 0 0 0 88 50A38 41 0 0 1 12 50" fill="#008cba" transform="rotate(322.127 50 51.5)">
                    <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51.5;360 50 51.5" keyTimes="0;1" dur="0.8s" begin="0s" repeatCount="indefinite"></animateTransform>
                </path>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false,
                required: true
            }
        },
        data() {
            return {
                isActive: this.active
            }
        },
        beforeMount() {
            document.querySelector('body').appendChild(this.$el)
        },
        methods: {
            hide() {
                this.isActive = false
                this.remove(this.$el)
            },
            remove(el) {
                this.$destroy()
                typeof el.remove !== 'undefined'
                    ? el.remove()
                    : el.parentNode.removeChild(el)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .component {
        overflow: hidden;
        z-index: 998;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, .4);
    }
    .spinner {
        z-index: 999;
        position: absolute;
        width: 5em;
        height: 5em;
        top: calc(50% - 2.5em);
        left: calc(50% - 2.5em);
        background: none;
    }
</style>
