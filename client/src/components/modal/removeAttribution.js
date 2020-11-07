import Axios from 'axios';

export default {
    props: {
        dialog: {},
        attributionInfo: {}
    },
    
    methods: {
        close() {
            this.$emit('update:dialog', false);
        },
        remove(){
            Axios.delete('http://127.0.0.1:3000/api/attributions', {
                params : {
                    id: this.attributionInfo
                }
            }).then(() => {
                this.$emit("removedAttribution", this.attributionInfo);
                this.close();
            }).catch(()=>{
                this.flashMessage.error({
                    message: "Ressources indisponible",
                    time: 5000,
                });
            })
        }
    }
}