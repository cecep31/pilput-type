import { storagebaseurl } from "./getConfig";

function isFullUrl(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
}
export function getProfilePicture(url: string) {
    try {
        if (isFullUrl(url)) {
            return url;
        } else {
            return storagebaseurl + url
        }
    } catch (error) {
        return "";
    }
}
export function getUrlImage(path: string): string {
    return storagebaseurl + path
}