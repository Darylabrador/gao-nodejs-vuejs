import tokenConfig  from '../utils/tokenConfig';

export default {
    data(){
        return {
            isLogged: tokenConfig.getToken()
        }
    },

    created() {
        console.log(this.isLogged)
    },

    methods: {
        disconnected() {
            tokenConfig.removeToken();
            location.href = '/connexion';
            // this.$router.push('/connexion');
        }
    }
}