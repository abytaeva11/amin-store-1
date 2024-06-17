import React, { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";

// Define the type for a review
type ReviewType = {
    id: number;
    name: string;
    rating: number;
    purchaseMethod: string;
    comment: string;
    date: string;
};

// Fake backend data
const fakeBackend: ReviewType[] = [
    {
        id: 1,
        name: "Орлов В.Н",
        rating: 5,
        purchaseMethod: "доставка",
        comment: "Все достойно, и ребята знающие работают. Помогли нам с выбором игрового компьютера, хотелось что-то не очень дорогое, но достаточно мощное. Такой вариант здесь нашли. Доставили в срок со всей документацией. И сын, и я довольны, спасибо.",
        date: "7 мая 2023"
    },
    {
        id: 2,
        name: "Орлов В.Н",
        rating: 5,
        purchaseMethod: "доставка",
        comment: "Все достойно, и ребята знающие работают. Помогли нам с выбором игрового компьютера, хотелось что-то не очень дорогое, но достаточно мощное. Такой вариант здесь нашли. Доставили в срок со всей документацией. И сын, и я довольны, спасибо.",
        date: "7 мая 2023"
    },
    {
        id: 3,
        name: "Орлов В.Н",
        rating: 5,
        purchaseMethod: "доставка",
        comment: "Все достойно, и ребята знающие работают. Помогли нам с выбором игрового компьютера, хотелось что-то не очень дорогое, но достаточно мощное. Такой вариант здесь нашли. Доставили в срок со всей документацией. И сын, и я довольны, спасибо.",
        date: "7 мая 2023"
    },
    {
        id: 4,
        name: "Орлов В.Н",
        rating: 5,
        purchaseMethod: "доставка",
        comment: "Все достойно, и ребята знающие работают. Помогли нам с выбором игрового компьютера, хотелось что-то не очень дорогое, но достаточно мощное. Такой вариант здесь нашли. Доставили в срок со всей документацией. И сын, и я довольны, спасибо.",
        date: "7 мая 2023"
    },
    {
        id: 5,
        name: "Орлов В.Н",
        rating: 5,
        purchaseMethod: "доставка",
        comment: "Все достойно, и ребята знающие работают. Помогли нам с выбором игрового компьютера, хотелось что-то не очень дорогое, но достаточно мощное. Такой вариант здесь нашли. Доставили в срок со всей документацией. И сын, и я довольны, спасибо.",
        date: "7 мая 2023"
    },
    {
        id: 6,
        name: "Орлов В.Н",
        rating: 5,
        purchaseMethod: "доставка",
        comment: "Все достойно, и ребята знающие работают. Помогли нам с выбором игрового компьютера, хотелось что-то не очень дорогое, но достаточно мощное. Такой вариант здесь нашли. Доставили в срок со всей документацией. И сын, и я довольны, спасибо.",
        date: "7 мая 2023"
    },
    {
        id: 7,
        name: "Орлов В.Н",
        rating: 5,
        purchaseMethod: "доставка",
        comment: "Все достойно, и ребята знающие работают. Помогли нам с выбором игрового компьютера, хотелось что-то не очень дорогое, но достаточно мощное. Такой вариант здесь нашли. Доставили в срок со всей документацией. И сын, и я довольны, спасибо.",
        date: "7 мая 2023"
    },
    {
        id: 8,
        name: "Орлов В.Н",
        rating: 5,
        purchaseMethod: "доставка",
        comment: "Все достойно, и ребята знающие работают. Помогли нам с выбором игрового компьютера, хотелось что-то не очень дорогое, но достаточно мощное. Такой вариант здесь нашли. Доставили в срок со всей документацией. И сын, и я довольны, спасибо.",
        date: "7 мая 2023"
    },
];

const Review: React.FC = () => {
    // Use the defined type for the reviews state
    const [reviews, setReviews] = useState<ReviewType[]>([]);
    const [visibleReviews, setVisibleReviews] = useState(5);

    useEffect(() => {
        // Simulating a fetch from the backend
        setReviews(fakeBackend);
    }, []);

    const loadMoreReviews = () => {
        setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 5);
    };

    return (
        <div className='big2'>
            {reviews.slice(0, visibleReviews).map((review) => (
                <div className='block5' key={review.id}>
                    <div className='block5-text'>
                        <h6>{review.name}</h6>
                        <div className='block5-icon'>
                            {Array.from({ length: review.rating }, (_, index) => (
                                <h1 key={index}><AiFillStar /></h1>
                            ))}
                            <h5>отличный магазин
                                Способ покупки: {review.purchaseMethod}</h5>
                        </div>
                        <h4>Комментарий</h4>
                        <p>{review.comment}</p>
                        <h5>{review.date}</h5>
                    </div>
                </div>
            ))}
            {visibleReviews < reviews.length && (
                <button onClick={loadMoreReviews}>загрузить еще</button>
            )}
        </div>
    );
};

export default Review;
