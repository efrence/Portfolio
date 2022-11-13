import Layout from './Layout.vue'
import { Quasar } from 'quasar';
// import quasarIconSet from 'quasar/icon-set/svg-mdi-v6';
import { isClientSide } from '../utils/ssg';

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';
import '@quasar/extras/material-icons-round/material-icons-round.css';
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css';
import '@quasar/extras/mdi-v6/mdi-v6.css';

// Import Quasar css
import 'quasar/dist/quasar.css';

// Import Unocss
import 'uno.css';


// import QBtn from 'quasar/src/components/btn/QBtn.js'
// Import icon libraries
// import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
// import 'quasar/src/css/index.sass'

export default {
  Layout,
  enhanceApp({ app }) {
		if(isClientSide()){
			app.use(Quasar, {
	//			iconSet: quasarIconSet,
				config: {}
			})
		}
  }
}
