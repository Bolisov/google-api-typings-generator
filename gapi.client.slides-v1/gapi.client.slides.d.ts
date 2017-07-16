// Type definitions for Google Google Slides API v1
// Project: https://developers.google.com/slides/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.slides {
    
    interface InsertTextRequest {
        // The text to be inserted.
        // 
        // Inserting a newline character will implicitly create a new
        // ParagraphMarker at that index.
        // The paragraph style of the new paragraph will be copied from the paragraph
        // at the current insertion index, including lists and bullets.
        // 
        // Text styles for inserted text will be determined automatically, generally
        // preserving the styling of neighboring text. In most cases, the text will be
        // added to the TextRun that exists at the
        // insertion index.
        // 
        // Some control characters (U+0000-U+0008, U+000C-U+001F) and characters
        // from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF)
        // will be stripped out of the inserted text.
        text?: string,
        // The object ID of the shape or table where the text will be inserted.
        objectId?: string,
        // The index where the text will be inserted, in Unicode code units, based
        // on TextElement indexes.
        // 
        // The index is zero-based and is computed from the start of the string.
        // The index may be adjusted to prevent insertions inside Unicode grapheme
        // clusters. In these cases, the text will be inserted immediately after the
        // grapheme cluster.
        insertionIndex?: number,
        // The optional table cell location if the text is to be inserted into a table
        // cell. If present, the object_id must refer to a table.
        cellLocation?: TableCellLocation,
    }
    
    interface AffineTransform {
        // The Y coordinate shearing element.
        shearY?: number,
        // The units for translate elements.
        unit?: string,
        // The X coordinate scaling element.
        scaleX?: number,
        // The X coordinate shearing element.
        shearX?: number,
        // The Y coordinate scaling element.
        scaleY?: number,
        // The Y coordinate translation element.
        translateY?: number,
        // The X coordinate translation element.
        translateX?: number,
    }
    
    interface AutoText {
        // The styling applied to this auto text.
        style?: TextStyle,
        // The rendered content of this auto text, if available.
        content?: string,
        // The type of this auto text.
        type?: string,
    }
    
    interface CreateVideoResponse {
        // The object ID of the created video.
        objectId?: string,
    }
    
    interface DeleteTextRequest {
        // The optional table cell location if the text is to be deleted from a table
        // cell. If present, the object_id must refer to a table.
        cellLocation?: TableCellLocation,
        // The range of text to delete, based on TextElement indexes.
        // 
        // There is always an implicit newline character at the end of a shape's or
        // table cell's text that cannot be deleted. `Range.Type.ALL` will use the
        // correct bounds, but care must be taken when specifying explicit bounds for
        // range types `FROM_START_INDEX` and `FIXED_RANGE`. For example, if the text
        // is "ABC", followed by an implicit newline, then the maximum value is 2 for
        // `text_range.start_index` and 3 for `text_range.end_index`.
        // 
        // Deleting text that crosses a paragraph boundary may result in changes
        // to paragraph styles and lists as the two paragraphs are merged.
        // 
        // Ranges that include only one code unit of a surrogate pair are expanded to
        // include both code units.
        textRange?: Range,
        // The object ID of the shape or table from which the text will be deleted.
        objectId?: string,
    }
    
    interface UpdatePageElementTransformRequest {
        // The apply mode of the transform update.
        applyMode?: string,
        // The input transform matrix used to update the page element.
        transform?: AffineTransform,
        // The object ID of the page element to update.
        objectId?: string,
    }
    
    interface DeleteObjectRequest {
        // The object ID of the page or page element to delete.
        // 
        // If after a delete operation a group contains
        // only 1 or no page elements, the group is also deleted.
        // 
        // If a placeholder is deleted on a layout, any empty inheriting shapes are
        // also deleted.
        objectId?: string,
    }
    
    interface TextElement {
        // A TextElement representing a spot in the text that is dynamically
        // replaced with content that can change over time.
        autoText?: AutoText,
        // A marker representing the beginning of a new paragraph.
        // 
        // The `start_index` and `end_index` of this TextElement represent the
        // range of the paragraph. Other TextElements with an index range contained
        // inside this paragraph's range are considered to be part of this
        // paragraph. The range of indices of two separate paragraphs will never
        // overlap.
        paragraphMarker?: ParagraphMarker,
        // The zero-based end index of this text element, exclusive, in Unicode code
        // units.
        endIndex?: number,
        // The zero-based start index of this text element, in Unicode code units.
        startIndex?: number,
        // A TextElement representing a run of text where all of the characters
        // in the run have the same TextStyle.
        // 
        // The `start_index` and `end_index` of TextRuns will always be fully
        // contained in the index range of a single `paragraph_marker` TextElement.
        // In other words, a TextRun will never span multiple paragraphs.
        textRun?: TextRun,
    }
    
    interface Dimension {
        // The magnitude.
        magnitude?: number,
        // The units for magnitude.
        unit?: string,
    }
    
    interface LineFill {
        // Solid color fill.
        solidFill?: SolidFill,
    }
    
    interface VideoProperties {
        // The outline of the video. The default outline matches the defaults for new
        // videos created in the Slides editor.
        outline?: Outline,
    }
    
    interface InsertTableRowsRequest {
        // The number of rows to be inserted. Maximum 20 per request.
        number?: number,
        // The reference table cell location from which rows will be inserted.
        // 
        // A new row will be inserted above (or below) the row where the reference
        // cell is. If the reference cell is a merged cell, a new row will be
        // inserted above (or below) the merged cell.
        cellLocation?: TableCellLocation,
        // The table to insert rows into.
        tableObjectId?: string,
        // Whether to insert new rows below the reference cell location.
        // 
        // - `True`: insert below the cell.
        // - `False`: insert above the cell.
        insertBelow?: boolean,
    }
    
    interface LayoutProperties {
        // The name of the layout.
        name?: string,
        // The human-readable name of the layout.
        displayName?: string,
        // The object ID of the master that this layout is based on.
        masterObjectId?: string,
    }
    
    interface Presentation {
        // The slide masters in the presentation. A slide master contains all common
        // page elements and the common properties for a set of layouts. They serve
        // three purposes:
        // 
        // - Placeholder shapes on a master contain the default text styles and shape
        //   properties of all placeholder shapes on pages that use that master.
        // - The master page properties define the common page properties inherited by
        //   its layouts.
        // - Any other shapes on the master slide will appear on all slides using that
        //   master, regardless of their layout.
        masters?: Page[],        
        // The locale of the presentation, as an IETF BCP 47 language tag.
        locale?: string,
        // The size of pages in the presentation.
        pageSize?: Size,
        // The ID of the presentation.
        presentationId?: string,
        // The slides in the presentation.
        // A slide inherits properties from a slide layout.
        slides?: Page[],        
        // The revision ID of the presentation. Can be used in update requests
        // to assert that the presentation revision hasn't changed since the last
        // read operation. Only populated if the user has edit access to the
        // presentation.
        // 
        // The format of the revision ID may change over time, so it should be treated
        // opaquely. A returned revision ID is only guaranteed to be valid for 24
        // hours after it has been returned and cannot be shared across users. If the
        // revision ID is unchanged between calls, then the presentation has not
        // changed. Conversely, a changed ID (for the same presentation and user)
        // usually means the presentation has been updated; however, a changed ID can
        // also be due to internal factors such as ID format changes.
        revisionId?: string,
        // The notes master in the presentation. It serves three purposes:
        // 
        // - Placeholder shapes on a notes master contain the default text styles and
        //   shape properties of all placeholder shapes on notes pages. Specifically,
        //   a `SLIDE_IMAGE` placeholder shape contains the slide thumbnail, and a
        //   `BODY` placeholder shape contains the speaker notes.
        // - The notes master page properties define the common page properties
        //   inherited by all notes pages.
        // - Any other shapes on the notes master will appear on all notes pages.
        // 
        // The notes master is read-only.
        notesMaster?: Page,
        // The layouts in the presentation. A layout is a template that determines
        // how content is arranged and styled on the slides that inherit from that
        // layout.
        layouts?: Page[],        
        // The title of the presentation.
        title?: string,
    }
    
    interface LineProperties {
        // The thickness of the line.
        weight?: Dimension,
        // The fill of the line. The default line fill matches the defaults for new
        // lines created in the Slides editor.
        lineFill?: LineFill,
        // The dash style of the line.
        dashStyle?: string,
        // The hyperlink destination of the line. If unset, there is no link.
        link?: Link,
        // The style of the arrow at the end of the line.
        endArrow?: string,
        // The style of the arrow at the beginning of the line.
        startArrow?: string,
    }
    
    interface OpaqueColor {
        // An opaque theme color.
        themeColor?: string,
        // An opaque RGB color.
        rgbColor?: RgbColor,
    }
    
    interface ImageProperties {
        // The hyperlink destination of the image. If unset, there is no link.
        link?: Link,
        // The contrast effect of the image. The value should be in the interval
        // [-1.0, 1.0], where 0 means no effect. This property is read-only.
        contrast?: number,
        // The crop properties of the image. If not set, the image is not cropped.
        // This property is read-only.
        cropProperties?: CropProperties,
        // The recolor effect of the image. If not set, the image is not recolored.
        // This property is read-only.
        recolor?: Recolor,
        // The outline of the image. If not set, the the image has no outline.
        outline?: Outline,
        // The brightness effect of the image. The value should be in the interval
        // [-1.0, 1.0], where 0 means no effect. This property is read-only.
        brightness?: number,
        // The transparency effect of the image. The value should be in the interval
        // [0.0, 1.0], where 0 means no effect and 1 means completely transparent.
        // This property is read-only.
        transparency?: number,
        // The shadow of the image. If not set, the image has no shadow. This property
        // is read-only.
        shadow?: Shadow,
    }
    
    interface ReplaceAllShapesWithImageResponse {
        // The number of shapes replaced with images.
        occurrencesChanged?: number,
    }
    
    interface Line {
        // The type of the line.
        lineType?: string,
        // The properties of the line.
        lineProperties?: LineProperties,
    }
    
    interface CreateSheetsChartRequest {
        // The element properties for the chart.
        // 
        // When the aspect ratio of the provided size does not match the chart aspect
        // ratio, the chart is scaled and centered with respect to the size in order
        // to maintain aspect ratio. The provided transform is applied after this
        // operation.
        elementProperties?: PageElementProperties,
        // The mode with which the chart is linked to the source spreadsheet. When
        // not specified, the chart will be an image that is not linked.
        linkingMode?: string,
        // The ID of the Google Sheets spreadsheet that contains the chart.
        spreadsheetId?: string,
        // The ID of the specific chart in the Google Sheets spreadsheet.
        chartId?: number,
        // A user-supplied object ID.
        // 
        // If specified, the ID must be unique among all pages and page elements in
        // the presentation. The ID should start with a word character [a-zA-Z0-9_]
        // and then followed by any number of the following characters [a-zA-Z0-9_-:].
        // The length of the ID should not be less than 5 or greater than 50.
        // If empty, a unique identifier will be generated.
        objectId?: string,
    }
    
    interface BatchUpdatePresentationResponse {
        // The presentation the updates were applied to.
        presentationId?: string,
        // The reply of the updates.  This maps 1:1 with the updates, although
        // replies to some requests may be empty.
        replies?: Response[],        
    }
    
    interface CreateImageResponse {
        // The object ID of the created image.
        objectId?: string,
    }
    
    interface SlideProperties {
        // The object ID of the master that this slide is based on.
        masterObjectId?: string,
        // The object ID of the layout that this slide is based on.
        layoutObjectId?: string,
        // The notes page that this slide is associated with. It defines the visual
        // appearance of a notes page when printing or exporting slides with speaker
        // notes. A notes page inherits properties from the
        // notes master.
        // The placeholder shape with type BODY on the notes page contains the speaker
        // notes for this slide. The ID of this shape is identified by the
        // speakerNotesObjectId field.
        // The notes page is read-only except for the text content and styles of the
        // speaker notes shape.
        notesPage?: Page,
    }
    
    interface MasterProperties {
        // The human-readable name of the master.
        displayName?: string,
    }
    
    interface Response {
        // The result of duplicating an object.
        duplicateObject?: DuplicateObjectResponse,
        // The result of creating a shape.
        createShape?: CreateShapeResponse,
        // The result of creating a line.
        createLine?: CreateLineResponse,
        // The result of creating an image.
        createImage?: CreateImageResponse,
        // The result of creating a video.
        createVideo?: CreateVideoResponse,
        // The result of replacing all shapes matching some criteria with a Google
        // Sheets chart.
        replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartResponse,
        // The result of creating a Google Sheets chart.
        createSheetsChart?: CreateSheetsChartResponse,
        // The result of replacing all shapes matching some criteria with an
        // image.
        replaceAllShapesWithImage?: ReplaceAllShapesWithImageResponse,
        // The result of creating a table.
        createTable?: CreateTableResponse,
        // The result of replacing text.
        replaceAllText?: ReplaceAllTextResponse,
        // The result of creating a slide.
        createSlide?: CreateSlideResponse,
    }
    
    interface TextRun {
        // The text of this run.
        content?: string,
        // The styling applied to this run.
        style?: TextStyle,
    }
    
    interface LayoutReference {
        // Predefined layout.
        predefinedLayout?: string,
        // Layout ID: the object ID of one of the layouts in the presentation.
        layoutId?: string,
    }
    
    interface SubstringMatchCriteria {
        // The text to search for in the shape or table.
        text?: string,
        // Indicates whether the search should respect case:
        // 
        // - `True`: the search is case sensitive.
        // - `False`: the search is case insensitive.
        matchCase?: boolean,
    }
    
    interface TableRange {
        // The column span of the table range.
        columnSpan?: number,
        // The row span of the table range.
        rowSpan?: number,
        // The starting location of the table range.
        location?: TableCellLocation,
    }
    
    interface CreateTableRequest {
        // The element properties for the table.
        // 
        // The table will be created at the provided size, subject to a minimum size.
        // If no size is provided, the table will be automatically sized.
        // 
        // Table transforms must have a scale of 1 and no shear components. If no
        // transform is provided, the table will be centered on the page.
        elementProperties?: PageElementProperties,
        // Number of rows in the table.
        rows?: number,
        // Number of columns in the table.
        columns?: number,
        // A user-supplied object ID.
        // 
        // If you specify an ID, it must be unique among all pages and page elements
        // in the presentation. The ID must start with an alphanumeric character or an
        // underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
        // may include those as well as a hyphen or colon (matches regex
        // `[a-zA-Z0-9_-:]`).
        // The length of the ID must not be less than 5 or greater than 50.
        // 
        // If you don't specify an ID, a unique one is generated.
        objectId?: string,
    }
    
    interface CreateTableResponse {
        // The object ID of the created table.
        objectId?: string,
    }
    
    interface Table {
        // Properties and contents of each row.
        // 
        // Cells that span multiple rows are contained in only one of these rows and
        // have a row_span greater
        // than 1.
        tableRows?: TableRow[],        
        // Number of rows in the table.
        rows?: number,
        // Properties of each column.
        tableColumns?: TableColumnProperties[],        
        // Number of columns in the table.
        columns?: number,
    }
    
    interface PageBackgroundFill {
        // The background fill property state.
        // 
        // Updating the the fill on a page will implicitly update this field to
        // `RENDERED`, unless another value is specified in the same request. To
        // have no fill on a page, set this field to `NOT_RENDERED`. In this case,
        // any other fill fields set in the same request will be ignored.
        propertyState?: string,
        // Stretched picture fill.
        stretchedPictureFill?: StretchedPictureFill,
        // Solid color fill.
        solidFill?: SolidFill,
    }
    
    interface SheetsChart {
        // The ID of the Google Sheets spreadsheet that contains the source chart.
        spreadsheetId?: string,
        // The ID of the specific chart in the Google Sheets spreadsheet that is
        // embedded.
        chartId?: number,
        // The properties of the Sheets chart.
        sheetsChartProperties?: SheetsChartProperties,
        // The URL of an image of the embedded chart, with a default lifetime of 30
        // minutes. This URL is tagged with the account of the requester. Anyone with
        // the URL effectively accesses the image as the original requester. Access to
        // the image may be lost if the presentation's sharing settings change.
        contentUrl?: string,
    }
    
    interface SolidFill {
        // The color value of the solid fill.
        color?: OpaqueColor,
        // The fraction of this `color` that should be applied to the pixel.
        // That is, the final pixel color is defined by the equation:
        // 
        //   pixel color = alpha * (color) + (1.0 - alpha) * (background color)
        // 
        // This means that a value of 1.0 corresponds to a solid color, whereas
        // a value of 0.0 corresponds to a completely transparent color.
        alpha?: number,
    }
    
    interface ThemeColorPair {
        // The concrete color corresponding to the theme color type above.
        color?: RgbColor,
        // The type of the theme color.
        type?: string,
    }
    
    interface OptionalColor {
        // If set, this will be used as an opaque color. If unset, this represents
        // a transparent color.
        opaqueColor?: OpaqueColor,
    }
    
    interface PageElementProperties {
        // The object ID of the page where the element is located.
        pageObjectId?: string,
        // The size of the element.
        size?: Size,
        // The transform for the element.
        transform?: AffineTransform,
    }
    
    interface SheetsChartProperties {
        // The properties of the embedded chart image.
        chartImageProperties?: ImageProperties,
    }
    
    interface StretchedPictureFill {
        // The original size of the picture fill. This field is read-only.
        size?: Size,
        // Reading the content_url:
        // 
        // An URL to a picture with a default lifetime of 30 minutes.
        // This URL is tagged with the account of the requester. Anyone with the URL
        // effectively accesses the picture as the original requester. Access to the
        // picture may be lost if the presentation's sharing settings change.
        // 
        // Writing the content_url:
        // 
        // The picture is fetched once at insertion time and a copy is stored for
        // display inside the presentation. Pictures must be less than 50MB in size,
        // cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
        // format.
        contentUrl?: string,
    }
    
    interface DeleteTableColumnRequest {
        // The reference table cell location from which a column will be deleted.
        // 
        // The column this cell spans will be deleted. If this is a merged cell,
        // multiple columns will be deleted. If no columns remain in the table after
        // this deletion, the whole table is deleted.
        cellLocation?: TableCellLocation,
        // The table to delete columns from.
        tableObjectId?: string,
    }
    
    interface UpdateTextStyleRequest {
        // The fields that should be updated.
        // 
        // At least one field must be specified. The root `style` is implied and
        // should not be specified. A single `"*"` can be used as short-hand for
        // listing every field.
        // 
        // For example, to update the text style to bold, set `fields` to `"bold"`.
        // 
        // To reset a property to its default value, include its field name in the
        // field mask but leave the field itself unset.
        fields?: string,
        // The range of text to style.
        // 
        // The range may be extended to include adjacent newlines.
        // 
        // If the range fully contains a paragraph belonging to a list, the
        // paragraph's bullet is also updated with the matching text style.
        textRange?: Range,
        // The object ID of the shape or table with the text to be styled.
        objectId?: string,
        // The style(s) to set on the text.
        // 
        // If the value for a particular style matches that of the parent, that style
        // will be set to inherit.
        // 
        // Certain text style changes may cause other changes meant to mirror the
        // behavior of the Slides editor. See the documentation of
        // TextStyle for more information.
        style?: TextStyle,
        // The location of the cell in the table containing the text to style. If
        // `object_id` refers to a table, `cell_location` must have a value.
        // Otherwise, it must not.
        cellLocation?: TableCellLocation,
    }
    
    interface List {
        // A map of nesting levels to the properties of bullets at the associated
        // level. A list has at most nine levels of nesting, so the possible values
        // for the keys of this map are 0 through 8, inclusive.
        nestingLevel?: any,
        // The ID of the list.
        listId?: string,
    }
    
    interface WeightedFontFamily {
        // The rendered weight of the text. This field can have any value that is a
        // multiple of `100` between `100` and `900`, inclusive. This range
        // corresponds to the numerical values described in the CSS 2.1
        // Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness),
        // with non-numerical values disallowed. Weights greater than or equal to
        // `700` are considered bold, and weights less than `700`are not bold. The
        // default value is `400` ("normal").
        weight?: number,
        // The font family of the text.
        // 
        // The font family can be any font from the Font menu in Slides or from
        // [Google Fonts] (https://fonts.google.com/). If the font name is
        // unrecognized, the text is rendered in `Arial`.
        fontFamily?: string,
    }
    
    interface PageElement {
        // The transform of the page element.
        transform?: AffineTransform,
        // The object ID for this page element. Object IDs used by
        // google.apps.slides.v1.Page and
        // google.apps.slides.v1.PageElement share the same namespace.
        objectId?: string,
        // A generic shape.
        shape?: Shape,
        // A line page element.
        line?: Line,
        // The description of the page element. Combined with title to display alt
        // text.
        description?: string,
        // A collection of page elements joined as a single unit.
        elementGroup?: Group,
        // An image page element.
        image?: Image,
        // The size of the page element.
        size?: Size,
        // A linked chart embedded from Google Sheets. Unlinked charts are
        // represented as images.
        sheetsChart?: SheetsChart,
        // The title of the page element. Combined with description to display alt
        // text.
        title?: string,
        // A video page element.
        video?: Video,
        // A word art page element.
        wordArt?: WordArt,
        // A table page element.
        table?: Table,
    }
    
    interface CreateImageRequest {
        // The element properties for the image.
        // 
        // When the aspect ratio of the provided size does not match the image aspect
        // ratio, the image is scaled and centered with respect to the size in order
        // to maintain aspect ratio. The provided transform is applied after this
        // operation.
        elementProperties?: PageElementProperties,
        // The image URL.
        // 
        // The image is fetched once at insertion time and a copy is stored for
        // display inside the presentation. Images must be less than 50MB in size,
        // cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
        // format.
        url?: string,
        // A user-supplied object ID.
        // 
        // If you specify an ID, it must be unique among all pages and page elements
        // in the presentation. The ID must start with an alphanumeric character or an
        // underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
        // may include those as well as a hyphen or colon (matches regex
        // `[a-zA-Z0-9_-:]`).
        // The length of the ID must not be less than 5 or greater than 50.
        // 
        // If you don't specify an ID, a unique one is generated.
        objectId?: string,
    }
    
    interface CreateParagraphBulletsRequest {
        // The range of text to apply the bullet presets to, based on TextElement indexes.
        textRange?: Range,
        // The object ID of the shape or table containing the text to add bullets to.
        objectId?: string,
        // The kinds of bullet glyphs to be used. Defaults to the
        // `BULLET_DISC_CIRCLE_SQUARE` preset.
        bulletPreset?: string,
        // The optional table cell location if the text to be modified is in a table
        // cell. If present, the object_id must refer to a table.
        cellLocation?: TableCellLocation,
    }
    
    interface TextStyle {
        // Whether or not the text is in small capital letters.
        smallCaps?: boolean,
        // The background color of the text. If set, the color is either opaque or
        // transparent, depending on if the `opaque_color` field in it is set.
        backgroundColor?: OptionalColor,
        // The hyperlink destination of the text. If unset, there is no link. Links
        // are not inherited from parent text.
        // 
        // Changing the link in an update request causes some other changes to the
        // text style of the range:
        // 
        // * When setting a link, the text foreground color will be set to
        //   ThemeColorType.HYPERLINK and the text will
        //   be underlined. If these fields are modified in the same
        //   request, those values will be used instead of the link defaults.
        // * Setting a link on a text range that overlaps with an existing link will
        //   also update the existing link to point to the new URL.
        // * Links are not settable on newline characters. As a result, setting a link
        //   on a text range that crosses a paragraph boundary, such as `"ABC\n123"`,
        //   will separate the newline character(s) into their own text runs. The
        //   link will be applied separately to the runs before and after the newline.
        // * Removing a link will update the text style of the range to match the
        //   style of the preceding text (or the default text styles if the preceding
        //   text is another link) unless different styles are being set in the same
        //   request.
        link?: Link,
        // Whether or not the text is underlined.
        underline?: boolean,
        // The color of the text itself. If set, the color is either opaque or
        // transparent, depending on if the `opaque_color` field in it is set.
        foregroundColor?: OptionalColor,
        // Whether or not the text is rendered as bold.
        bold?: boolean,
        // The font family of the text.
        // 
        // The font family can be any font from the Font menu in Slides or from
        // [Google Fonts] (https://fonts.google.com/). If the font name is
        // unrecognized, the text is rendered in `Arial`.
        // 
        // Some fonts can affect the weight of the text. If an update request
        // specifies values for both `font_family` and `bold`, the explicitly-set
        // `bold` value is used.
        fontFamily?: string,
        // Whether or not the text is struck through.
        strikethrough?: boolean,
        // Whether or not the text is italicized.
        italic?: boolean,
        // The size of the text's font. When read, the `font_size` will specified in
        // points.
        fontSize?: Dimension,
        // The text's vertical offset from its normal position.
        // 
        // Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically
        // rendered in a smaller font size, computed based on the `font_size` field.
        // The `font_size` itself is not affected by changes in this field.
        baselineOffset?: string,
        // The font family and rendered weight of the text.
        // 
        // This field is an extension of `font_family` meant to support explicit font
        // weights without breaking backwards compatibility. As such, when reading the
        // style of a range of text, the value of `weighted_font_family#font_family`
        // will always be equal to that of `font_family`. However, when writing, if
        // both fields are included in the field mask (either explicitly or through
        // the wildcard `"*"`), their values are reconciled as follows:
        // 
        // * If `font_family` is set and `weighted_font_family` is not, the value of
        //   `font_family` is applied with weight `400` ("normal").
        // * If both fields are set, the value of `font_family` must match that of
        //   `weighted_font_family#font_family`. If so, the font family and weight of
        //   `weighted_font_family` is applied. Otherwise, a 400 bad request error is
        //   returned.
        // * If `weighted_font_family` is set and `font_family` is not, the font
        //   family and weight of `weighted_font_family` is applied.
        // * If neither field is set, the font family and weight of the text inherit
        //   from the parent. Note that these properties cannot inherit separately
        //   from each other.
        // 
        // If an update request specifies values for both `weighted_font_family` and
        // `bold`, the `weighted_font_family` is applied first, then `bold`.
        // 
        // If `weighted_font_family#weight` is not set, it defaults to `400`.
        // 
        // If `weighted_font_family` is set, then `weighted_font_family#font_family`
        // must also be set with a non-empty value. Otherwise, a 400 bad request error
        // is returned.
        weightedFontFamily?: WeightedFontFamily,
    }
    
    interface Size {
        // The height of the object.
        height?: Dimension,
        // The width of the object.
        width?: Dimension,
    }
    
    interface UpdateVideoPropertiesRequest {
        // The fields that should be updated.
        // 
        // At least one field must be specified. The root `videoProperties` is
        // implied and should not be specified. A single `"*"` can be used as
        // short-hand for listing every field.
        // 
        // For example to update the video outline color, set `fields` to
        // `"outline.outlineFill.solidFill.color"`.
        // 
        // To reset a property to its default value, include its field name in the
        // field mask but leave the field itself unset.
        fields?: string,
        // The object ID of the video the updates are applied to.
        objectId?: string,
        // The video properties to update.
        videoProperties?: VideoProperties,
    }
    
    interface Request {
        // Updates the properties of a Line.
        updateLineProperties?: UpdateLinePropertiesRequest,
        // Updates the position of a set of slides in the presentation.
        updateSlidesPosition?: UpdateSlidesPositionRequest,
        // Deletes a row from a table.
        deleteTableRow?: DeleteTableRowRequest,
        // Updates the properties of a Shape.
        updateShapeProperties?: UpdateShapePropertiesRequest,
        // Inserts text into a shape or table cell.
        insertText?: InsertTextRequest,
        // Deletes text from a shape or a table cell.
        deleteText?: DeleteTextRequest,
        // Updates the properties of a Page.
        updatePageProperties?: UpdatePagePropertiesRequest,
        // Deletes bullets from paragraphs.
        deleteParagraphBullets?: DeleteParagraphBulletsRequest,
        // Creates a new shape.
        createShape?: CreateShapeRequest,
        // Inserts columns into a table.
        insertTableColumns?: InsertTableColumnsRequest,
        // Refreshes a Google Sheets chart.
        refreshSheetsChart?: RefreshSheetsChartRequest,
        // Updates the properties of a TableCell.
        updateTableCellProperties?: UpdateTableCellPropertiesRequest,
        // Creates a new table.
        createTable?: CreateTableRequest,
        // Deletes a page or page element from the presentation.
        deleteObject?: DeleteObjectRequest,
        // Updates the styling of paragraphs within a Shape or Table.
        updateParagraphStyle?: UpdateParagraphStyleRequest,
        // Deletes a column from a table.
        deleteTableColumn?: DeleteTableColumnRequest,
        // Duplicates a slide or page element.
        duplicateObject?: DuplicateObjectRequest,
        // Updates the properties of a Video.
        updateVideoProperties?: UpdateVideoPropertiesRequest,
        // Creates a line.
        createLine?: CreateLineRequest,
        // Creates an image.
        createImage?: CreateImageRequest,
        // Creates bullets for paragraphs.
        createParagraphBullets?: CreateParagraphBulletsRequest,
        // Creates a video.
        createVideo?: CreateVideoRequest,
        // Creates an embedded Google Sheets chart.
        createSheetsChart?: CreateSheetsChartRequest,
        // Replaces all shapes matching some criteria with a Google Sheets chart.
        replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartRequest,
        // Updates the transform of a page element.
        updatePageElementTransform?: UpdatePageElementTransformRequest,
        // Updates the styling of text within a Shape or Table.
        updateTextStyle?: UpdateTextStyleRequest,
        // Replaces all shapes matching some criteria with an image.
        replaceAllShapesWithImage?: ReplaceAllShapesWithImageRequest,
        // Replaces all instances of specified text.
        replaceAllText?: ReplaceAllTextRequest,
        // Updates the properties of an Image.
        updateImageProperties?: UpdateImagePropertiesRequest,
        // Creates a new slide.
        createSlide?: CreateSlideRequest,
        // Inserts rows into a table.
        insertTableRows?: InsertTableRowsRequest,
    }
    
    interface UpdateImagePropertiesRequest {
        // The fields that should be updated.
        // 
        // At least one field must be specified. The root `imageProperties` is
        // implied and should not be specified. A single `"*"` can be used as
        // short-hand for listing every field.
        // 
        // For example to update the image outline color, set `fields` to
        // `"outline.outlineFill.solidFill.color"`.
        // 
        // To reset a property to its default value, include its field name in the
        // field mask but leave the field itself unset.
        fields?: string,
        // The image properties to update.
        imageProperties?: ImageProperties,
        // The object ID of the image the updates are applied to.
        objectId?: string,
    }
    
    interface ParagraphStyle {
        // The amount of extra space above the paragraph. If unset, the value is
        // inherited from the parent.
        spaceBelow?: Dimension,
        // The text direction of this paragraph. If unset, the value defaults to
        // LEFT_TO_RIGHT since
        // text direction is not inherited.
        direction?: string,
        // The amount indentation for the paragraph on the side that corresponds to
        // the end of the text, based on the current text direction. If unset, the
        // value is inherited from the parent.
        indentEnd?: Dimension,
        // The spacing mode for the paragraph.
        spacingMode?: string,
        // The amount indentation for the paragraph on the side that corresponds to
        // the start of the text, based on the current text direction. If unset, the
        // value is inherited from the parent.
        indentStart?: Dimension,
        // The amount of extra space above the paragraph. If unset, the value is
        // inherited from the parent.
        spaceAbove?: Dimension,
        // The text alignment for this paragraph.
        alignment?: string,
        // The amount of space between lines, as a percentage of normal, where normal
        // is represented as 100.0. If unset, the value is inherited from the parent.
        lineSpacing?: number,
        // The amount of indentation for the start of the first line of the paragraph.
        // If unset, the value is inherited from the parent.
        indentFirstLine?: Dimension,
    }
    
    interface ReplaceAllShapesWithSheetsChartResponse {
        // The number of shapes replaced with charts.
        occurrencesChanged?: number,
    }
    
    interface TableCellProperties {
        // The background fill of the table cell. The default fill matches the fill
        // for newly created table cells in the Slides editor.
        tableCellBackgroundFill?: TableCellBackgroundFill,
    }
    
    interface RefreshSheetsChartRequest {
        // The object ID of the chart to refresh.
        objectId?: string,
    }
    
    interface Outline {
        // The fill of the outline.
        outlineFill?: OutlineFill,
        // The thickness of the outline.
        weight?: Dimension,
        // The dash style of the outline.
        dashStyle?: string,
        // The outline property state.
        // 
        // Updating the the outline on a page element will implicitly update this
        // field to`RENDERED`, unless another value is specified in the same request.
        // To have no outline on a page element, set this field to `NOT_RENDERED`. In
        // this case, any other outline fields set in the same request will be
        // ignored.
        propertyState?: string,
    }
    
    interface NotesProperties {
        // The object ID of the shape on this notes page that contains the speaker
        // notes for the corresponding slide.
        // The actual shape may not always exist on the notes page. Inserting text
        // using this object ID will automatically create the shape. In this case, the
        // actual shape may have different object ID. The `GetPresentation` or
        // `GetPage` action will always return the latest object ID.
        speakerNotesObjectId?: string,
    }
    
    interface ShapeProperties {
        // The outline of the shape. If unset, the outline is inherited from a
        // parent placeholder if it exists. If the shape has no parent, then the
        // default outline depends on the shape type, matching the defaults for
        // new shapes created in the Slides editor.
        outline?: Outline,
        // The shadow properties of the shape. If unset, the shadow is inherited from
        // a parent placeholder if it exists. If the shape has no parent, then the
        // default shadow matches the defaults for new shapes created in the Slides
        // editor. This property is read-only.
        shadow?: Shadow,
        // The background fill of the shape. If unset, the background fill is
        // inherited from a parent placeholder if it exists. If the shape has no
        // parent, then the default background fill depends on the shape type,
        // matching the defaults for new shapes created in the Slides editor.
        shapeBackgroundFill?: ShapeBackgroundFill,
        // The hyperlink destination of the shape. If unset, there is no link. Links
        // are not inherited from parent placeholders.
        link?: Link,
    }
    
    interface TableColumnProperties {
        // Width of a column.
        columnWidth?: Dimension,
    }
    
    interface TableRow {
        // Properties and contents of each cell.
        // 
        // Cells that span multiple columns are represented only once with a
        // column_span greater
        // than 1. As a result, the length of this collection does not always match
        // the number of columns of the entire table.
        tableCells?: TableCell[],        
        // Height of a row.
        rowHeight?: Dimension,
    }
    
    interface UpdateTableCellPropertiesRequest {
        // The table cell properties to update.
        tableCellProperties?: TableCellProperties,
        // The fields that should be updated.
        // 
        // At least one field must be specified. The root `tableCellProperties` is
        // implied and should not be specified. A single `"*"` can be used as
        // short-hand for listing every field.
        // 
        // For example to update the table cell background solid fill color, set
        // `fields` to `"tableCellBackgroundFill.solidFill.color"`.
        // 
        // To reset a property to its default value, include its field name in the
        // field mask but leave the field itself unset.
        fields?: string,
        // The table range representing the subset of the table to which the updates
        // are applied. If a table range is not specified, the updates will apply to
        // the entire table.
        tableRange?: TableRange,
        // The object ID of the table.
        objectId?: string,
    }
    
    interface CreateSlideRequest {
        // Layout reference of the slide to be inserted, based on the *current
        // master*, which is one of the following:
        // 
        // - The master of the previous slide index.
        // - The master of the first slide, if the insertion_index is zero.
        // - The first master in the presentation, if there are no slides.
        // 
        // If the LayoutReference is not found in the current master, a 400 bad
        // request error is returned.
        // 
        // If you don't specify a layout reference, then the new slide will use the
        // predefined layout `BLANK`.
        slideLayoutReference?: LayoutReference,
        // A user-supplied object ID.
        // 
        // If you specify an ID, it must be unique among all pages and page elements
        // in the presentation. The ID must start with an alphanumeric character or an
        // underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
        // may include those as well as a hyphen or colon (matches regex
        // `[a-zA-Z0-9_-:]`).
        // The length of the ID must not be less than 5 or greater than 50.
        // 
        // If you don't specify an ID, a unique one is generated.
        objectId?: string,
        // The optional zero-based index indicating where to insert the slides.
        // 
        // If you don't specify an index, the new slide is created at the end.
        insertionIndex?: number,
        // An optional list of object ID mappings from the placeholder(s) on the layout to the placeholder(s)
        // that will be created on the new slide from that specified layout. Can only
        // be used when `slide_layout_reference` is specified.
        placeholderIdMappings?: LayoutPlaceholderIdMapping[],        
    }
    
    interface BatchUpdatePresentationRequest {
        // A list of updates to apply to the presentation.
        requests?: Request[],        
        // Provides control over how write requests are executed.
        writeControl?: WriteControl,
    }
    
    interface TextContent {
        // The bulleted lists contained in this text, keyed by list ID.
        lists?: any,
        // The text contents broken down into its component parts, including styling
        // information. This property is read-only.
        textElements?: TextElement[],        
    }
    
    interface CreateSheetsChartResponse {
        // The object ID of the created chart.
        objectId?: string,
    }
    
    interface WriteControl {
        // The revision ID of the presentation required for the write request. If
        // specified and the `required_revision_id` doesn't exactly match the
        // presentation's current `revision_id`, the request will not be processed and
        // will return a 400 bad request error.
        requiredRevisionId?: string,
    }
    
    interface DeleteParagraphBulletsRequest {
        // The range of text to delete bullets from, based on TextElement indexes.
        textRange?: Range,
        // The object ID of the shape or table containing the text to delete bullets
        // from.
        objectId?: string,
        // The optional table cell location if the text to be modified is in a table
        // cell. If present, the object_id must refer to a table.
        cellLocation?: TableCellLocation,
    }
    
    interface ParagraphMarker {
        // The bullet for this paragraph. If not present, the paragraph does not
        // belong to a list.
        bullet?: Bullet,
        // The paragraph's style
        style?: ParagraphStyle,
    }
    
    interface Thumbnail {
        // The positive width in pixels of the thumbnail image.
        width?: number,
        // The positive height in pixels of the thumbnail image.
        height?: number,
        // The content URL of the thumbnail image.
        // 
        // The URL to the image has a default lifetime of 30 minutes.
        // This URL is tagged with the account of the requester. Anyone with the URL
        // effectively accesses the image as the original requester. Access to the
        // image may be lost if the presentation's sharing settings change.
        // The mime type of the thumbnail image is the same as specified in the
        // `GetPageThumbnailRequest`.
        contentUrl?: string,
    }
    
    interface InsertTableColumnsRequest {
        // The table to insert columns into.
        tableObjectId?: string,
        // The number of columns to be inserted. Maximum 20 per request.
        number?: number,
        // The reference table cell location from which columns will be inserted.
        // 
        // A new column will be inserted to the left (or right) of the column where
        // the reference cell is. If the reference cell is a merged cell, a new
        // column will be inserted to the left (or right) of the merged cell.
        cellLocation?: TableCellLocation,
        // Whether to insert new columns to the right of the reference cell location.
        // 
        // - `True`: insert to the right.
        // - `False`: insert to the left.
        insertRight?: boolean,
    }
    
    interface LayoutPlaceholderIdMapping {
        // A user-supplied object ID for the placeholder identified above that to be
        // created onto a slide.
        // 
        // If you specify an ID, it must be unique among all pages and page elements
        // in the presentation. The ID must start with an alphanumeric character or an
        // underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
        // may include those as well as a hyphen or colon (matches regex
        // `[a-zA-Z0-9_-:]`).
        // The length of the ID must not be less than 5 or greater than 50.
        // 
        // If you don't specify an ID, a unique one is generated.
        objectId?: string,
        // The placeholder on a layout that will be applied to a slide. Only type and index are needed. For example, a
        // predefined `TITLE_AND_BODY` layout may usually have a TITLE placeholder
        // with index 0 and a BODY placeholder with index 0.
        layoutPlaceholder?: Placeholder,
        // The object ID of the placeholder on a layout that will be applied
        // to a slide.
        layoutPlaceholderObjectId?: string,
    }
    
    interface UpdateShapePropertiesRequest {
        // The fields that should be updated.
        // 
        // At least one field must be specified. The root `shapeProperties` is
        // implied and should not be specified. A single `"*"` can be used as
        // short-hand for listing every field.
        // 
        // For example to update the shape background solid fill color, set `fields`
        // to `"shapeBackgroundFill.solidFill.color"`.
        // 
        // To reset a property to its default value, include its field name in the
        // field mask but leave the field itself unset.
        fields?: string,
        // The object ID of the shape the updates are applied to.
        objectId?: string,
        // The shape properties to update.
        shapeProperties?: ShapeProperties,
    }
    
    interface WordArt {
        // The text rendered as word art.
        renderedText?: string,
    }
    
    interface Recolor {
        // The recolor effect is represented by a gradient, which is a list of color
        // stops.
        // 
        // The colors in the gradient will replace the corresponding colors at
        // the same position in the color palette and apply to the image. This
        // property is read-only.
        recolorStops?: ColorStop[],        
        // The name of the recolor effect.
        // 
        // The name is determined from the `recolor_stops` by matching the gradient
        // against the colors in the page's current color scheme. This property is
        // read-only.
        name?: string,
    }
    
    interface Link {
        // If set, indicates this is a link to the specific page in this
        // presentation with this ID. A page with this ID may not exist.
        pageObjectId?: string,
        // If set, indicates this is a link to the slide at this zero-based index
        // in the presentation. There may not be a slide at this index.
        slideIndex?: number,
        // If set, indicates this is a link to a slide in this presentation,
        // addressed by its position.
        relativeLink?: string,
        // If set, indicates this is a link to the external web page at this URL.
        url?: string,
    }
    
    interface RgbColor {
        // The red component of the color, from 0.0 to 1.0.
        red?: number,
        // The blue component of the color, from 0.0 to 1.0.
        blue?: number,
        // The green component of the color, from 0.0 to 1.0.
        green?: number,
    }
    
    interface CreateShapeResponse {
        // The object ID of the created shape.
        objectId?: string,
    }
    
    interface CreateLineRequest {
        // The element properties for the line.
        elementProperties?: PageElementProperties,
        // The category of line to be created.
        lineCategory?: string,
        // A user-supplied object ID.
        // 
        // If you specify an ID, it must be unique among all pages and page elements
        // in the presentation. The ID must start with an alphanumeric character or an
        // underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
        // may include those as well as a hyphen or colon (matches regex
        // `[a-zA-Z0-9_-:]`).
        // The length of the ID must not be less than 5 or greater than 50.
        // 
        // If you don't specify an ID, a unique one is generated.
        objectId?: string,
    }
    
    interface CreateSlideResponse {
        // The object ID of the created slide.
        objectId?: string,
    }
    
    interface CreateShapeRequest {
        // The element properties for the shape.
        elementProperties?: PageElementProperties,
        // The shape type.
        shapeType?: string,
        // A user-supplied object ID.
        // 
        // If you specify an ID, it must be unique among all pages and page elements
        // in the presentation. The ID must start with an alphanumeric character or an
        // underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
        // may include those as well as a hyphen or colon (matches regex
        // `[a-zA-Z0-9_-:]`).
        // The length of the ID must not be less than 5 or greater than 50.
        // If empty, a unique identifier will be generated.
        objectId?: string,
    }
    
    interface Video {
        // The video source's unique identifier for this video.
        id?: string,
        // An URL to a video. The URL is valid as long as the source video
        // exists and sharing settings do not change.
        url?: string,
        // The properties of the video.
        videoProperties?: VideoProperties,
        // The video source.
        source?: string,
    }
    
    interface PageProperties {
        // The color scheme of the page. If unset, the color scheme is inherited from
        // a parent page. If the page has no parent, the color scheme uses a default
        // Slides color scheme. This field is read-only.
        colorScheme?: ColorScheme,
        // The background fill of the page. If unset, the background fill is inherited
        // from a parent page if it exists. If the page has no parent, then the
        // background fill defaults to the corresponding fill in the Slides editor.
        pageBackgroundFill?: PageBackgroundFill,
    }
    
    interface TableCell {
        // The properties of the table cell.
        tableCellProperties?: TableCellProperties,
        // Row span of the cell.
        rowSpan?: number,
        // The location of the cell within the table.
        location?: TableCellLocation,
        // Column span of the cell.
        columnSpan?: number,
        // The text content of the cell.
        text?: TextContent,
    }
    
    interface NestingLevel {
        // The style of a bullet at this level of nesting.
        bulletStyle?: TextStyle,
    }
    
    interface UpdateLinePropertiesRequest {
        // The fields that should be updated.
        // 
        // At least one field must be specified. The root `lineProperties` is
        // implied and should not be specified. A single `"*"` can be used as
        // short-hand for listing every field.
        // 
        // For example to update the line solid fill color, set `fields` to
        // `"lineFill.solidFill.color"`.
        // 
        // To reset a property to its default value, include its field name in the
        // field mask but leave the field itself unset.
        fields?: string,
        // The object ID of the line the update is applied to.
        objectId?: string,
        // The line properties to update.
        lineProperties?: LineProperties,
    }
    
    interface UpdateSlidesPositionRequest {
        // The index where the slides should be inserted, based on the slide
        // arrangement before the move takes place. Must be between zero and the
        // number of slides in the presentation, inclusive.
        insertionIndex?: number,
        // The IDs of the slides in the presentation that should be moved.
        // The slides in this list must be in existing presentation order, without
        // duplicates.
        slideObjectIds?: string[],        
    }
    
    interface TableCellBackgroundFill {
        // The background fill property state.
        // 
        // Updating the the fill on a table cell will implicitly update this field
        // to `RENDERED`, unless another value is specified in the same request. To
        // have no fill on a table cell, set this field to `NOT_RENDERED`. In this
        // case, any other fill fields set in the same request will be ignored.
        propertyState?: string,
        // Solid color fill.
        solidFill?: SolidFill,
    }
    
    interface UpdatePagePropertiesRequest {
        // The fields that should be updated.
        // 
        // At least one field must be specified. The root `pageProperties` is
        // implied and should not be specified. A single `"*"` can be used as
        // short-hand for listing every field.
        // 
        // For example to update the page background solid fill color, set `fields`
        // to `"pageBackgroundFill.solidFill.color"`.
        // 
        // To reset a property to its default value, include its field name in the
        // field mask but leave the field itself unset.
        fields?: string,
        // The page properties to update.
        pageProperties?: PageProperties,
        // The object ID of the page the update is applied to.
        objectId?: string,
    }
    
    interface Group {
        // The collection of elements in the group. The minimum size of a group is 2.
        children?: PageElement[],        
    }
    
    interface Placeholder {
        // The index of the placeholder. If the same placeholder types are present in
        // the same page, they would have different index values.
        index?: number,
        // The type of the placeholder.
        type?: string,
        // The object ID of this shape's parent placeholder.
        // If unset, the parent placeholder shape does not exist, so the shape does
        // not inherit properties from any other shape.
        parentObjectId?: string,
    }
    
    interface DuplicateObjectRequest {
        // The object being duplicated may contain other objects, for example when
        // duplicating a slide or a group page element. This map defines how the IDs
        // of duplicated objects are generated: the keys are the IDs of the original
        // objects and its values are the IDs that will be assigned to the
        // corresponding duplicate object. The ID of the source object's duplicate
        // may be specified in this map as well, using the same value of the
        // `object_id` field as a key and the newly desired ID as the value.
        // 
        // All keys must correspond to existing IDs in the presentation. All values
        // must be unique in the presentation and must start with an alphanumeric
        // character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining
        // characters may include those as well as a hyphen or colon (matches regex
        // `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or
        // greater than 50.
        // 
        // If any IDs of source objects are omitted from the map, a new random ID will
        // be assigned. If the map is empty or unset, all duplicate objects will
        // receive a new random ID.
        objectIds?: any,
        // The ID of the object to duplicate.
        objectId?: string,
    }
    
    interface ReplaceAllTextRequest {
        // Finds text in a shape matching this substring.
        containsText?: SubstringMatchCriteria,
        // If non-empty, limits the matches to page elements only on the given pages.
        // 
        // Returns a 400 bad request error if given the page object ID of a
        // notes master,
        // or if a page with that object ID doesn't exist in the presentation.
        pageObjectIds?: string[],        
        // The text that will replace the matched text.
        replaceText?: string,
    }
    
    interface Page {
        // Layout specific properties. Only set if page_type = LAYOUT.
        layoutProperties?: LayoutProperties,
        // Notes specific properties. Only set if page_type = NOTES.
        notesProperties?: NotesProperties,
        // The type of the page.
        pageType?: string,
        // The page elements rendered on the page.
        pageElements?: PageElement[],        
        // The properties of the page.
        pageProperties?: PageProperties,
        // Slide specific properties. Only set if page_type = SLIDE.
        slideProperties?: SlideProperties,
        // Master specific properties. Only set if page_type = MASTER.
        masterProperties?: MasterProperties,
        // The object ID for this page. Object IDs used by
        // Page and
        // PageElement share the same namespace.
        objectId?: string,
        // The revision ID of the presentation containing this page. Can be used in
        // update requests to assert that the presentation revision hasn't changed
        // since the last read operation. Only populated if the user has edit access
        // to the presentation.
        // 
        // The format of the revision ID may change over time, so it should be treated
        // opaquely. A returned revision ID is only guaranteed to be valid for 24
        // hours after it has been returned and cannot be shared across users. If the
        // revision ID is unchanged between calls, then the presentation has not
        // changed. Conversely, a changed ID (for the same presentation and user)
        // usually means the presentation has been updated; however, a changed ID can
        // also be due to internal factors such as ID format changes.
        revisionId?: string,
    }
    
    interface ShapeBackgroundFill {
        // The background fill property state.
        // 
        // Updating the the fill on a shape will implicitly update this field to
        // `RENDERED`, unless another value is specified in the same request. To
        // have no fill on a shape, set this field to `NOT_RENDERED`. In this case,
        // any other fill fields set in the same request will be ignored.
        propertyState?: string,
        // Solid color fill.
        solidFill?: SolidFill,
    }
    
    interface CropProperties {
        // The offset specifies the bottom edge of the crop rectangle that is located
        // above the original bounding rectangle bottom edge, relative to the object's
        // original height.
        bottomOffset?: number,
        // The rotation angle of the crop window around its center, in radians.
        // Rotation angle is applied after the offset.
        angle?: number,
        // The offset specifies the top edge of the crop rectangle that is located
        // below the original bounding rectangle top edge, relative to the object's
        // original height.
        topOffset?: number,
        // The offset specifies the left edge of the crop rectangle that is located to
        // the right of the original bounding rectangle left edge, relative to the
        // object's original width.
        leftOffset?: number,
        // The offset specifies the right edge of the crop rectangle that is located
        // to the left of the original bounding rectangle right edge, relative to the
        // object's original width.
        rightOffset?: number,
    }
    
    interface ReplaceAllShapesWithSheetsChartRequest {
        // The mode with which the chart is linked to the source spreadsheet. When
        // not specified, the chart will be an image that is not linked.
        linkingMode?: string,
        // The ID of the Google Sheets spreadsheet that contains the chart.
        spreadsheetId?: string,
        // If non-empty, limits the matches to page elements only on the given pages.
        // 
        // Returns a 400 bad request error if given the page object ID of a
        // notes page or a
        // notes master, or if a
        // page with that object ID doesn't exist in the presentation.
        pageObjectIds?: string[],        
        // The ID of the specific chart in the Google Sheets spreadsheet.
        chartId?: number,
        // The criteria that the shapes must match in order to be replaced. The
        // request will replace all of the shapes that contain the given text.
        containsText?: SubstringMatchCriteria,
    }
    
    interface ColorStop {
        // The color of the gradient stop.
        color?: OpaqueColor,
        // The relative position of the color stop in the gradient band measured
        // in percentage. The value should be in the interval [0.0, 1.0].
        position?: number,
        // The alpha value of this color in the gradient band. Defaults to 1.0,
        // fully opaque.
        alpha?: number,
    }
    
    interface Range {
        // The type of range.
        type?: string,
        // The optional zero-based index of the end of the collection.
        // Required for `FIXED_RANGE` ranges.
        endIndex?: number,
        // The optional zero-based index of the beginning of the collection.
        // Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.
        startIndex?: number,
    }
    
    interface CreateVideoRequest {
        // The element properties for the video.
        elementProperties?: PageElementProperties,
        // The video source's unique identifier for this video.
        // 
        // e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0,
        // the ID is 7U3axjORYZ0.
        id?: string,
        // The video source.
        source?: string,
        // A user-supplied object ID.
        // 
        // If you specify an ID, it must be unique among all pages and page elements
        // in the presentation. The ID must start with an alphanumeric character or an
        // underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
        // may include those as well as a hyphen or colon (matches regex
        // `[a-zA-Z0-9_-:]`).
        // The length of the ID must not be less than 5 or greater than 50.
        // 
        // If you don't specify an ID, a unique one is generated.
        objectId?: string,
    }
    
    interface DuplicateObjectResponse {
        // The ID of the new duplicate object.
        objectId?: string,
    }
    
    interface ReplaceAllShapesWithImageRequest {
        // The image URL.
        // 
        // The image is fetched once at insertion time and a copy is stored for
        // display inside the presentation. Images must be less than 50MB in size,
        // cannot exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF
        // format.
        imageUrl?: string,
        // The replace method.
        replaceMethod?: string,
        // If non-empty, limits the matches to page elements only on the given pages.
        // 
        // Returns a 400 bad request error if given the page object ID of a
        // notes page or a
        // notes master, or if a
        // page with that object ID doesn't exist in the presentation.
        pageObjectIds?: string[],        
        // If set, this request will replace all of the shapes that contain the
        // given text.
        containsText?: SubstringMatchCriteria,
    }
    
    interface Shadow {
        // The alignment point of the shadow, that sets the origin for translate,
        // scale and skew of the shadow.
        alignment?: string,
        // The alpha of the shadow's color, from 0.0 to 1.0.
        alpha?: number,
        // The shadow color value.
        color?: OpaqueColor,
        // Whether the shadow should rotate with the shape.
        rotateWithShape?: boolean,
        // The shadow property state.
        // 
        // Updating the the shadow on a page element will implicitly update this field
        // to `RENDERED`, unless another value is specified in the same request. To
        // have no shadow on a page element, set this field to `NOT_RENDERED`. In this
        // case, any other shadow fields set in the same request will be ignored.
        propertyState?: string,
        // The radius of the shadow blur. The larger the radius, the more diffuse the
        // shadow becomes.
        blurRadius?: Dimension,
        // The type of the shadow.
        type?: string,
        // Transform that encodes the translate, scale, and skew of the shadow,
        // relative to the alignment position.
        transform?: AffineTransform,
    }
    
    interface DeleteTableRowRequest {
        // The table to delete rows from.
        tableObjectId?: string,
        // The reference table cell location from which a row will be deleted.
        // 
        // The row this cell spans will be deleted. If this is a merged cell, multiple
        // rows will be deleted. If no rows remain in the table after this deletion,
        // the whole table is deleted.
        cellLocation?: TableCellLocation,
    }
    
    interface Bullet {
        // The ID of the list this paragraph belongs to.
        listId?: string,
        // The rendered bullet glyph for this paragraph.
        glyph?: string,
        // The nesting level of this paragraph in the list.
        nestingLevel?: number,
        // The paragraph specific text style applied to this bullet.
        bulletStyle?: TextStyle,
    }
    
    interface OutlineFill {
        // Solid color fill.
        solidFill?: SolidFill,
    }
    
    interface TableCellLocation {
        // The 0-based column index.
        columnIndex?: number,
        // The 0-based row index.
        rowIndex?: number,
    }
    
    interface CreateLineResponse {
        // The object ID of the created line.
        objectId?: string,
    }
    
    interface ReplaceAllTextResponse {
        // The number of occurrences changed by replacing all text.
        occurrencesChanged?: number,
    }
    
    interface UpdateParagraphStyleRequest {
        // The paragraph's style.
        style?: ParagraphStyle,
        // The location of the cell in the table containing the paragraph(s) to
        // style. If `object_id` refers to a table, `cell_location` must have a value.
        // Otherwise, it must not.
        cellLocation?: TableCellLocation,
        // The fields that should be updated.
        // 
        // At least one field must be specified. The root `style` is implied and
        // should not be specified. A single `"*"` can be used as short-hand for
        // listing every field.
        // 
        // For example, to update the paragraph alignment, set `fields` to
        // `"alignment"`.
        // 
        // To reset a property to its default value, include its field name in the
        // field mask but leave the field itself unset.
        fields?: string,
        // The range of text containing the paragraph(s) to style.
        textRange?: Range,
        // The object ID of the shape or table with the text to be styled.
        objectId?: string,
    }
    
    interface ColorScheme {
        // The ThemeColorType and corresponding concrete color pairs.
        colors?: ThemeColorPair[],        
    }
    
    interface Shape {
        // The properties of the shape.
        shapeProperties?: ShapeProperties,
        // Placeholders are shapes that are inherit from corresponding placeholders on
        // layouts and masters.
        // 
        // If set, the shape is a placeholder shape and any inherited properties
        // can be resolved by looking at the parent placeholder identified by the
        // Placeholder.parent_object_id field.
        placeholder?: Placeholder,
        // The text content of the shape.
        text?: TextContent,
        // The type of the shape.
        shapeType?: string,
    }
    
    interface Image {
        // The properties of the image.
        imageProperties?: ImageProperties,
        // An URL to an image with a default lifetime of 30 minutes.
        // This URL is tagged with the account of the requester. Anyone with the URL
        // effectively accesses the image as the original requester. Access to the
        // image may be lost if the presentation's sharing settings change.
        contentUrl?: string,
    }
    
    interface PagesResource {
        // Generates a thumbnail of the latest version of the specified page in the
        // presentation and returns a URL to the thumbnail image.
        getThumbnail (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The ID of the presentation to retrieve.
            presentationId: string,
            // The object ID of the page whose thumbnail to retrieve.
            pageObjectId: string,
            // The optional thumbnail image size.
            // 
            // If you don't specify the size, the server chooses a default size of the
            // image.
            thumbnailProperties.thumbnailSize?: string,
            // The optional mime type of the thumbnail image.
            // 
            // If you don't specify the mime type, the default mime type will be PNG.
            thumbnailProperties.mimeType?: string,
        }) : gapi.client.Request<Thumbnail>;        
        
        // Gets the latest version of the specified page in the presentation.
        get (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The object ID of the page to retrieve.
            pageObjectId: string,
            // The ID of the presentation to retrieve.
            presentationId: string,
        }) : gapi.client.Request<Page>;        
        
    }
    
    
    interface PresentationsResource {
        // Applies one or more updates to the presentation.
        // 
        // Each request is validated before
        // being applied. If any request is not valid, then the entire request will
        // fail and nothing will be applied.
        // 
        // Some requests have replies to
        // give you some information about how they are applied. Other requests do
        // not need to return information; these each return an empty reply.
        // The order of replies matches that of the requests.
        // 
        // For example, suppose you call batchUpdate with four updates, and only the
        // third one returns information. The response would have two empty replies:
        // the reply to the third request, and another empty reply, in that order.
        // 
        // Because other users may be editing the presentation, the presentation
        // might not exactly reflect your changes: your changes may
        // be altered with respect to collaborator changes. If there are no
        // collaborators, the presentation should reflect your changes. In any case,
        // the updates in your request are guaranteed to be applied together
        // atomically.
        batchUpdate (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The presentation to apply the updates to.
            presentationId: string,
        }) : gapi.client.Request<BatchUpdatePresentationResponse>;        
        
        // Creates a new presentation using the title given in the request. Other
        // fields in the request are ignored.
        // Returns the created presentation.
        create (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
        }) : gapi.client.Request<Presentation>;        
        
        // Gets the latest version of the specified presentation.
        get (request: {        
            // Legacy upload protocol for media (e.g. "media", "multipart").
            uploadType?: string,
            // Selector specifying which fields to include in a partial response.
            fields?: string,
            // V1 error format.
            $.xgafv?: string,
            // JSONP
            callback?: string,
            // Data format for response.
            alt?: string,
            // OAuth access token.
            access_token?: string,
            // API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
            key?: string,
            // Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
            quotaUser?: string,
            // Pretty-print response.
            pp?: boolean,
            // OAuth bearer token.
            bearer_token?: string,
            // OAuth 2.0 token for the current user.
            oauth_token?: string,
            // Upload protocol for media (e.g. "raw", "multipart").
            upload_protocol?: string,
            // Returns response with indentations and line breaks.
            prettyPrint?: boolean,
            // The ID of the presentation to retrieve.
            presentationId: string,
        }) : gapi.client.Request<Presentation>;        
        
        pages: PagesResource,
    }
    
}

declare module gapi.client.slides {
    var presentations: gapi.client.slides.PresentationsResource; 
    
}
