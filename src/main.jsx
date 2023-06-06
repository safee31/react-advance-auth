import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import "./assets/js/vendor/jquery-3.3.1.min.js";
import "./assets/js/vendor/bootstrap.bundle.min.js";
// import './assets/js/vendor/Sortable.js'
// import './assets/js/vendor/mousetrap.min.js'
// import "./assets/js/vendor/owl.carousel.min.js";
// import './assets/js/vendor/perfect-scrollbar.min.js'
// import './assets/js/vendor/mousetrap.min.js'
// import './assets/js/vendor/jquery.barrating.min.js'
// import './assets/js/vendor/landing-page/headroom.min.js';
// import './assets/js/vendor/landing-page/jQuery.headroom.js';
// import './assets/js/vendor/landing-page/jquery.scrollTo.min.js';
// import './assets/js/vendor/landing-page/jquery.autoellipsis.js';
// import './assets/js/dore.scripts.landingpage.js';
// import './assets/js/dore.script.js';
// import './assets/js/scripts.js';

// import "./assets/css/vendor/bootstrap.rtl.only.min.css";
import "./assets/css/vendor/bootstrap-float-label.min.css";
import "./assets/css/vendor/smart_wizard.min.css";
import "./assets/css/vendor/perfect-scrollbar.css";
import "./assets/css/vendor/component-custom-switch.min.css";

import "./assets/css/vendor/bootstrap.min.css";
import "./assets/font/iconsmind-s/css/iconsminds.css";
import "./assets/font/simple-line-icons/css/simple-line-icons.css";
import "./assets/css/vendor/bootstrap-stars.css";
import "./assets/css/vendor/owl.carousel.min.css";
import "./assets/css/vendor/video-js.css";
import "./assets/css/dore.light.purplemonster.min.css";
import "./assets/css/main.css";
import store from "./Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
