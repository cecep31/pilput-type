import { storagebaseurl } from "./getConfig";

function isFullUrl(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
}
export function getProfilePicture(url: string) {
    if (isFullUrl(url)) {
        return url;
    } else {
        return storagebaseurl + url
    }
}
export function getUrlImage(path: string): string {
    return storagebaseurl + path
}