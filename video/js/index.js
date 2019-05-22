// https://cdn.plyr.io/3.3.12/plyr.js

const player = new Plyr(
  '#player', { 
  controls : ['play', 'progress', 'fullscreen', 'current-time', 'mute', 'volume', 'captions', 'settings'],
  muted: false,
  duration: 0100,
    
});

 $(".line_split").lettering('lines');