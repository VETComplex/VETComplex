var Tweets = new TWTR.Widget({
    version: 2,
    type: 'search',
    search: '#villaetrucia',
    interval: 30000,
    title: '#VillaEtrucia Tweets',
    subject: '',
    width: 750,
    height: 125,
    theme: {
        shell: {
            background: '#E7DCCA',
            color: '#000000'
        },
        tweets: {
            background: '#ffffff',
            color: '#444444',
            links: '#1985b5'
        }
    },
    features: {
        scrollbar: false,
        loop: true,
        live: true,
        behavior: 'default'
    }
});

Tweets.render().start();