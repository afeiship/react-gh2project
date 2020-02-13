# react-gh2project
> React github pages to project.

## installation
```shell
npm install -S @feizheng/react-gh2project
```

## update
```shell
npm update @feizheng/react-gh2project
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| href      | string | -       | Default value.                        |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-gh2project/dist/style.scss";

  // customize your styles:
  $react-gh2project-options: ()
  ```
2. import js
  ```js
  import ReactGh2project from '@feizheng/react-gh2project';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactGh2project />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-gh2project/
- https://simpleicons.org/
