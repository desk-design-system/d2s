// /* eslint-disable import/prefer-default-export */
import * as DDSystem from "./components.js"

export * as DDSystem from "./components.js"

const install = (app, options) =>{
  Object.keys(DDSystem).forEach((name) => {
    app.component(name, DDSystem[name]);
  });
}

export default install