import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 85vw;
    max-width:600px;
    gap:2rem;
    position:relative;
    color: #000;;

    @media (min-width: 768px) {
        top:9%;
    }
    @media (min-width: 1024px) {
        flex-wrap: none;
        max-width: 85vw;
        top:3%;        
    }
`
export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => ((props.answerBtn) ? '5.7em' : '12em')};
    height: ${(props) => ((props.answerBtn) ? '3.5em' : '2em')};
    border-radius: 10px;
    border:none;
    background-color: #dfe3f5;
    color:black;
    font-family: 'Open Sans', sans-serif;
    font-size:100%;
    font-weight:500;
    cursor: pointer;

    :hover{
        transform: scale(1.15);
    }
    

    @media (min-width: 768px) {
        width: ${(props) => ((props.answerBtn) ? '8em' : '18em')};
        height: ${(props) => ((props.answerBtn) ? '4.5em' : '3em')};
        font-size:1.8rem;
    }

    @media (min-width: 1024px) {
        width: ${(props) => ((props.answerBtn) ? '8em' : '13em')};
        height: ${(props) => ((props.answerBtn) ? '4.5em' : '2.5em')};
        margin-top:10px;
    }
`;