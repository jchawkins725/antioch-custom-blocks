/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	icon: {
		foreground: "#50a684",
		src: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
				<path d="M25 32.05C12.05 31.18 .5833 41.77 .0208 55.02c-.5469 13.25 9.734 24.44 22.98 24.97C222.5 88.36 391.7 257.5 400 457C400.6 469.9 411.2 480 423.1 480c.3438 0 .6718 0 1.016-.0313c13.25-.5312 23.53-11.72 22.98-24.97C438.6 231.1 248.9 41.39 25 32.05zM25.57 176.1c-13.16-.7187-24.66 9.156-25.51 22.37C-.8071 211.7 9.223 223.1 22.44 223.9c120.1 7.875 225.7 112.7 233.6 233.6C256.9 470.3 267.4 480 279.1 480c.5313 0 1.062-.0313 1.594-.0625c13.22-.8437 23.25-12.28 22.39-25.5C294.6 310.3 169.7 185.4 25.57 176.1zM63.1 351.9c-16.38 0-32.75 6.314-45.25 18.81c-24.99 24.99-24.99 65.51 0 90.5C31.25 473.8 47.62 480 63.1 480s32.76-6.25 45.26-18.75c24.99-24.99 24.99-65.51 0-90.5C96.76 358.3 80.38 351.9 63.1 351.9zM75.32 427.3c-4.078 4.078-8.838 4.687-11.31 4.687s-7.234-.6093-11.31-4.687c-4.076-4.078-4.685-8.836-4.685-11.31c0-2.476 .6094-7.234 4.687-11.31c4.078-4.078 8.838-4.687 11.31-4.687s7.234 .6093 11.31 4.687c4.078 4.078 4.685 8.836 4.685 11.31C80 418.5 79.4 423.2 75.32 427.3z" />
			</svg>
		),
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});