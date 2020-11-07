import AddAttribution from '../components/modal/AddAttribution.vue';
import RemoveAttribution from '../components/modal/RemoveAttribution.vue';

export default {
    components: {
        AddAttribution,
        RemoveAttribution
    },

    props: {
        ordinateurName: {},
        ordinateurId: {},
        attribution: {},
        currentDate: {}
    },

    data(){
        return {
            attributions: {},
            timeslots: [],
            attributionDialog: false,
            removeAttributionDialog: false,
            heureAttribution: "",
            selectedDesktop: "",
            attributionId: ""
        }
    },

    created() {
        this.initialize()
        this.displayHoraire()
    },

    methods: {
        initialize(){
            this.attribution.forEach(attr => {
                this.attributions[attr.hours] = {
                    client: attr.Client,
                    date: attr.date,
                    idAttribution: attr.id
                }
            });
        },

        displayHoraire() {
            this.timeslots = [];
            for(let i = 0; i < 10; i++){
                let hour = 8 + i;
                if(this.attributions[hour]) {
                    this.timeslots.push({
                        heure: hour,
                        attribution: `${this.attributions[hour].client.surname} ${this.attributions[hour].client.name}`,
                        idAttribution: this.attributions[hour].idAttribution,
                        client: this.attributions[hour].client
                    })
                }else {
                    this.timeslots.push({
                        heure: hour,
                        attribution: "",
                    })
                }
            }
        },

        addAttribution(dialog, heure, ordinateurId){
            this.attributionDialog = dialog;
            this.heureAttribution  = heure;
            this.selectedDesktop   = ordinateurId;
        },
        
        infoAttribution(val) {
            this.attributions[val.hours] = {
                client: val.Client,
                date: val.date,
                idAttribution: val.id
            }
            this.initialize();
            this.displayHoraire();
        },

        removeAttribution(dialog, attributionId) {
            this.removeAttributionDialog = dialog;
            this.attributionId = attributionId;
        },

        removeAttributionData(attributionId) {
            this.attributions = {};
            const refreshDeleteData = this.timeslots.filter(element => element.idAttribution != attributionId);
            refreshDeleteData.forEach(element => {
                if(element.client) {
                    this.attributions[element.heure] = {
                        client: element.client,
                        idAttribution: element.idAttribution
                    }
                }
            });
            this.displayHoraire();
        }
    }
}