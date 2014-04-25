
declare module google.picker {

    export module Action {
        export var PICKED: string;
    }

    export module Feature {
        export var MINE_ONLY: string;
        export var MULTISELECT_ENABLED: string;
        export var NAV_HIDDEN: string;
        export var SIMPLE_UPLOAD_ENABLED: string;
    }

    export module Document {
        export var URL: string;
    }

    export module Response {
        export var ACTION: string;
        export var DOCUMENTS: string;
    }

    export module ViewId {
        export var FOLDERS: string;
        export var PHOTOS: string;
        export var DOCS: string;
        export var DOCS_IMAGES: string;
        export var SPREADSHEETS: string;
        export var PDFS: string;
        export var IMAGE_SEARCH: string;
        export var RECENTLY_PICKED: string;
    }

    export class PickerBuilder {
        addView(view: string): PickerBuilder;
        addView(view: View): PickerBuilder;
        build(): Picker;
        enableFeature(feature: string): PickerBuilder;
        disableFeature(feature: string): PickerBuilder;
        setOAuthToken(token: string): PickerBuilder;
        setDeveloperKey(key: string): PickerBuilder;
        setCallback(callback: (data: PickerResult) => void): PickerBuilder;
    }

    export class Picker {
        setVisible(visibility: boolean): void;
    }

    export class View {
        constructor(viewId: string);
        setQuery(query: string): View;
    }

    export interface PickerResult {
        action: string;
        docs: Array<PickerNode>;
        parents: Array<PickerNode>;
    }

    export interface PickerNode {
        audience?: string;
        description: string;
        iconUrl: string;
        id: string;
        lastEditedUtc: number;
        latitude?: number;
        longitude?: number;
        isNew?: boolean;
        mediaKey: string;
        mimeType: string;
        name: string;
        numChildren?: number;
        parentId?: string;
        rotation?: number;
        serviceId: string;
        sizeBytes: number;
        thumbnails?: Array<PickerThumbnail>;
        type: string;
        url: string;
        version: number;
    }

    export interface PickerThumbnail {
        width: number;
        height: number;
        url: string;
    }
}