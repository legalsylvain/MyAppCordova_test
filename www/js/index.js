var app = {
    initialize: function() {
        this.bindEvents();
        this.setupVue();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
    setupVue: function() {
        var vm = new Vue({
            el: "#vue-instance",
            data: {
                randomWord: '',
            },
            methods: {
                getRandomWord: function() {
                    this.randomWord = '...';
                    this.$http.get(
                        'http://api.wordnik.com:80/v4/words.json/randomWord?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
                    ).then(function (response) {
                        this.randomWord = response.data.word;
                    }, function (error) {
                        alert(error.data);
                    });
                }
            }
        });
    }
};

app.initialize();
