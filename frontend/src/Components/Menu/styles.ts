import styled from 'styled-components';

export const MenuContainer = styled.div`
        height : 80px;
        width : 400px;
        position: fixed;
        background: #f0f0f5;
        border: solid 1px #dcdce2;
        bottom: 0;
        display : flex;
        align-items: center;
        ul {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content : space-evenly;
            width: 100vw;
            li {
                width : 25%;
                text-align : center;
                border-right : 2px solid #dcdce2;
                &:last-child {
                    border : none;
                }
                button {
                    border : none;
                    &:focus {
                        outline : none;    
                    }
                }
            }
        }
  
`;
