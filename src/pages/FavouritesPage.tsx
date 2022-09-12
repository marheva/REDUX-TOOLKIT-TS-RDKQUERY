import React from 'react';
import { useRedux } from '../hooks';

const { useAppSelector } = useRedux;

export default function FavouritesPage() {
    const { favourites } = useAppSelector(({ github }) => github);

    if (favourites.length === 0) return <p>no items</p>;
    return (
        <ul>
            {favourites.map((favourite) => {
                return (
                    <li key={favourite}>
                        <a href={favourite} target='_blank' rel='noreferrer'>
                            {favourite}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
