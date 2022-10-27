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
				<path d="M64 176h320v-32H64V176zM24 48H64v64h320v-64h40C437.3 48 448 37.25 448 24C448 10.74 437.3 0 424 0H24C10.75 0 0 10.74 0 24C0 37.25 10.75 48 24 48zM112 48h224v32h-224V48zM384 272H64v32h320V272zM432 208H64v32h368C440.8 240 448 232.8 448 224C448 215.2 440.8 208 432 208zM424 464H384v-64H64v64H24C10.75 464 0 474.7 0 488C0 501.3 10.75 512 24 512h400c13.25 0 24-10.75 24-24C448 474.7 437.3 464 424 464zM336 464h-224v-32h224V464zM64 368h320v-32H64V368z" />
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
