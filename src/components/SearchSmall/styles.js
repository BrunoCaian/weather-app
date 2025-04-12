import styled from "styled-components";
export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
`
export const SearchInput = styled.input`
    box-sizing: border-box;
    height: 40px;
    padding: 20px;
    width: 70%;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 8px 0px 0px 8px;
    outline: none;

    @media (max-width: 900px) {
        width: 50%;
    }
`

export const SearchButton = styled.button`
    background-color: #14213d;
    color: white;
    height: 40px;
    width: 60px;
    font-size: 1.5rem;
    border: none;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
`