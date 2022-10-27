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
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { colors } from "./colors";
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
  const blockProps = useBlockProps.save({
    className: `${attributes.size ? "normalhero" : "smallerhero"} ${attributes.letters ? "auletters" : ""} ${
      colors.find((e) => e.color === attributes.color).class
    }`,
  });
  const {select} = wp.data;
  return (
    <section {...blockProps}>
      {attributes.imageUrl && (
        <>
          <div class='overlayimg'></div>
          <div class='bgimg' style={{ backgroundImage: `url(${attributes.imageUrl})` }}></div>
        </>
      )}
      <div class='container'>
        {attributes.subtitle && <RichText.Content tagName='p' value={attributes.subtitle} className={"subtitle"} />}
        <RichText.Content tagName='h1' value={attributes.title !== "" ? attributes.title : select("core/editor").getEditedPostAttribute('title')} />
        {attributes.description && attributes.size && <RichText.Content tagName='p' value={attributes.description} className={"description"} />}
      </div>
    </section>
  );
}
