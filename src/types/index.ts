export interface PostInterface {
    id: string;
    title: string;
    body: string;
    slug: string;
    creator: userInterface;
    created_at: string;
}

export interface createPostInterface {
    title: string;
    body: string;
    slug: string;
    photo_url: string;
}

export interface userInterface {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    image: string;
    issuperadmin: boolean;
}

export interface YourData {
    first_name: string;
    last_name: string;
    email: string;
    image: string;
  }