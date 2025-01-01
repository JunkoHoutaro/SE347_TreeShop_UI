import React from "react";
// const Footer = () => {
//     return (
//         <></>
//     )
// }
// export default Footer;
import { Text, Container, ActionIcon, Group, rem, Image, Title, TypographyStylesProvider, GridCol, Grid } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from "./Footer.module.css";
import logo from "../../assets/images/logoTree1.png";

const data = [
    {
        title: 'HỖ TRỢ KHÁCH HÀNG',

        links: [
            { label: 'Trung tâm trợ giúp', link: '#' },
            { label: 'An toàn mua bán', link: '#' },
            { label: 'Liên hệ hỗ trợ', link: '#' },
        ],
    },
    {
        title: 'VỀ CHÚNG TÔI',
        links: [
            { label: 'Trang chủ', link: '#' },
            { label: 'Sản phẩm', link: '#' },
            { label: 'Về chúng tôi', link: '#' },
            { label: 'Cam kết', link: '#' },
            { label: 'Tin tức', link: '#' },
            { label: 'Liên hệ', link: '#' },
        ],
    },
];

export function Footer() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Grid p={8}>
                <Text<'a'>
                    style={{ color: "gray" }}
                    key={index}
                    className={classes.link}
                    component="a"
                    href={link.link}
                    onClick={(event) => event.preventDefault()}
                >
                    {link.label}
                </Text>
            </Grid>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Title className={classes.title} size={"h5"}>{group.title}</Title>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} size={"xl"}>
                <Grid>
                    <GridCol span={{ base: 6, xs: 3 }}>
                        <div className={classes.logo}>
                            <Image src={logo} w={200}></Image>
                            {/* <Text size="xs" c="dimmed" className={classes.description}>
                                Thiên nhiên sở hữu biển rộng rừng xinh, bình yên là khi thiên nhiên chiếu cố đến mình.
                            </Text> */}
                        </div>
                    </GridCol>
                    <GridCol span={{ xs: 1 }} visibleFrom="xs"></GridCol>
                    <GridCol span={{ base: 6, xs: 4 }}>
                        <div>
                            <Title size={"h5"}>THÔNG TIN LIÊN HỆ</Title>
                            <TypographyStylesProvider pl={0}>
                                <Text size={"sm"} style={{ color: "gray" }}>Công ty TNHH The Greenery</Text>
                                <Text size={"sm"} style={{ color: "gray" }}>Chi nhánh TP.HCM: Đường Hàn Thuyên, Khu phố 6, TP. Thủ Đức, TP.HCM.</Text>
                                <Text size={"sm"} style={{ color: "gray" }}>Chi nhánh Gia Lai: 220 Lê Thánh Tôn, TP.Pleiku, Gia Lai</Text>
                                <Text size={"sm"} style={{ color: "gray" }}>SDT: 1234567890</Text>
                            </TypographyStylesProvider>
                        </div>
                    </GridCol>
                    <GridCol span={{ xs: 4 }} visibleFrom="xs">
                        <div className={classes.groups}>{groups}</div>
                    </GridCol>
                </Grid>



            </Container>
            <Container className={classes.afterFooter} size={"xl"}>
                <Text c="dimmed" size="sm">
                    © 2024 - The Greenery
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}