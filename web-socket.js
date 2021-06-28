const wsUri = 'wss://echo.websocket.org';
export let websocket;

export const wsInit = () => {
  //   testWebSocket();
  let webSocket = new WebSocket(wsUri);
  return webSocket;
};

const testWebSocket = () => {
  websocket = new WebSocket(wsUri);
  websocket.onopen = event => {
    onOpen(event);
  };
  websocket.onclose = event => {
    onClose(event);
  };
  websocket.onmessage = event => {
    onMessage(event);
    window.x = event.data;
  };
  websocket.onerror = event => {
    onError(event);
  };
};

const onOpen = event => {
  doSend('webSocket rocks');
  writeToScreen('Connected');
  console.log('Connected');
};

const onClose = event => {
  writeToScreen('Disconnected');
  console.log('Disconnected');
};

const onMessage = event => {
  websocket.close();
  writeToScreen(event.data);
  console.log('Recieved', event.data);
};

const onError = event => {
  writeToScreen(event.data);
  console.log(event.data);
};

export const doSend = message => {
  websocket.send(message);
  writeToScreen('SENT: ' + message);
  console.log('SENT: ' + message);
};

const writeToScreen = message => {
  return message;
};
