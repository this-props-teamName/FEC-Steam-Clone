import {atom } from 'recoil'; 

export const gamesState = atom({
    key: 'getGameInfo', 
    default: [],
}); 

export const carouselState = atom ({
    key: 'carousel', 
    default: [],
}); 