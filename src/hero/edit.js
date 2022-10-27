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
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	PanelBody,
	PanelRow,
	Button,
	ResponsiveWrapper,
	ToggleControl,
	ColorPalette,
} from "@wordpress/components";
import { colors } from "./colors";

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
		className: `${attributes.size ? "normalhero" : "smallerhero"} ${
			attributes.letters ? "auletters" : ""
		} ${colors.find(e => e.color === attributes.color).class}`
	});
	const chooseImage = (value) => {
		setAttributes({
			imageUrl: value.url,
			imageId: value.id,
			imageWidth: value.width,
			imageHeight: value.height,
		});
	};
	
	return (
		<section {...blockProps}>
			{/* Sidebar Controls */}
			<InspectorControls>
				<PanelBody title={__("Hero Size")}>
					<ToggleControl
						help={attributes.size ? "Normal" : "Small"}
						checked={attributes.size}
						onChange={(size) => setAttributes({ size })}
					></ToggleControl>
				</PanelBody>
				<PanelBody title={__("Background Image")}>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={chooseImage}
								allowedTypes={["image"]}
								value={attributes.imageUrl}
								render={({ open }) => (
									<Button
										className={
											attributes.imageId == 0
												? "editor-post-featured-image__toggle"
												: "editor-post-featured-image__preview"
										}
										onClick={open}
										showTooltip="true"
										label={__(
											"Minimum 1500x525px image, should be under 100k (over 700k not allowed!). Background image supersedes background color."
										)}
									>
										{attributes.imageId == 0 &&
											__("Choose an image", "antioch-custom-blocks")}
										<ResponsiveWrapper
											naturalWidth={attributes.imageWidth}
											naturalHeight={attributes.imageHeight}
										>
											<img src={attributes.imageUrl} />
										</ResponsiveWrapper>
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>

					{attributes.imageId != 0 && (
						<PanelRow>
							<MediaUploadCheck>
								<MediaUpload
									title={__("Replace image", "antioch-custom-blocks")}
									value={attributes.mediaId}
									onSelect={chooseImage}
									allowedTypes={["image"]}
									render={({ open }) => (
										<Button onClick={open} isDefault isLarge>
											{__("Replace image", "antioch-custom-blocks")}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
					)}
					{attributes.imageId != 0 && (
						<PanelRow>
							<MediaUploadCheck>
								<Button
									onClick={() => {
										setAttributes({ imageId: 0, imageUrl: "" });
									}}
									isLink
									isDestructive
								>
									{__("Remove image", "antioch-custom-blocks")}
								</Button>
							</MediaUploadCheck>
						</PanelRow>
					)}
				</PanelBody>
				<PanelBody title={__("AU Letters")} opened={true}>
					<ToggleControl
						help={
							attributes.letters
								? "AU Background Letters"
								: "No AU Background Letters"
						}
						checked={attributes.letters}
						onChange={(letters) => setAttributes({ letters })}
					></ToggleControl>
				</PanelBody>
				<PanelBody title={__("Background Color")}>
					<ColorPalette
						value={attributes.color}
						colors={colors}
						onChange={(color) => setAttributes({ color })}
					/>
				</PanelBody>
			</InspectorControls>
			{/* Block Content */}
			{attributes.imageUrl && (
				<>
					<div class="overlayimg"></div>
					<div
						class="bgimg"
						style={{ backgroundImage: `url(${attributes.imageUrl})` }}
					></div>
				</>
			)}
			<div class="container">
				<RichText
					tagName="p"
					onChange={(subtitle) => setAttributes({ subtitle })}
					value={attributes.subtitle}
					placeholder="Enter optional subtitle"
					className={"subtitle"}
				/>
				<RichText
					tagName="h1"
					onChange={(title) => setAttributes({ title })}
					value={attributes.title}
					placeholder="Enter Title. If left blank, page title will appear"
				/>
				{attributes.size && (
					<RichText
						tagName="p"
						onChange={(description) => setAttributes({ description })}
						value={attributes.description}
						placeholder="Enter optional description"
						className={"description"}
					/>
				)}
			</div>
		</section>
	);
}
