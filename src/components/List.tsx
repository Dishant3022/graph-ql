import React from "react";
import styled from "styled-components";

const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 30px;
    width: 100%;
    height: 100%;
    margin-top: 60px;
`;

const Item = styled.div`
    display: flex;
    height: 20%;
    width: 50%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px white solid;
`;

const ItemChileOne = styled.div`
    flex: 1;
`;

const ItemChileTwo = styled.div`
    flex: 2;
`;

const ItemChileThree = styled.div`
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const InnerList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;
const First = styled.div`
    color: #fcfbfc;
    margin-bottom: 1px;
    font-size: 25px;
`;
const Second = styled.div`
    color: #fcfbfc;
    opacity: 0.5;
    font-size: 15px;
`;
const List = () => {
    return (
        <ListItem>
            <Item>
                <ItemChileOne>
                    <img src="./assets/icon.svg" alt="trophy" height="60px" />
                </ItemChileOne>
                <ItemChileTwo>
                    <InnerList>
                        <First>BTC</First>
                        <Second>7842.27 €</Second>
                    </InnerList>
                </ItemChileTwo>

                <ItemChileThree>
                    <img src="./assets/close.png" alt="close" height="10px" width="10px" />
                </ItemChileThree>
            </Item>
        </ListItem>
    );
};

export default List;
