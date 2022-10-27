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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512.000000 512.000000"
			>
				<g
					transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
					stroke="none"
				>
					<path
						d="M4840 4711 c-39 -13 -1022 -421 -1052 -437 -21 -11 -154 -156 -217
           -236 -11 -15 -7 -24 38 -74 79 -89 151 -245 151 -326 0 -15 3 -28 8 -28 4 0
           64 67 134 148 l127 148 458 188 c533 220 540 224 581 270 114 130 22 343 -152
           352 -28 2 -62 0 -76 -5z"
					/>
					<path
						d="M3072 3994 c-229 -61 -374 -296 -321 -523 29 -128 126 -247 246 -303
           57 -27 83 -33 159 -36 149 -7 247 31 343 133 107 113 147 271 106 421 -62 229
           -305 370 -533 308z"
					/>
					<path
						d="M95 3563 c-34 -9 -63 -33 -79 -68 -14 -29 -16 -121 -16 -807 0 -749
           1 -774 20 -805 23 -39 67 -63 112 -63 21 1 392 162 1048 458 558 252 1016 453
           1018 447 1 -6 -18 -94 -42 -196 l-45 -186 -297 -419 c-163 -231 -304 -427
           -313 -438 -9 -10 -187 -154 -396 -319 -209 -165 -399 -318 -422 -340 -112
           -107 -109 -276 6 -380 78 -70 196 -84 287 -33 24 13 235 176 469 362 l427 338
           125 175 126 176 -18 328 c-13 233 -16 339 -9 365 10 35 433 707 440 699 2 -2
           -62 -156 -142 -343 -81 -186 -152 -358 -160 -381 -11 -35 -7 -129 26 -666 35
           -566 40 -628 59 -665 41 -81 141 -132 230 -117 85 14 164 95 176 179 3 22 -10
           295 -29 605 l-35 564 144 336 c79 185 144 332 145 328 0 -5 -34 -146 -75 -314
           -79 -323 -85 -368 -66 -537 l6 -59 409 -157 409 -157 166 -478 c149 -427 170
           -482 204 -522 57 -64 107 -87 192 -87 80 0 129 21 184 76 48 48 71 103 71 173
           0 52 -24 129 -185 594 -102 294 -195 552 -208 574 -39 72 -83 94 -456 237
           -194 74 -356 140 -358 147 -3 7 40 200 95 430 55 230 99 419 98 420 -1 1 -25
           -6 -52 -16 -274 -105 -596 26 -723 293 -40 83 -61 160 -61 221 l0 35 -1242 -1
           c-684 -1 -1252 -4 -1263 -6z"
					/>
				</g>
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
