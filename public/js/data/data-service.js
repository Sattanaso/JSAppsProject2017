'use strict';

import {
    ajaxRequester as requester
} from "./jquery-ajax-requester.js";

const data = (() => {
	class Data {
		constructor(requester) {
			this.requester = requester;
		}

		getStatics() {
			return this.requester.get('./statics.json');
		}

		getCloudinaryParams() {
			return this.getStatics
				.then((dataObj) => {
					return dataObj.cloudinaryParams;
				});
		}

		getImages(url) {
			return this.requester.get(url);
		}
	}

	const dataObj = new Data(ajaxRequester);
	return dataObj;
})();

export {
	data
};
