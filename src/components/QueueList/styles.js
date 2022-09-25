import styled from 'styled-components';

export const Container = styled.div`
        position: fixed;
        z-index: 9999;
        width: 25%;
        bottom: 2rem;
        right: 2rem;
        background-color : var(--text-title);
        border-radius: 0.30rem;
        padding: 1rem;
        box-shadow: 0 15px 8px 0 rgba(0, 0, 0, 0.2), 0 15px 20px 0 rgba(0, 0, 0, 0.19);
        color: #FFF;
       
        &.queueMinimized{
            height: 10%;
        }
        &.queueNotMinimized{
            height: 50%;
        }

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.25rem;
            font-size: 1rem;
            color: #FFF;
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 0.25rem;
            -webkit-transition: height 0.5s;
            transition: height 0.5s;
        }

        header{
            display: flex;
            justify-content: space-between;
            aline-items: center;
        }

        label{
            padding: 5px;
        }

        input{
            width: 5rem;
            border: 0;
            border-radius: 0.25rem;
            padding:0 0.25rem ;
        }

        &.queueMinimized{
            .contentContainer, .raffleButton{
                display: none;
            }
        }

        .contentContainer{
            width: max-content;
            height: 80%;
            margin: 5px 2px;

            div{
                display: flex;
                flex-direction: row;
                justify-content: center;
                padding: 0.50rem;
                margin: 0.25rem 0;
                font-size: 1rem;
                width: max-content;
                color: #FFF;
                border-radius: 0.25rem;

            }
            
            button{
                height: 2rem;
                background: transparent;
            }
        }

        .raffleButton{
            width: max-content;
            display: flex;        
            justify-content: center;
            padding: 3px 41%;
            margin-bottom: 2rem;
            font-size: larger;
            font-weight: bold;
            background: var(--green);
        }
`;