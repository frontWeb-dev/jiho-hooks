# @jiho-hooks/use-coords

---

React hook to find latitude, longitude, and latitude of radius around.
When you enter an argument, it returns the latitude longitude east, west, south, and north that traveled to that distance.

## Installation

---

yarn

```
yarn add @jiho-hooks/use-coords
```

npm

```
npm i @jiho-hooks/use-coords
```

## Usage

---

```js
import React from 'react';
import { useCoords } from './useCoords';

export default function App() {
  const { state, location } = useCoords();
  const { south, north, east, west } = location;

  console.log(state, south, north, east, west);

  return (
    <div className='App'>
      <h1>Hello</h1>
    </div>
  );
}
```

### Arguments

| Arguments | Type   | Description                       | Required |
| --------- | ------ | --------------------------------- | -------- |
| distance  | number | Radius distance you want to check | No       |
