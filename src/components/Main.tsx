import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useSelector } from "react-redux";
import { getFeedbackData } from "../redux/features/feedbackSlice";

const Main = () => {
    const dispatch = useAppDispatch();
    const feedback = useAppSelector((state) => state.feedback.feedback);
    const loading = useAppSelector((state) => state.feedback.loading);
    const error = useAppSelector((state) => state.feedback.error);

    useEffect(() => {
        dispatch(getFeedbackData());
    }, []);

    console.log(feedback);

    return <div>Main</div>;
};

export default Main;
