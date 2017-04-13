'use strict';

import {
	view as view
} from "./view/view-service.js";

import {
	router as router
} from "./router.js";

$(function () {
	$(() => {
		// alert('SystemJS works!');
		view.header('#header', {});
		view.footer('#footer', {});

		router.init;
	});
});
