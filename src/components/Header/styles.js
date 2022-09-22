import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 4rem 0rem 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    button { 
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        margin: 1rem;
        border-radius: 0.25rem;
        height: 4rem;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }
    input {
        width: 50%;
        padding: 0 1.5rem;
        margin: 1rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;
        &::placeholder {
            color: var(--text-body)
        }
        & + input {
            margin-top: 1rem;
        }
    }
    tr{
        margin: 1rem;
        display: flex;
        flex-wrap: nowrap;
        max-width: 100%;
    }

td {
            padding: 1rem 2rem;
            border: 0;
            display: flex;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            align-items: center;
            justify-content: center;
            &:first-child {
                color: var(--text-title);
            }
    }

    img{
        width: 4rem;
    }

    div{
        display: flex;
        position: absolute;
        top: 30%;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        left: 10%;
        right: 28%;
    }
`;