import { createApp } from 'vue'
import App from './App.vue'
import type { App as KasifApp } from "@kasif-apps/app";

export function init(app: KasifApp) {
  app.notificationManager.success("Hello from vue plugin", "Hello");

  app.viewManager.pushView({
    view: {
      id: "vue-plugin",
      title: "Vue Plugin",
      icon: {
        type: "icon",
        render: "brand-vue",
        props: {
          size: 18
        }
      },
      render: {
        render(parent: HTMLElement) {
          createApp(App).mount(parent);

          const instance = document.querySelector("#vue-plugin");
          return () => {
            if (instance) {
              parent.removeChild(instance);
            }
          };
        }
      }
    }
  })
}
