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
import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

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
export default function Edit({ attributes, setAttributes, context }) {
	const blockProps = useBlockProps();
	setAttributes({color: context["headingColors"],icon: context["icons"]});
	return (
		<div {...blockProps}>
			{/* Sidebar Controls */}
			{/* Block Content */}
			<div className="card-header">
				<button>
					<RichText
						tagName="h3"
						onChange={(title) => setAttributes({ title })}
						value={attributes.title}
						placeholder="Enter Card Header"
						className={"accordion-card-header"}
						allowedFormats={["core/bold", "core/italic"]}
						style={{ color: attributes.color }}
					/>
					<span
					dangerouslySetInnerHTML=
					{{
						__html: `<i class="${attributes.icon ? attributes.icon : "fa-regular fa-chevron-down"}" style="color:${attributes.color}"></i>`,
					}}>
					</span>
				</button>
			</div>
			<div className="accordion-collapse collapse show">
				<div className="card-body">
					<InnerBlocks
						allowedBlocks={[
							"core/paragraph",
							"core/heading",
							"core/table",
							"core/image",
							"core/video",
							"core/file",
							"core/buttons",
							"core/separator",
							"core/spacer",
						]}
					/>
				</div>
			</div>
		</div>
	);
}
