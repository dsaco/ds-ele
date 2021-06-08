import { App } from 'vue';

import Button from './src/index.vue';

Button.install = (app: App): void => {
	app.component(Button.name, Button);
};

export default Button;
