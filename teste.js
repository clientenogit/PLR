! function (e, s, t, a, d, n, r) {
    e.smrtvds || (d = e.smrtvds = function () {
        d.callMethod ? d.callMethod.apply(d, arguments) : d.queue.push(arguments)
    }, e._smrtvds || (e._smrtvds = d), d.push = d, d.loaded = !0, d.version = "1.1", d.queue = [], (n = s.createElement("script")).async = !0, n.src = "https://cdn.converteai.net/lib/js/smartplayer/v1/smartplayer.min.js", s.getElementsByTagName("head")[0].appendChild(n))
}(window, document);
document.getElementById('vid_6226ac18aa8f7e000965d88e') || (function (w, d, s, c) {
    s = d.getElementById('scr_6226ac18aa8f7e000965d88e');
    c = d.createElement('DIV');
    c.id = 'vid_6226ac18aa8f7e000965d88e';
    s.parentElement.insertBefore(c, s);
})(window, document);
window.smrtvds('vid_6226ac18aa8f7e000965d88e', '8b03b5e9-1e95-4b45-9063-037ac9b350ab', '6226ab9f1e4de60009c5576d', {
    "autoplay": "smartplay",
    "theme": "#4A90E2",
    "foreground_color": "#FFFFFF",
    "video": {},
    "cdn": "cdn.converteai.net",
    "domains": [],
    "displays": {
        "big_play": true,
        "play_pause": true,
        "backward": false,
        "forward": false,
        "volume": false,
        "volume_bar": false,
        "time": false,
        "fullscreen": false,
        "seekbar": false,
        "seekbar_time": false,
        "speed": true
    },
    "callAction": [],
    "resume": true,
    "fake_bar": true,
    "smartplay_options": {
        "top_text": "Seu vÃ­deo jÃ¡ comeÃ§ou",
        "bottom_text": "Clique para ouvir",
        "foreground_color": "#FFFFFF",
        "background_color": "rgba(24,144,255,0.7)"
    },
    "resume_options": {
        "play": "Continuar assistindo?",
        "title": "VocÃª jÃ¡ comeÃ§ou a assistir esse vÃ­deo",
        "replay": "Assistir do inÃ­cio?",
        "disable_pause": false,
        "foreground_color": "#FFFFFF",
        "background_color": "#1890FF"
    },
    "fake_bar_options": {
        "height": 10
    }
});