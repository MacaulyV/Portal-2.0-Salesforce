import React, { Component } from 'react';

class KommunicateChat extends Component {
  componentDidMount() {
    (function(d, m){
      var kommunicateSettings = {"appId":"3279be1b4e39b1df0439d50f18cc1e59f","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }

  render() {
    return null;
  }
}

export default KommunicateChat;
