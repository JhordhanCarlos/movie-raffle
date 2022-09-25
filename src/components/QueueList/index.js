import React, { useState } from "react";
import {Container} from './styles';
import { FiChevronDown, FiChevronUp, FiCheck, FiEdit2, FiTrash } from "react-icons/fi";
import { useRaffle } from "../../hooks/useRaffle";


export function QueueList () {
    const {queue, maxMovies, setMaxMovies, removeFromQueue, movieTitle} = useRaffle()

    const [isMinimized, setIsMinimized] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    
console.log(queue)
    function handleMaxMovies(){
        setIsEditing(false)
    }

    function handleEdit(){
        setIsEditing(true)
    }

    function handleMinimize(){
        setIsMinimized(!isMinimized);
    }

    return(
        <Container className={isMinimized ? "queueMinimized" : "queueNotMinimized"}>
            <header>
                <h3>Queue</h3>
                {
                    isEditing ? (
                        <>
                        <input type="number" placeholder={`Max: ${maxMovies}`} onBlur={(e) => setMaxMovies(e.target.value)}/>
                        <button onClick={handleMaxMovies}>
                            <FiCheck size={20}/> 
                        </button>
                        </>
                    ) : (
                        <>
                        <label>{queue.length}/{maxMovies}</label>
                        <button onClick={handleEdit}>
                            <FiEdit2 size={20}/> 
                        </button>
                        </>
                    )
                }

                {
                    isMinimized 
                    ? 
                    <button onClick={handleMinimize}>
                        <FiChevronUp size={20}/> 
                    </button>
                    : 
                    <button onClick={handleMinimize}>
                        <FiChevronDown size={20}/>
                    </button>
                }
            </header>
            <div className="contentContainer">
            {
                queue.length === 0 ?
                (<label>
                    The queue is empty                    
                </label> )
                :
               ( queue.map((movie) => (
                    <div key={movie[0].id}>
                        <label>
                            {movie[0].title}
                        </label>
                        <button onClick={() => removeFromQueue(movie[0].id)}>
                            <FiTrash size={20}/>
                        </button>
                    </div>
                )))
            }
            </div>
            <button className="raffleButton">
                Raffle
            </button>
        </Container>
    )
}