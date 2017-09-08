new Vue({
    el: '#app',
    data: {
        images: [],
        current: 0,
        intervalId: ''
    },
    mounted() {
        $.get('/data.json', data => {
            if (data) {
                // console.log(data);
                this.images = data;
                this.start();
            }
        });
    },
    computed: {},
    methods: {
        prev: function() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            this.current--;
        },
        next: function() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
            this.current++;
        },
        animate: function() {
            this.current++;
            if (this.current === this.images.length) {
                this.current = 0;
            }
        },
        start: function() {
            var animate = this.animate;
            this.intervalId = setInterval(animate.bind(this), 2500);
        }
    }
});