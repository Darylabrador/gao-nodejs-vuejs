import Axios from 'axios';
import tokenConfig from '../../utils/tokenConfig';

export default {
    props: {
        dialog: {},
        ordinateur: {}
    },

    methods: {
        close() {
            this.$emit('update:dialog', false);
        },
        deleteOrdinateur() {
            Axios.delete('http://127.0.0.1:3000/api/computers', {
                params: {
                    id: this.ordinateur
                },
                headers: {
                    Authorization: `Bearer ${tokenConfig.getToken()}`
                }
            }).then(() => {
                this.$emit("removeDesktop", this.ordinateur);
                this.close();
            }).catch(() => {
                this.flashMessage.error({
                    message: "Ressources indisponible",
                    time: 5000,
                });
            })
        }
    }
}