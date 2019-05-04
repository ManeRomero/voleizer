const Partidos = new Vue ({
    el: '#partidos',
    data: {
        title1: 'voleo',
        title2: 'leyenda',
        titleClubs: 'Selecciones Clásicas',
        titleSelecciones: 'Clubs Clásicos',
        seleccion1: false,
        seleccion2: false,
        seleccion3: false,
        seleccion4: false,
        modoClubs: true,
        modoSelecciones: false,
        consulta:[{}],
        equipo1: { 
            name: '',
            escudo: ''
        },

        equipo2: { 
            name: '',
            escudo: ''
        }, 

        clubes: [{
            id: '01',
            name: 'Real Madrid',
            escudo: 'RMADRID'
        },
        {
            id: '02',
            name: 'F.C. Barcelona',
            escudo: 'BARCA'
        },
        {
            id: '03',
            name: 'Atlético de Madrid',
            escudo: 'ATLETI'
        },
        {
            id: '04',
            name: 'Atléthic de Bilbao',
            escudo: 'ATHLETIC'
        },
        {
            id: '05',
            name: 'Valencia C.F.',
            escudo: 'VALENCIA'
        },
        {
            id: '06',
            name: 'Deportivo de la Coruña',
            escudo: 'DEPOR'
        },
        {
            id: '07',
            name: 'Real Betis Balompié',
            escudo: 'BETIS'
        },
        {
            id: '08',
            name: 'Sevilla C.F.',
            escudo: 'SEVILLA'
        },
        {
            id: '09',
            name: 'Real Sociedad',
            escudo: 'RSOCIEDAD'
        },
        {
            id: '10',
            name: 'A.C. Milán',
            escudo: 'MILAN'
        },
        {
            id: '11',
            name: 'Inter Milán',
            escudo: 'INTER'
        },
        {
            id: '12',
            name: 'Juventus Turín',
            escudo: 'JUVE'
        },
        {
            id: '13',
            name: 'Fiorentina',
            escudo: 'FIORE'
        },
        {
            id: '14',
            name: 'A.S. Roma',
            escudo: 'ROMA'
        },
        {
            id: '15',
            name: 'Arsenal',
            escudo: 'ARSENAL'
        },
        {
            id: '16',
            name: 'Liverpool',
            escudo: 'LIVER'
        },
        {
            id: '17',
            name: 'Manchester United',
            escudo: 'MANCHESTER'
        },
        {
            id: '18',
            name: 'Benfica',
            escudo: 'BENFICA'
        },
        {
            id: '19',
            name: 'Estrella Roja',
            escudo: 'ESTRELLA'
        },
        {
            id: '20',
            name: 'Boca Juniors',
            escudo: 'BOCA'
        },
        {
            id: '21',
            name: 'River Plate',
            escudo: 'RIVER'
        },
        {
            id: '22',
            name: 'París Saint Germain',
            escudo: 'PSG'
        },
        {
            id: '23',
            name: 'Olimpyque de Marsella',
            escudo: 'OLIMPYQUE'
        },
        {
            id: '24',
            name: 'Céltic de Glásgow',
            escudo: 'CELTIC'
        },
        {
            id: '25',
            name: 'Ajax de Amsterdam',
            escudo: 'AJAX'
        },
        {
            id: '26',
            name: 'PSV Eindhoven',
            escudo: 'PSV'
        },
        {
            id: '27',
            name: 'Bayern de Múnich',
            escudo: 'BAYERN'
        },
        {
            id: '28',
            name: 'Borussia de Dórtmund',
            escudo: 'BORUSSIA'
        }],

        selecciones:[
            {
                id: '29',
                name: 'España',
                escudo: 'ESP'
            },
            {
                id: '30',
                name: 'Rusia',
                escudo: 'RUS'
            },
            {
                id: '31',
                name: 'Portugal',
                escudo: 'POR'
            },
            {
                id: '32',
                name: 'Francia',
                escudo: 'FRA'
            },
            {
                id: '33',
                name: 'Alemania',
                escudo: 'ALE'
            },
            {
                id: '34',
                name: 'Suecia',
                escudo: 'SUE'
            },
            {
                id: '35',
                name: 'Dinamarca',
                escudo: 'DIN'
            },
            {
                id: '36',
                name: 'Brasil',
                escudo: 'BRA'
            },
            {
                id: '37',
                name: 'Argentina',
                escudo: 'ARG'
            },
            {
                id: '38',
                name: 'Croacia',
                escudo: 'CRO'
            },
            {
                id: '39',
                name: 'Bélgica',
                escudo: 'BEL'
            },
            {
                id: '40',
                name: 'Serbia',
                escudo: 'SER'
            },
            {
                id: '41',
                name: 'Inglaterra',
                escudo: 'ING'
            },
            {
                id: '42',
                name: 'Polonia',
                escudo: 'POL'
            },
            {
                id: '43',
                name: 'Japón',
                escudo: 'JAP'
            },
            {
                id: '44',
                name: 'Colombia',
                escudo: 'COL'
            },
            {
                id: '45',
                name: 'México',
                escudo: 'MEX'
            },
            {
                id: '46',
                name: 'Nigeria',
                escudo: 'NIG'
            },
            {
                id: '47',
                name: 'Uruguay',
                escudo: 'URU'
            },
            {
                id: '48',
                name: 'Perú',
                escudo: 'PER'
            },
            {
                id: '49',
                name: 'Austria',
                escudo: 'AUS'
            },
            {
                id: '50',
                name: 'Chile',
                escudo: 'CHI'
            },
            {
                id: '51',
                name: 'Camerún',
                escudo: 'CAM'
            },
            {
                id: '52',
                name: 'República Checa',
                escudo: 'CHE'
            },
            {
                id: '53',
                name: 'Grecia',
                escudo: 'GRE'
            },
            {
                id: '54',
                name: 'Hungría',
                escudo: 'HUN'
            },
            {
                id: '55',
                name: 'Italia',
                escudo: 'ITA'
            },
            {
                id: '56',
                name: 'Rumanía',
                escudo: 'RUM'
            },
            {
                id: '57',
                name: 'Holanda',
                escudo: 'HOL'
            },
            {
                id: '58',
                name: 'Paraguay',
                escudo: 'PAR'
            },
            {
                id: '59',
                name: 'Turquía',
                escudo: 'TUR'
            },
            {
                id: '60',
                name: 'Ucrania',
                escudo: 'UKR'
            },
            {
                id: '61',
                name: 'Estados Unidos',
                escudo: 'USA'
            },
            {
                id: '62',
                name: 'Irlanda',
                escudo: 'IRL'
            },
            {
                id: '63',
                name: 'Bulgaria',
                escudo: 'BUL'
            },
        ]
    },
    methods: {
        voleo1: function() {
            this.seleccion1 = false
            this.seleccion3 = false
            if(this.modoClubs===true) {
                this.consulta = this.clubes
            } else {
                this.consulta = this.selecciones
            }

            var counter = this.consulta.length
            var result = Math.floor(Math.random() * counter)
            this.equipo1.name = this.consulta[result].name
            this.equipo1.escudo = this.consulta[result].escudo
            if (this.equipo1.name === this.equipo2.name) {
                alert('Haz el favor y vuelve a darle, anda. Se ve que han coincidido los equipos (mis disculpas).')
                this.equipo1.name = ''
                this.equipo1.escudo = ''
            }
        },
        voleo2: function() {
            this.seleccion2 = false
            this.seleccion4 = false
            if(this.modoClubs===true) {
                this.consulta = this.clubes
            } else {
                this.consulta = this.selecciones
            }

            var counter = this.consulta.length
            var result = Math.floor(Math.random() * counter)
            this.equipo2.name = this.consulta[result].name
            this.equipo2.escudo = this.consulta[result].escudo
            if (this.equipo2.name === this.equipo1.name) {
                alert('Haz el favor y vuelve a darle, anda. Se ve que han coincidido los equipos (mis disculpas).')
                this.equipo2.name = ''
                this.equipo2.escudo = ''
            }
        },
    },
})