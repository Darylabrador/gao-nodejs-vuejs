import tokenConfig  from '../utils/tokenConfig';

export default {
    data(){
        return {
            isLogged: tokenConfig.getToken()
        }
    },
    methods: {
        disconnected() {
            tokenConfig.removeToken();
            location.href = '/connexion';
            // this.$router.push('/connexion');
        }
    }
}