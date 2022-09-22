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
            font-size: 1rem;
            color: #FFF;
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 0.25rem;
            -webkit-transition: height 0.5s;
            transition: height 0.5s;
        }

        div{
            display: flex;
            justify-content: space-between;
            aline-items: center;
        }

        label{
            padding: 5px;
        }
`;