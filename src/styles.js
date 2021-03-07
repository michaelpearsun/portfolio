import styled from 'styled-components';

export const StyledComponentAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-items: space-between;
    padding: 5rem 10rem;
    color: white;
`
export const StyledComponentDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2{
        font-weight:lighter;
    }
`

export const StyledComponentImage = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

export const StyledComponentHide = styled.div`
    overflow: hidden;
`