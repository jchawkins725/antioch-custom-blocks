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
import { PanelBody, ToggleControl} from "@wordpress/components";
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
	const blockProps = useBlockProps({
		className: `${attributes.columns ? "third" : "quarter"}`,
	});

	return (
		<section {...blockProps}>
			{/* Sidebar Controls */}
			<InspectorControls>
				<PanelBody title={__("3 or 4 columns")}>
					<ToggleControl
						help={attributes.columns ? "3 columns" : "4 columns"}
						checked={attributes.columns}
						onChange={(columns) => setAttributes({ columns })}
					></ToggleControl>
				</PanelBody>
			</InspectorControls>
			{/* Block Content */}
			<RichText
				tagName="h2"
				onChange={(title) => setAttributes({ title })}
				value={attributes.title}
				placeholder="Enter optional title"
				className={"icon-list-title"}
			/>
			<div className="container">
				<InnerBlocks
					orientation="horizontal"
					allowedBlocks={["antioch-custom-blocks/icon-list-inner"]}
					template={[["antioch-custom-blocks/icon-list-inner"]]}
				/>
			</div>
		</section>
	);
}
