import { Div, Card, Upper, P } from "./form.styled";
import { Button } from "../../../../components/button";
import { Input } from "../../../../components/input";
import { useEffect, useState } from "react";
const List = (props: any) => {
    const [name, setName] = useState("");

    const fetchData = (param: string) => {
        fetch("https://api.blocktap.io/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
                    query price {
                        markets(filter: { baseSymbol: { _eq: "${param.toUpperCase()}" }, quoteSymbol: { _eq: "EUR" } }) {
                            marketSymbol
                            ticker {
                                lastPrice
                            }
                        }
                    }
                `,
            }),
        })
            .then((res) => res.json())
            .then((result) => {
                const data = localStorage.getItem("data");
                let obj: any = {};

                if (result?.data?.markets?.length > 0) {
                    obj.id = Date.now();
                    obj.name = name;
                    obj.price = parseFloat(result?.data?.markets[0]?.ticker?.lastPrice).toFixed(2) ?? "-";
                } else {
                    obj.id = Date.now();
                    obj.name = name;
                    obj.price = "-";
                }

                if (data) {
                    const crypto = JSON.parse(data);
                    crypto.push(obj);
                    props.setData(crypto);
                    localStorage.setItem("data", JSON.stringify(crypto));
                } else {
                    const crypto = [obj];
                    props.setData(crypto);
                    localStorage.setItem("data", JSON.stringify(crypto));
                }
            });
    };

    useEffect(() => {}, []);

    const addCrypto = () => {
        fetchData(name);
        setName("");
    };
    return (
        <Div>
            <Card>
                <Upper>
                    <Input
                        placeholder="Cryptocurrency Code"
                        onChange={(e: any) => setName(e.target.value)}
                        value={name}
                    />
                    <Button onClick={addCrypto} disabled={!name} label={"Add"} />
                    <P>Use of this service is subject to terms and conditions.</P>
                </Upper>
            </Card>
        </Div>
    );
};

export default List;
