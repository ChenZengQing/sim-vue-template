<template>
    <div id="app">
        <!--<iframe id="geoPage" width=0 height=0 frameborder=0 style="display:none;" scrolling="no"-->
                <!--src="https://apis.map.qq.com/tools/geolocation?key=QMXBZ-UPUK6-55OSQ-ELBZT-RWNOK-BOBRQ&referer=myapp">-->
        <!--</iframe>-->
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                center: {
                    lng: 0,
                    lat: 0
                },
                zoom: 15,
            }
        },
        created() {
            // window.addEventListener('message', (event) => {
            //     // 接收位置信息
            //     let loc = event.data;
            //     if (loc && loc.module === 'geolocation') {
            //         this.Log.log('location', loc, event);
            //     } else if (event.data) { //定位组件在定位失败后，也会触发message, event.data为null
            //         this.Log.log('定位失败', event);
            //     }
            // }, false);
            // //为防止定位组件在message事件监听前已经触发定位成功事件，在此处显示请求一次位置信息
            // document.getElementById("geoPage").contentWindow.postMessage('getLocation', '*');
            this.$http.get('/map/ws/location/v1/ip',
                {
                    params:{
                        key: 'QMXBZ-UPUK6-55OSQ-ELBZT-RWNOK-BOBRQ'
                    }
                }
            ).then((res)=>{
                this.Log.log('then ',res)
            }).catch((err)=>{
                this.Log.log('catch ',err);
            })
        },
        mounted() {},
        methods: {}
    }
</script>

<style lang="scss">
    $backGround: #FFFFFF;
    body {
        background: $backGround;
        margin: 0;
        padding: 0;
        .bm-view {
            width: 100%;
            height: 300px;
        }
    }

    /*#app {*/
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    /*}*/

</style>
