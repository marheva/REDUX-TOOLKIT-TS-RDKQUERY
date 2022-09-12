import React, { useState } from 'react';
import { useRedux } from '../../hooks';

const { useAppActions, useAppSelector } = useRedux;

export default function RecommendationCard({ login, html_url }: any) {
    const { favourites } = useAppSelector(({ github }) => github);
    const { addFavourite, removeFavourite } = useAppActions();

    const [isFavourite, setIsFavourite] = useState(favourites.includes(html_url));

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addFavourite(html_url);
        setIsFavourite((prevValue) => !prevValue);
    };

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        removeFavourite(html_url);
        setIsFavourite((prevValue) => !prevValue);
    };
    return (
        <div>
            <a href={html_url} target='_blank' rel='noreferrer'>
                {login}
            </a>
            {!isFavourite && <button onClick={addToFavourite}>ADD</button>}
            {isFavourite && <button onClick={removeFromFavourite}>REMOVE</button>}
        </div>
    );
}
