// /* eslint-disable import/prefer-default-export */
export * as DDSystem from "./components.js"
import {useNotification} from "./notification"

const install = (app, options) =>{
  app.provide('$notification', useNotification())
  app.config.globalProperties.$notification = useNotification()
  Object.keys(DDSystem).forEach((name) => {
    app.component(name, DDSystem[name]);
  });
}

export default install