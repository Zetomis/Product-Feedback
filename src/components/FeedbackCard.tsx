import { FeedbackInterface } from "../interfaces/FeedbackInterface";
import Container from "./Container";

const FeedbackCard = ({ feed }: { feed: FeedbackInterface }) => {
    return (
        <Container>
            <div className="feedbackCard">
                <button className="border border-black rounded px-4 py-4 w-fit flex flex-col items-center justify-between h-20">
                    <i className="bx bx-chevron-up"></i>
                    <h1 className="font-semibold">{feed.upvote}</h1>
                </button>
                <div>
                    <h1 className="font-extrabold mb-2">{feed.title}</h1>
                    <p className="font-semibold mb-1">{feed.detail}</p>
                    <div className="border border-black rounded px-4 py-1 w-fit">
                        {feed.category}
                    </div>
                </div>
                <div className="flex flex-col items-center border border-black px-4 py-2 rounded h-fit">
                    <i className="bx bx-message-dots"></i>
                    <h1>{feed.comments.length}</h1>
                </div>
            </div>
        </Container>
    );
};

export default FeedbackCard;
