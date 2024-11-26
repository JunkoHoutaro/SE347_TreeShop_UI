import React from "react";
import { Card, Container, SimpleGrid, Title, Image, Text } from "@mantine/core";
// import classes from "./AboutUs.module.css";
import shipper from "../../assets/aboutUs/shipper.jpg";
import order from "../../assets/aboutUs/order.jpg";
import delivery from "../../assets/aboutUs/delivery.jpg";
import planting from "../../assets/aboutUs/planting.png";
import anh from "../../assets/aboutUs/1.png";
import phong from "../../assets/aboutUs/2.png";
import hoang from "../../assets/aboutUs/3.png";
import vu from "../../assets/aboutUs/4.png";
// import { title } from "process";
const data = [
    {
        image: order,
        title: "1. Đặt hàng",
        content: "Trụ sở của chúng tôi nhận đơn đặt hàng của bạn",
    },
    {
        image: delivery,
        title: "2. Nhận hàng tại kho",
        content: "Trụ sở của chúng tôi nhận đơn đặt hàng của bạn",
    },
    {
        image: shipper,
        title: "3. Giao hàng tận tay",
        content: "Trụ sở của chúng tôi nhận đơn đặt hàng của bạn",
    },
    {
        image: planting,
        title: "4. Tiến hành trồng cây",
        content: "Trụ sở của chúng tôi nhận đơn đặt hàng của bạn",
    },
]
const info = [
    {
        image: anh,
        name: "Nguyễn Thị Ánh",
        infomation: "FrontEnd Developer",
    },
    {
        image: phong,
        name: "Đặng Hoàng Phong",
        infomation: "BackEnd Developer",
    },
    {
        image: hoang,
        name: "Nguyễn Thị Ánh",
        infomation: "BackEnd Developer",
    },
    {
        image: vu,
        name: "Nguyễn Thị Ánh",
        infomation: "FrontEnd Developer",
    },
]
const AboutUs = () => {
    return (
        <>
            <Container style={{ display: "flex", justifyContent: "center" }} mt={80}>
                <Title size={"h2"}>Cách chúng tôi vận chuyển</Title>
            </Container>
            <Container size={"xl"}>
                <SimpleGrid cols={{base: 2, sm: 4}} mt="xl">
                    {
                        data.map((item) => (
                            <Card>
                                <Container h={'100%'}>
                                    <Image src={item.image} h={'80%'} style={{ objectFit: 'cover' }}></Image>
                                </Container>
                                <Container m={20}>
                                    <Title size={"h4"}>{item.title}</Title>
                                    <Text>{item.content}</Text>
                                </Container>
                            </Card>
                        ))
                    }
                </SimpleGrid>
            </Container>
            <Container style={{ display: "flex", justifyContent: "center" }} mt={80}>
                <Title size={"h2"}>Thành viên nhóm</Title>
            </Container>
            <Container size={"xl"}>
                <SimpleGrid cols={{base: 2, sm: 4}} mt="xl">
                    {
                        info.map((item) => (
                            <Card>
                                <Container>
                                    <Image src={item.image} h={150} w={150} style={{ objectFit: 'cover', borderRadius: '50%' }}></Image>
                                </Container>
                                <Container m={20}>
                                    <Title size={"h4"} ta={'center'}>{item.name}</Title>
                                    <Text ta={'center'}>{item.infomation}</Text>
                                </Container>
                            </Card>
                        ))
                    }
                </SimpleGrid>
            </Container>
        </>
    )
};
export default AboutUs;