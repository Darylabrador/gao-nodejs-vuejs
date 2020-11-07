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
            currentDate: new Date().toISOString().substr(0, 10),
            hasNextPage: null,
            hasPreviousPage: null,
            nextPage: null,
            previousPage: null,
            totalPage: null,
            currentPage: 1
        }
    },

    created() {
        this.getAll();
    },

    watch: {
        currentPage: function(page) {
            this.currentPage = page
            this.getAll();
        }
    },

    methods: {
        async getAll(){
            try {
                this.ordinateurs = [];
                const responseData = await Axios.get('http://127.0.0.1:3000/api/computers', {
                    params: {
                        date: this.currentDate,
                        page: this.currentPage
                    }
                });

                const desktopInfo = responseData.data.desktopInfo;
                desktopInfo.forEach(info => {
                    this.ordinateurs.push(info)
                })

                // Paginations informations 
                this.hasNextPage     = responseData.data.hasNextPage;
                this.hasPreviousPage = responseData.data.hasPreviousPage;
                this.nextPage        = responseData.data.nextPage;
                this.previousPage    = responseData.data.previousPage;
                this.totalPage       = responseData.data.totalPage;

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

        removeDesktopInfo() {
            // const newArrayDesktop = this.ordinateurs.filter(element => element.id != ordinateurId);
            // this.ordinateurs = [];
            // newArrayDesktop.forEach(info => {
            //     this.ordinateurs.push(info)
            // });
            this.getAll();
        }
    }
}