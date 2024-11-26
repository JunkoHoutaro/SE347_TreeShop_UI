import { Grid, GridCol } from "@mantine/core";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import { SignInBox } from "../../components/SignInBox/SignInBox";
export const SignIn= () => {
    return (
        <Grid>
            <GridCol span={{ base: 12, md: 6 }}><CarouselCard /></GridCol>
            <GridCol span={{ base: 12, md: 6 }}><SignInBox/></GridCol>
        </Grid>
    );
};