import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useSelector } from "react-redux";
import { getFeedbackData } from "../redux/features/feedbackSlice";
import Container from "./Container";
import Button from "./Button";
import FeedbackCard from "./FeedbackCard";
import { FeedbackInterface } from "../interfaces/FeedbackInterface";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const dispatch = useAppDispatch();
    const feedback = useAppSelector((state) => state.feedback.feedback);
    const loading = useAppSelector((state) => state.feedback.loading);
    const error = useAppSelector((state) => state.feedback.error);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getFeedbackData());
    }, []);

    const handleAddFeedback = () => {
        navigate("/add");
    };

    const handleFeedClick = (feed: FeedbackInterface) => {
        navigate(`/feed/${feed.id}`);
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className="flex flex-col gap-y-6">
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-semibold">
                            {feedback.length} Feedback(s)
                        </h1>
                    </div>
                    <div>
                        <Button onClickEvent={handleAddFeedback}>
                            Add Feedback
                        </Button>
                    </div>
                </div>
            </Container>
            {feedback.map((feed) => (
                <div
                    className="cursor-pointer"
                    onClick={() => handleFeedClick(feed)}
                >
                    <FeedbackCard key={feed.id} feed={feed} />
                </div>
            ))}
        </div>
    );
};

export default Main;
