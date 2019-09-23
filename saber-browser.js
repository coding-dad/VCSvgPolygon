import Buefy from 'buefy';

// ===============================
// Configure Bulma theme
//
// import 'buefy/dist/buefy.css';
import './bulmaswitch.min.css';

// ===============================
// Configure Prism theme
//
// import 'prismjs/themes/prism.css';
import './prism-dracula.css';

// ===============================
// Configure global styles
import './styles.css';

// Add Bulma-Buefy UI Framework
export default context => {
    context.Vue.use(Buefy);
};
