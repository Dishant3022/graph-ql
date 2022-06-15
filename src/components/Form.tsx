import styled from "styled-components";

const Div = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: cenetr;
    width: 100%;
    height: 100%;
`;
const Card = styled.div`
    background-color: white;
    height: 32%;
    width: 50%;
    padding: 0px 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Upper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 70%;
    width: 75%;
    margin: auto;
`;

const Input = styled.input`
    width: 95%;
    height: 40px;
    padding-left: 10px;
`;

const Button = styled.button`
    width: 100%;
    height: 42px;
    background-color: #fd4b24;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    cursor: pointer;
`;

const P = styled.p`
    color: black;
    opacity: 0.5;
    margin-top: 40px;
    text-align: center;
`;
const Form = () => {
    return (
        <Div>
            <Card>
                <Upper>
                    <Input placeholder="Cryptocurrency Code" />
                    <Button>Add</Button>
                    <P>Use of this service is subject to terms and conditions.</P>
                </Upper>
            </Card>
        </Div>
    );
};

export default Form;
