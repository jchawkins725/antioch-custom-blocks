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
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
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
		<section {...blockProps}>
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
			<InnerBlocks.Content />
		</section>
	);
}
