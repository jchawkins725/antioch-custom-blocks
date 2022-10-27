/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RadioControl,
	ColorPalette,
	FontSizePicker,
} from "@wordpress/components";
import { threads } from "./threads";
import theme from "../../../../themes/antioch-block-theme/theme.json";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const chooseThread = (value) => {
		setAttributes({
			thread: {
				name: value,
				initial: threads.find((e) => e.name === value).initial,
				final: threads.find((e) => e.name === value).final,
				aspectRatio: threads.find((e) => e.name === value).aspectRatio,
				viewBox: threads.find((e) => e.name === value).viewBox,
				vector: threads.find((e) => e.name === value).vector,
			},
		});
	};
	const strokeSizes = [
		{
			name: __("Super Thin"),
			slug: "thin",
			size: 8,
		},
		{
			name: __("Very Thin"),
			slug: "thin",
			size: 10,
		},
		{
			name: __("Thin"),
			slug: "thin",
			size: 12,
		},
		{
			name: __("Normal"),
			slug: "normal",
			size: 17,
		},
		{
			name: __("Thick"),
			slug: "thick",
			size: 24,
		},
	];
	const fallbackStrokeSize = 17;
	return (
		<section {...blockProps}>
			{/* Sidebar Controls */}
			<InspectorControls>
				<PanelBody title={__("Choose your thread")}>
					<RadioControl
						selected={attributes.thread.name}
						help="Thread animations will only appear on production not while editing"
						options={[
							{ label: "Background Curve", value: "background-curve" },
							{
								label: "Extra Curvy Background",
								value: "background-curve-extra",
							},
							{ label: "Drawn Thread One", value: "drawn-thread-one" },
							{ label: "Drawn Thread Two", value: "drawn-thread-two" },
							{ label: "Drawn Thread Three", value: "drawn-thread-three" },
						]}
						onChange={chooseThread}
					/>
				</PanelBody>
				<PanelBody title={__("Thread Color")}>
					<p>
						*For background curve, choose the color of the preceding block
						<br></br>For drawn thread, pick whatever color you want
					</p>
					<ColorPalette
						value={attributes.color}
						colors={theme.settings.color.palette}
						onChange={(color) => setAttributes({ color })}
					/>
				</PanelBody>
				<PanelBody title={__("Thread Stroke")}>
					<p>*Thread Stroke has no effect on background curve</p>
					<FontSizePicker
						value={attributes.stroke}
						fontSizes={strokeSizes}
						fallbackFontSize={fallbackStrokeSize}
						onChange={(stroke) => setAttributes({ stroke })}
						withSlider={true}
					/>
				</PanelBody>
			</InspectorControls>
			{/* Block Content */}
			<svg
				viewBox={attributes.thread.viewBox}
				class={attributes.thread.name}
				width="100%"
				height="100%"
				preserveAspectRatio={attributes.thread.aspectRatio}
			>
				<path
					vector-effect={attributes.thread.vector}
					d={attributes.thread.initial}
					data-path-to={attributes.thread.final}
					style={{
						stroke: attributes.thread.name.includes("drawn-thread")
							? attributes.color
							: "none",
						fill: attributes.thread.name.includes("drawn-thread")
							? "transparent"
							: attributes.color,
						strokeWidth: `${attributes.stroke}px`,
					}}
				/>
			</svg>
			<InnerBlocks template={[["core/group", {layout: {inherit:true}}, [['core/paragraph']]]]} />
		</section>
	);
}
