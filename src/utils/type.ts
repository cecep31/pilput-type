export interface PostInterface {
    id: string;
    title: string;
    body: string;
    slug: string;
    creator: any;
    created_at: string;
}

export interface createPostInterface {
    title: string;
    body: string;
    slug: string;
    photo_url: string;
}