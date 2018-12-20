<template>
<div id="app" ref="app">
    <div v-transfer-dom>
        <loading v-model="isLoading"></loading>
    </div>

    <transition :enter-active-class="$route.meta.animation">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
import {
    Loading,
    TransferDom
} from 'vux'
import {
    mapState
} from 'vuex'
import OverPull from '@/utils/overPull'

export default {
    directives: {
        TransferDom
    },
    components: {
        Loading,

    },
    computed: {
        ...mapState({
            isLoading: state => state.vux.isLoading
        })
    },
    created() {
        OverPull.init();
    }
}
</script>

<style lang="less">
#app {
    height: 100%;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: #FFFFFF
  }

</style>
