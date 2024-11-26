import React from "react";
import { Container,Image } from "@mantine/core";
import confirm from "../../assets/images/confirm.png";
// import classes from "./Confirmation.module.css";
const Confirmation = ()=>{
    return (
        <>
        <Container>
            <Image src={confirm}></Image>
        </Container>
        </>
    )
};
export default Confirmation;