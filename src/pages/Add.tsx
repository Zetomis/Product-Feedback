import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";

const Add = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/");
    };

    const handleAddFeedback = () => {};

    return (
        <div className="w-full max-w-2xl px-8 py-12 mx-auto flex flex-col gap-y-6">
            <Link to={"/"} className="flex items-center gap-x-2">
                <i className="bx bx-left-arrow-alt"></i> Go Back
            </Link>
            <Container>
                <h1 className="font-bold text-2xl mb-12">
                    Create New Feedback
                </h1>
                <div className="mb-4">
                    <label htmlFor="title">
                        <h1 className="font-semibold">Feedback Title</h1>
                        <span className="text-sm">
                            Add a short, descriptive headline
                        </span>
                    </label>
                    <input
                        id="title"
                        type="text"
                        className="border border-black rounded focus:outline-none outline-none bg-transparent px-4 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category">
                        <h1 className="font-semibold">Category</h1>
                        <span className="text-sm">
                            Choose a category for your feedback
                        </span>
                    </label>
                    <input
                        id="category"
                        type="text"
                        className="border border-black rounded focus:outline-none outline-none bg-transparent px-4 py-2 w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="detail">
                        <h1 className="font-semibold">Feedback Detail</h1>
                        <span className="text-sm">
                            Include any specific comments on what should be
                            improved, added, etc.
                        </span>
                    </label>
                    <textarea
                        id="detail"
                        className="border border-black rounded focus:outline-none outline-none bg-transparent px-4 py-2 w-full"
                        required
                    />
                </div>
                <div className="flex gap-x-4 justify-end">
                    <Button onClickEvent={handleCancel}>Cancel</Button>
                    <Button onClickEvent={handleAddFeedback}>
                        Add Feedback
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Add;
