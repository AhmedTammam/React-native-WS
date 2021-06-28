/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';

import {SectionContainer} from './src';
import {Message} from './src/message';

const App = () => {
  const wsUri = 'wss://echo.websocket.org';
  let webSocket = new WebSocket(wsUri);
  const [message, setMessage] = useState('');
  const [textValue, setTextValue] = useState('');

  webSocket.onopen = event => {
    console.log('opended', event);
  };
  webSocket.onclose = event => {
    console.log('closed', event);
  };
  webSocket.onmessage = event => {
    setMessage(event.data);
  };
  webSocket.onerror = event => {
    console.log('err', event);
  };

  const sendNotification = text => {
    webSocket.send(text);
    setTextValue('');
  };

  return (
    <>
      <SectionContainer />
      <TextInput
        onChangeText={setTextValue}
        value={textValue}
        placeholder="Type your message"
      />
      <Button
        onPress={() => {
          sendNotification(textValue);
        }}
        title="Send"
      />
      <Message message={message} />
    </>
  );
};

export default App;
