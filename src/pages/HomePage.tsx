import React, { useState, useEffect } from 'react';
import RecommendationCard from '../components/RecommendationCard';
import { useDebounce } from '../hooks';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../redux/githubReducer/github.api';

export default function HomePage() {
    const [search, setSearch] = useState<string>('');
    const [dropdown, setDropdown] = useState<boolean>(false);
    const debounced = useDebounce(search);
    const {
        isLoading: usersIsLoading,
        isError: usersIsError,
        data: usersData,
    } = useSearchUsersQuery(debounced, {
        skip: debounced.length < 2,
        // additional parameters;
        refetchOnFocus: true,
    });

    const [fetchUserRepositories, { isLoading: userRepositoriesIsLoading, isError: userRepositoriesIsError, data: userRepositoriesData }] =
        useLazyGetUserReposQuery({ refetchOnFocus: false });

    useEffect(() => {
        setDropdown(() => {
            if (debounced.length >= 2 && usersData?.length) {
                return true;
            }
            return false;
        });
    }, [debounced, usersData]);

    const clickHandler = (username: string) => {
        fetchUserRepositories(username);
        setDropdown(() => false);
    };

    return (
        <div>
            {usersIsError && 'something went wrong!'}

            <input
                placeholder='search for github user'
                value={search}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />

            {
                <ul>
                    {usersIsLoading && <p>Loading...</p>}
                    {usersData?.map(({ id: userId, login: userLogin, html_url: userRepoUrl }) => {
                        return (
                            <li key={userId} onClick={() => clickHandler(userLogin)}>
                                <RecommendationCard login={userLogin} html_url={userRepoUrl} />
                            </li>
                        );
                    })}
                </ul>
            }
            {userRepositoriesData?.map(({ name }) => (
                <p>{name}</p>
            ))}
        </div>
    );
}
