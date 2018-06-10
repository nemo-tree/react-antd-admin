export const particles= {
  number: {
      value: 60
  },
  'color': {
    'value': '#f2895c'
  },
  'size': {
    'value': 6,
    'random': true,
    'anim': {
      'enable': false,
      'speed': 80,
      'size_min': .5,
      'sync': true
    }
  },
  'move': {
    'enable': true,
    'speed': 3,
    'direction': 'none',
    'random': true,
    'straight': false,
    'out_mode': 'out',
    'bounce': false,
    'attract': {
      'enable': true,
      'rotateX': 600,
      'rotateY': 1200
    }
 },
  line_linked: {
    enable_auto: true,
    distance: 220,
    color: '#ffffff',
    opacity: 1,
    width: 1,
    condensed_mode: {
      enable: false,
      rotateX: 600,
      rotateY: 600
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 300
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .7
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 4
      }
    }
  }
}