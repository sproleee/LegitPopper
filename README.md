# Legit Popper
Popup script with different configurations. Show your content at strategic times and sequences.

# Install
Run ```npm install legit-popper```

# To Use
Simply run ```new LegitPopper({...config}).init()```

# Configuration
Legit Popper takes a configuration object with customizations for your popup. Here is the full configuration object in detail:

```{
{
      content: // content you want displayed,
      showWhen: // % of screen user has scrolled in order for the popper to appear; default: 0 (shows immediately),
      timeUntil: // how long popper should be show on the screen before disappearing (in ms); default: shown indefinitely/doesn't disappear without user input,
      onlyOnce: // whether or not popper should be shown only once for a user; default: false,
      closeButton: // show close button; default: true,
      closeButtonPosition: // position of close button; default: "right",
      position: // potition of the popper (i.e. "br", "bl", "tr", "tl"); default: "br" (bottom right),
      bgColor: // popper background color; default: "#fff",
      textColor: // text color; default: "#444",
      borderWidth: // popper border width; default: 1,
      borderColor: // popper border color; default: "#d6d6d6",
      borderRadius: // popper border radius; default: 3,
      boxShadow: // show box shadow around popper; default: true,
      width: // width of popper window in % of horizontal screen; default: 0,
      fullWidth: // full width of popper window (same as 100% of width); default: false,
      padding: // popper padding (in px); default: 20,
    };
```

Customize any or all the values, pass it into the popper function and you're good to go.

# TODO
Remove jQuery as a dependency (fadeIn and fadeOut functions).
