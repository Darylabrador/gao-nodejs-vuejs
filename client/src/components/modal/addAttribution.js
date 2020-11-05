import Axios from 'axios';

export default {
    props: {
        ordinateurId: {},
        heureAttribution: {},
        currentDate: {},
        attributionDialog: {},
        dialog: {}
    },

    data() {
        return {
            name: '',
            valid: false,
            loading: false,
            items: [],
            search: null,
            select: null,
            clientId: null
        }
    },
    watch: {
        search(val) {
            val && val !== this.select && this.querySelections(val)
            console.log(val)
            console.log(this.select)
        },
    },
    methods: {
        querySelections(v) {
            if (v.length > 2) {
                setTimeout(() => {
                    Axios.get('http://127.0.0.1:3000/api/clients/search', {
                        params: {
                            client: v
                        }
                    }).then(reponse => {
                        let reponseData = reponse.data.clientList;
                        if(reponseData.length != 0 ) {
                            this.items = [];
                            reponseData.forEach(data => {
                                this.items.push({
                                    id: data.id,
                                    name: data.name,
                                    surname: data.surname,
                                    fullname: `${data.surname} ${data.name}`
                                })
                            })
                        }
                    });
                }, 500)
            }
        },

        async attribuer() {
            let dataSend = {
                date: this.currentDate,
                hours: this.heureAttribution,
                clientId: this.clientId,
                desktopId: this.ordinateurId
            }
            console.log('envoie de la données', dataSend)
        },
        close() {
            this.$emit('update:dialog', false);
        },
    },
}