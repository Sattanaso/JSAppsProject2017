'use strict';

import {
    view as view
} from "./view/view-service.js";

const router = {
	init: $(function () {
		const appRouter = new Navigo(null, true);
		appRouter
			.on({
				'/home': () => {
					view.home('#content', {})
				},
				'/info': () => {
					view.info('#content', {})
				},
				'/contacts': () => {
					view.contacts('#content', {})
				},
				'/login': () => {
					view.home('#content', {})
				},
				'/': () => {
					appRouter.navigate('/home');
				},
				'*': () => {
					appRouter.navigate('/home');
				}
			})
			.notFound(function () {
				alert('Error! Router not found!');
			})
			.resolve();
	})
}

export {
	router
};
