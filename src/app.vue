    <template>
       <div id="app">
            <div id="cover">
                <Header></Header>
                <Footer></Footer>
            </div>
             
       </div>
    </template>
    <script>
    import Header from './todo/header.vue'
    import Footer from './todo/footer.jsx'
    export default {
            data(){
                return {
                   
                }    
            },
            components:{
                Header,
                Footer,
            }
    }
    </script>


    <style scoped>
     #conver{
           position: absolute;
           left: 0;
           right: 0;
           top: 0;
           bottom: 0;
     }
    </style>
