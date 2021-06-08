import { App } from 'vue';
import Button from '@ds-ele/button/index';
import Alert from '@ds-ele/alert/index';
import Avatar from '@ds-ele/avatar/index';

export default (app: App) => {
    Button.install(app);
    Alert.install(app);
    Avatar.install(app);
}