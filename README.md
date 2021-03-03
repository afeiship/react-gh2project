# react-gh2project
> React github pages to project.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-gh2project
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| href      | string | false    | -       | Default value.                        |


## usage
1. import css
  ```scss
  @import "~@jswork/react-gh2project/dist/style.css";

  // or use sass
  @import "~@jswork/react-gh2project/dist/style.scss";

  // customize your styles:
  $react-gh2project-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactGh2project from '@jswork/react-gh2project';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-gh2project">
          <ReactGh2project />
          <ReactGh2project disabled style={{ top: '40%' }} />
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-gh2project/


## license
Code released under [the MIT license](https://github.com/afeiship/react-gh2project/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-gh2project
[version-url]: https://npmjs.org/package/@jswork/react-gh2project

[license-image]: https://img.shields.io/npm/l/@jswork/react-gh2project
[license-url]: https://github.com/afeiship/react-gh2project/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-gh2project
[size-url]: https://github.com/afeiship/react-gh2project/blob/master/dist/react-gh2project.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-gh2project
[download-url]: https://www.npmjs.com/package/@jswork/react-gh2project
