import React, { useState } from "react";
import {Container} from './styles';
import { FiChevronDown, FiChevronUp, FiCheck, FiEdit2 } from "react-icons/fi";


export function QueueList () {
    const [isMinimized, setIsMinimized] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [maxMovies, setMaxMovies] = useState(0);
    

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
            <div>
                <h3>Queue</h3>
                {
                    isEditing ? (
                        <>
                        <input type="number" placeholder={`Max: ${maxMovies}`} onBlur={(e) => setMaxMovies(e.target.value)}/>
                        <button onClick={handleMaxMovies}>
                            <FiCheck size={24}/> 
                        </button>
                        </>
                    ) : (
                        <>
                        <label>00/{maxMovies}</label>
                        <button onClick={handleEdit}>
                            <FiEdit2 size={24}/> 
                        </button>
                        </>
                    )
                }

                {
                    isMinimized 
                    ? 
                    <button onClick={handleMinimize}>
                        <FiChevronUp size={24}/> 
                    </button>
                    : 
                    <button onClick={handleMinimize}>
                        <FiChevronDown size={24}/>
                    </button>
                }
            </div>
        </Container>
    )
}