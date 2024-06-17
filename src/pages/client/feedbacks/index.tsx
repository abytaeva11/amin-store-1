import React, { useState } from 'react';
import { FaRegStar } from "react-icons/fa";
import './index.scss';
import {useCreateFeedbackMutation} from "src/store";
import {notify} from "src/utils";

export const CreateFeedBackPage = () => {
    const [feedbackText, setFeedbackText] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);
    const [name, setName] = useState('')
    const [createFeedback] = useCreateFeedbackMutation()

    const handleStarClick = (clickedRating: number) => {
        if (clickedRating === selectedRating) {
            setSelectedRating(0);
        } else {
            setSelectedRating(clickedRating);
        }
    };

    const handleSubmit = async () => {
        const data: any = {
            title: name,
            stars: selectedRating,
            description: feedbackText,
            product: 1
        }
        try {
            await createFeedback(data).unwrap()
            notify(true, "Успешно");
            setFeedbackText('');
            setSelectedRating(0);
            setName('')
        } catch (e) {
            setFeedbackText('');
            setSelectedRating(0);
            setName('')
        }

    };

    return (
        <div className="user-reviews">
            <div className="user-reviews-inside">
                <h2>Что вы думаете ?</h2>
                <h3>Пожалуйста, дайте свою оценку</h3>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="напишите свое имя" />
                <textarea value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} />
                <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            className={`star ${value <= selectedRating ? 'lit' : ''}`}
                            onClick={() => handleStarClick(value)}
                        >
                            <FaRegStar />
                        </span>
                    ))}
                </div>
                <div className="user-reviews-btn">
                    <button onClick={handleSubmit}>
                        <h4>Отправить</h4>
                    </button>
                </div>
            </div>
        </div>
    );
};

