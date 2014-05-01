// Type definitions for Dropbox Chooser API client
// Project: 
// Definitions by: Steve Hobbs <https://github.com/elkdanger>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Dropbox Chooser js documentation: https://www.dropbox.com/developers/dropins/chooser/js

/**
 * Primary Dropbox class
 */
declare module Dropbox {

    /**
     * The chooser options
     */
    export interface ChooserOptions {
        /**
         * The callback to invoke once files have been chosen
         */
        success: (files: Array<DropboxFile>) => void;

        /**
         * The callback to invoke once the chooser has been cancelled
         */
        cancel?: () => void;

        /**
         * The type of link; 'preview' or 'direct'. Default value is 'preview'
         */
        linkType?: string;

        /**
         * Whether the user should be allowed to selected a single file or multiple files. Default is 'false'
         */
        multiselect?: boolean;

        /**
         * A list of file extensions, which limit the types of files that the user can choose. By default, the user can pick a file with any extension.
         */
        extensions?: Array<string>;
    }

    /**
     * Represents a file object which is returned by the chooser
     */
    export interface DropboxFile {
        /**
         * The name of the file
         */
        name: string;

        /**
         * The url to the file if using direct mode, or a link to a wrapper page on the Dropbox website.
         */
        link: string;

        /**
         * The file size in bytes
         */
        bytes: number;

        /**
         * Url to a 64x64 icon for the file based on the file extension
         */
        icon: string;

        /**
         * A thumbnail URL generated when the user selects images and videos. If no image or video was selected, no thumbnail will be included.
         */
        thumbnailLink?: string;
    }

    /**
     * Creates the button which can be used to trigger the chooser
     * @param options The button options
     */
    export function createChooseButton(options: ChooserOptions): HTMLElement;

    /**
     * Initiates the picker and shows the UI
     */
    export function choose(options: ChooserOptions);

    /**
     * Gets a value which indicates whether the current browser is supported by the Dropbox Chooser
     */
    export function isBrowserSupported(): boolean;
}

