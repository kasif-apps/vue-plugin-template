import { createApp } from 'vue'
import App from './App.vue'
import type { App as KasifApp } from "@kasif-apps/app";
import { greet } from '../remote/index';

export async function init(app: KasifApp) {
  const message = await greet("from vue plugin")
  app.notificationManager.success(message, "Hello");

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
