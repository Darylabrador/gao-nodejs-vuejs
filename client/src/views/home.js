/**
 * Dashboard data
 */

import Axios from 'axios';
import Ordinateur from './Ordinateur.vue';
import AddOrdinateurModal from '../components/modal/AddOrdinateurModal.vue';

export default {
    components : {
        Ordinateur,
        AddOrdinateurModal
    },

    data(){
        return {
            ordinateurs: []
        }
    },

    created() {
        this.getAll();
    },

    methods: {
        async getAll(){
            try {
                const allDesktop = await Axios.get('http://127.0.0.1:3000/api/computers');
                const desktopInfo = allDesktop.data.desktopInfo;
                desktopInfo.forEach(info => {
                    this.ordinateurs.push(info)
                })
            } catch (error) {
                console.log(error)
            }
        },
        addDesktop(newDesktop) {
            this.ordinateurs.push(newDesktop)
        }
    }
}