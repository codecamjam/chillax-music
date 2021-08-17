export const getCustomStyle = (spriteName) => {
  let customStyle;
  switch (spriteName) {
    case 'icon-warning': customStyle = 'warning'; break;
    case 'icon-export': customStyle = 'export'; break;
    case 'icon-cross': customStyle = 'cross'; break;
    case 'icon-checkmark': customStyle = 'checkmark'; break;
    case 'icon-cw': customStyle = 'update'; break;
    case 'icon-key': customStyle = 'key'; break;
    case 'icon-cycle': customStyle = 'cycle'; break;
    case 'icon-exit': customStyle = 'exit'; break;
    case 'icon-chevron-thin-down': customStyle = 'chevron-thin-down'; break;
    case 'icon-plus': customStyle = 'plus'; break;
    case 'icon-magnifying-glass': customStyle = 'magnifying-glass'; break;
    case 'icon-help': customStyle = 'help'; break;
    case 'icon-circle-with-cross': customStyle = 'error'; break;
    case 'icon-contrast': customStyle = 'darkTheme'; break;
    case 'icon-play2': customStyle = 'playBtn'; break;
    case 'icon-pause': customStyle = 'pauseBtn'; break;
    case 'icon-stop': customStyle = 'stopBtn'; break;
    default: customStyle = null;
  }
  return customStyle;
}