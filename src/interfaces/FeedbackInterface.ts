export interface ReplyInterface {
    "reply-user": string;
    "reply-detail": string;
}

export interface CommentInterface {
    "comment-user": string;
    "comment-detail": string;
    replies: ReplyInterface[];
}

export interface FeedbackInterface {
    title: string;
    category: string;
    detail: string;
    id: string;
    comments: CommentInterface[];
}
