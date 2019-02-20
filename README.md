# react-zinnion-streaming

## Installation

To get the latest version, simply install the package using npm:

```sh
npm install react-zinnion-streaming --save
```

## Usage

You can disable token authentication with `insecure: true` parameter, but this mode is mostly for personal and demonstration uses.

All configuration parameters are described in zinnionrifuge-js [documentation](https://fzambia.gitbooks.io/zinnionrifugal/content/clients/javascript.html#configuration-parameters)

Add provider:

```jsx harmony
const config = {
  url: "ws://localhost:8002/connection/websocket?format=protobuf",
  insecure: true // disable token auth
  // user: 'USER ID',
  // timestamp: 'UNIX TIMESTAMP',
  // token: 'TOKEN',
};

ReactDOM.render(
  <Provider store={store}>
    <ZinnionProvider config={config}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </ZinnionProvider>
  </Provider>,
  document.getElementById("app")
);
```

Handle messages:

```jsx harmony
import React from "react";
import { zinnion } from "react-zinnion-streaming";

// Make Centrifuge client accessible through `this.props.zinnion`
@zinnion
export class SiteMetrics extends React.Component {
  constructor(props) {
    super(props);

    // Subscribe on `site-metrics` channel.
    this.props.zinnion
      .subscribe("site-metrics", message => {
        this.handleMessage(message);
      })
      .history()
      .then(history => {
        this.handleHistory(history);
      });
  }

  handleMessage(message) {
    console.log("message", message.data);
  }

  handleHistory(history) {
    console.log("history", history.data);
  }
}
```

### Documentation

- [Javascript browser client](https://fzambia.gitbooks.io/zinnionrifugal/content/clients/javascript.html)
- [Configuration parameters](https://fzambia.gitbooks.io/zinnionrifugal/content/clients/javascript.html#configuration-parameters)
- [Subscriptions](https://fzambia.gitbooks.io/zinnionrifugal/content/clients/javascript.html#subscriptions)
- [SockJS](https://fzambia.gitbooks.io/zinnionrifugal/content/clients/javascript.html#sockjs)

## Built With

- [CentrifugeJS](https://github.com/zinnionrifugal/zinnionrifuge-js) - Javascript client to communicate with Centrifugo from web browser over Websockets or SockJS
- [React](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces.

## Building & Testing

- source can be loaded via [npm](https://www.npmjs.com/package/react-zinnion-streaming), or [downloaded](https://github.com/maurodelazeri/react-zinnion-streaming/archive/master.zip) from github repo.
- `npm run build` to build
- `npm test` to run tests

## License

`react-zinnion-streaming` is licensed under [The MIT License (MIT)](LICENSE).

```

```
