import AddAttribution from '../components/modal/AddAttribution.vue';

export default {
    components: {
        AddAttribution
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
            heureAttribution: "",
            selectedDesktop: ""
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
            for(let i = 0; i < 10; i++){
                let hour = 8 + i;
                if(this.attributions[hour]) {
                    this.timeslots.push({
                        heure: hour,
                        attribution: `${this.attributions[hour].client.surname} ${this.attributions[hour].client.name}`,
                        idAttribution: this.attributions[hour].idAttribution
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
        }
    }
}