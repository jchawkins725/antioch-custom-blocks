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
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save();
	return (
		<div {...blockProps}>
			<div className="card-header">
				<button>
					<RichText.Content
						tagName="h3"
						value={attributes.title}
						className={"accordion-card-header"}
						style={{ color: attributes.color }}
					/>
					<i class={attributes.icon ? attributes.icon : "fa-regular fa-chevron-down"} style={{color:attributes.color}}></i>
				</button>
			</div>
			<div className="accordion-collapse collapse">
				<div className="card-body">
					<InnerBlocks.Content/>
				</div>
			</div>
		</div>
	);
}
