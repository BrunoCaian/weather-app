import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #fff;
        margin-top: 5rem;
    }
` 

export const SearchInput = styled.input`
    height: 50px;
    padding: 10px;
    font-size: 20px;
    border: none;
    outline: none;
    border-radius: 8px 0px 0px 8px;

`

export const SearchForm = styled.form`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const SearchButton = styled.button `
    background-color: #14213d;
    color: #fff;
    height: 50px;
    width: 60px;
    padding: 10px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    font-size: 20px;
    cursor: pointer;
`