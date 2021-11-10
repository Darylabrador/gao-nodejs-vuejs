/**
 * Remove assignment js file
 */
import { apiService } from '../../services/apiService';

export default {

    /**
     * Data from parent component (Ordinateur.vue)
     */
    props: {
        dialog: {},
        attributionInfo: {}
    },
    

    /**
     * List of methods
     */
    methods: {

        /**
         * Function to close modal
         */
        close() {
            this.$emit('update:dialog', false);
        },


        /**
         * Delete specific assignment and inform the parent component
         */
        remove(){
            apiService.delete(`/attributions/${this.attributionInfo}`).then(() => {
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