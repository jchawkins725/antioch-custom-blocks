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
	RichText,
	InspectorControls,
	URLInput,
} from "@wordpress/block-editor";
import { TextControl, PanelBody, ToggleControl } from "@wordpress/components";

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
		<a {...blockProps}>
			{/* Sidebar Controls */}

			<InspectorControls>
				<PanelBody title={__("Icon Options")}>
					<TextControl
						label="Font Awesome Class"
						value={attributes.icon}
						onChange={(icon) => setAttributes({ icon })}
						help="Enter only the class from Font Awesome i.e. 'fa-solid fa-house'"
					/>
				</PanelBody>
				<PanelBody title={__("Icon Link Options")}>
					<URLInput
						value={attributes.url}
						onChange={(url) => setAttributes({ url })}
					/>
					<ToggleControl
					    label="Open in new tab"
						help={attributes.newtab ? "Yes" : "No"}
						checked={attributes.newtab}
						onChange={(newtab) => setAttributes({ newtab })}
					/>
				</PanelBody>
			</InspectorControls>
			{/* Block Content */}
			<div
				className="icon-container"
				dangerouslySetInnerHTML={{
					__html: `<i class="${attributes.icon}"></i>`,
				}}
			></div>
			<div class="content">
				<RichText
					tagName="h3"
					onChange={(title) => setAttributes({ title })}
					value={attributes.title}
					placeholder="Enter title"
					className={"icon-title"}
					allowedFormats={["core/bold", "core/italic"]}
				/>
			</div>
		</a>
	);
}
