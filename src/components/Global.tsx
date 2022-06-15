import styled from "styled-components";
import Form from "./Form";
import ListComponent from "./List";
import { useQuery, gql } from "@apollo/client";
import "./global.css";

const QUERY = gql`
    query price {
        markets(filter: { baseSymbol: { _eq: "BTC" }, quoteSymbol: { _eq: "EUR" } }) {
            marketSymbol
            ticker {
                lastPrice
            }
        }
    }
`;

console.log(QUERY);

const Header = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 15vh;
`;
const List = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: cenetr;
    width: 100%;
    height: 100%;
`;
const MainTitle = styled.div`
    color: #fcfbfc;
    font-size: 55px;
`;
const SubTitle = styled.div`
    color: #fcfbfc;
    opacity: 0.5;
    font-size: 30px;
    font-weight: 500;
    margin-top: 10px;
`;

const Global = () => {
    const { data, loading, error } = useQuery(QUERY);

    console.log("data?", data);

    return (
        <>
            <Header>
                <img src="./assets/logo.svg" alt="logo" />
            </Header>

            <div className="main">
                <List>
                    <div>
                        <MainTitle>
                            Now you can track <br />
                            all your cryptos here!
                        </MainTitle>
                    </div>
                    <div>
                        <SubTitle>
                            Just enter the <br />
                            cryptocurrency on the <br />
                            form to the right.
                        </SubTitle>
                    </div>
                    <ListComponent />
                </List>
                {/* Form */}
                <Form />
            </div>
        </>
    );
};

export default Global;
