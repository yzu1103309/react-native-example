import client from "./client";

type KeyType = string | [string, RequestInit];

export const defaultFetcher = (key:KeyType) => {
    if (Array.isArray(key)) {
        return client(key[0], key[1]).json();
    }
    return client(key).json();
};