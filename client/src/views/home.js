/**
 * Dashboard data
 */

import Axios from 'axios';
import Ordinateur from './Ordinateur.vue';
import AddOrdinateurModal from '../components/modal/AddOrdinateurModal.vue';
import Datepicker from '../components/datepicker/Datepicker.vue';

export default {
    components : {
        Ordinateur,
        AddOrdinateurModal,
        Datepicker
    },

    data(){
        return {
            ordinateurs: [],
            currentDate: new Date().toISOString().substr(0, 10)
        }
    },

    created() {
        this.getAll();
    },

    methods: {
        async getAll(){
            try {
                this.ordinateurs = [];
                const allDesktop = await Axios.get('http://127.0.0.1:3000/api/computers', {
                    params: {
                        date: this.currentDate
                    }
                });
                const desktopInfo = allDesktop.data.desktopInfo;
                desktopInfo.forEach(info => {
                    this.ordinateurs.push(info)
                })
            } catch (error) {
                this.flashMessage.error({
                    message: "Ressource indisponible",
                    time: 5000,
                });
            }
        },

        addDesktop(newDesktop) {
            this.ordinateurs.push(newDesktop)
        },

        async nouvellDate(date) {
            this.currentDate = date;
            await this.getAll();
        },

        removeDesktopInfo(ordinateurId) {
            const newArrayDesktop = this.ordinateurs.filter(element => element.id != ordinateurId);
            this.ordinateurs = [];
            newArrayDesktop.forEach(info => {
                this.ordinateurs.push(info)
            });
        }
    }
}