import React, { createContext, useContext, useState } from 'react';

const RaffleContext = createContext([]);

export function RaffleProvider({children}){
    const [queue, setQueue] = useState([]);
    const [maxMovies, setMaxMovies] = useState(5);
    const [message, setMessage] = useState('');
    const [movieTitle, setMovieTitle] = useState({})

    function generateRecommendation(){

    }

    function addToQueue(imdbID){
        if(queue.length <= maxMovies){
            
            setQueue([...queue, imdbID ]);
            setMessage("Movie added successfully into the queue!");
            return message;
        }
        else{
            return;
        }
    }

    function removeFromQueue(imdbID) {
      
            
            const index = queue.findIndex(({ id }) => id === imdbID);
            if (index !== -1) {
            setQueue([
                ...queue.slice(0, index),
                ...queue.slice(index + 1)
            ]);
            }
            setMessage("The movie was removed from the queue!");
            return message;
      
    }

    return (
        <RaffleContext.Provider value={{
            queue, 
            setQueue, 
            maxMovies, 
            setMaxMovies, 
            message, 
            generateRecommendation, 
            addToQueue,
            removeFromQueue,
            movieTitle,
            setMovieTitle
        }}>
            {children}
        </RaffleContext.Provider>
    );

}

export function useRaffle(){
    const context = useContext(RaffleContext);

    return context;
}