import React from "react";
import { Card, Container, Image, Title, Text, Button } from "@mantine/core";
import classes from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";
import { useHover } from "@mantine/hooks";

export interface Product {
    id: number,
    name: string;
    img: string;
    price: number;
}
const ProductCard = ({ item }: { item: Product }) => {
    const vnd = new Intl.NumberFormat('vi');
    let navigator = useNavigate();
    const { hovered, ref } = useHover();
    return (
        <>
            <Card shadow="xl" radius="md" m={0} key={item.id}>
                <Container style={{ width: '100%' }} p={0}>
                    <Image src={item.img} h={250} style={{ objectFit: 'cover' }}></Image>
                    <Container h={50} mt={10} style={{ width: '100%', padding: '0px' }}>
                        <Title size={"h5"}>{item.name}</Title>
                    </Container>
                    <Text>{vnd.format(item.price)} đ</Text>
                    <Container mt={10} className={classes.button} ref={ref}>
                        <Button style={{ borderRadius: "20px", width: "80%", backgroundColor: hovered ? '#DF4D3F' : '#1E3B27' }} onClick={() => navigator('/contactUs', { state: { data: item } })}>Liên hệ ngay</Button>
                    </Container>
                </Container>
            </Card>
        </>
    )
}
export default ProductCard;
