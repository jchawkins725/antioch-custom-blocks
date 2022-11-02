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
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette, TextControl } from "@wordpress/components";
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
	return (
		<section {...blockProps}>
			{/* Sidebar Controls */}
			<InspectorControls>
				<PanelBody title={__("Accordion Title Color")}>
					<ColorPalette
						value={attributes.color}
						colors={theme.settings.color.palette}
						onChange={(color) => setAttributes({ color })}
					/>
				</PanelBody>
				<PanelBody title={__("Accordion Header Colors")}>
					<ColorPalette
						value={attributes.headers}
						colors={theme.settings.color.palette}
						onChange={(headers) => setAttributes({ headers })}
					/>
				</PanelBody>
				<PanelBody title={__("Accordion Icon Options")}>
					<TextControl
						label="Font Awesome Class"
						value={attributes.icon}
						onChange={(icon) => setAttributes({ icon })}
						help="Enter only the class from Font Awesome i.e. 'fa-regular fa-chevron-down'"
					/>
				</PanelBody>
			</InspectorControls>
			{/* Block Content */}
			<RichText
				tagName="h2"
				onChange={(title) => setAttributes({ title })}
				value={attributes.title}
				placeholder="Enter optional title"
				className={"accordion-title"}
				style={{ color: attributes.color }}
			/>
			<div className="accordion">
				<InnerBlocks
					allowedBlocks={["antioch-custom-blocks/accordion-card"]}
					template={[["antioch-custom-blocks/accordion-card"]]}
					headingColors={attributes.headers}
				/>
			</div>
		</section>
	);
}
