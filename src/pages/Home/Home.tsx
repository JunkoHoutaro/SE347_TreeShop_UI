// import classes from './Home.module.css';
import Banner from "../../components/Banner/Banner";
import { Button, Card, Container, Grid, GridCol, SimpleGrid, Title } from "@mantine/core";
import { ICardProps } from "../../components/Banner/Banner";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
// import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import { ProductCollection } from "../../components/ProductCollection/ProductCollection";
import { FeaturesCards } from "../../components/FeaturesCard/FeaturesCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ConfirmModule } from "../../components/ConfirmModule/ConfirmModule";
import classes from "./Home.module.css";
// import ImageCard from "../../components/BlogCard/BlogCard";
import { useNavigate } from "react-router-dom";
import ImageCard, { BlogCard } from "../../components/BlogCard/BlogCard";
import { Product } from "../../components/ProductCard/ProductCard";
import CamTuCau from '../../assets/products/hoa-cam-tu-cau.jpg';
import MauDon from '../../assets/products/hoa-mau-don.jpg';
import Tulip from '../../assets/products/hoa-tulip.jpg';
import cayCam from "../../assets/products/cay-cam.jpg";
import cayLuu from "../../assets/products/cay-luu.jpg";
import caySenDa from "../../assets/products/cay-sen-da.jpg";
import hoaMauDon from "../../assets/products/hoa-mau-don.jpg";
import { useHover } from "@mantine/hooks";
import { getListProduct } from "../../api/productApi";
import { useEffect } from "react";
const data: ICardProps[] = [
    {
        id: 1,
        image: img1,
        // 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: '',
        category: 'Thiên nhiên',
    },
    {
        id: 2,
        image: img2,
        // 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: '',
        category: 'Thiên nhiên',
    },
];
const backgroundData: ICardProps[] = [
    // {
    //     id: 1,
    //     image: img3,
    //     // 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    //     title: '',
    //     category: 'Thiên nhiên',
    // },
    {
        id: 2,
        image: img4,
        // 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        title: '',
        category: 'Thiên nhiên',
    },
];

const dataBlogCard: BlogCard[] = [
    {
        image: CamTuCau,
        url: "#",
        tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
        content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
    },
    {
        image: MauDon,
        url: "#",
        tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
        content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
    },
    {
        image: Tulip,
        url: "#",
        tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
        content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
    },
]
const items: Product[] = [
    { id: 1, name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    { id: 2, name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    { id: 3, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    { id: 4, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    { id: 5, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    { id: 6, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    { id: 7, name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    { id: 8, name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    { id: 9, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    { id: 10, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    // { name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
];
const Home = () => {
    let navigator = useNavigate();
    const { hovered, ref } = useHover();
    useEffect(() => {
        console.log("Data");
        getListProduct().then((data) => {
            console.log(data.products);
        });
    })
    return (
        <>
            <Grid styles={{ inner: { margin: 0, width: '100%' } }}>
                <GridCol span={{ base: 12, sm: 9 }}>
                    <Banner {...backgroundData} />
                </GridCol>
                <GridCol span={{ base: 12, sm: 3 }} visibleFrom="sm">
                    <Banner {...data} />
                </GridCol>
            </Grid>
            <ProductCollection />
            <FeaturesCards />
            {/* <Card withBorder radius="md" className={classes.card}>
                <SimpleGrid cols={9} mt="md">
                    
                </SimpleGrid>
            </Card> */}

            <Card withBorder radius="md" className={classes.card} pb={30}>
                <Container className={classes.button}>
                    <Title size={"h2"}>Sản phẩm phổ biến</Title>
                </Container>
                <SimpleGrid cols={{ base: 2, xs: 3, sm: 5 }} mt="md">
                    {/* {itemcollection} */}
                    {
                        items.map((item) => (
                            <ProductCard item={item} />

                        ))
                    }
                </SimpleGrid>
            </Card>
            <ConfirmModule />
            <Card withBorder radius="md" pb={30}>
                <Container className={classes.button}>
                    <Title size={"h2"}>Bài viết hướng dẫn</Title>
                </Container>
                <Container size={"xl"}>
                    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} mt="xl">
                        {
                            dataBlogCard.map((item) => (
                                <ImageCard dataBlogCard={item} />
                            ))
                        }

                    </SimpleGrid>
                    <Container mt={20} style={{ display: "flex", justifyContent: "center" }} ref={ref}>
                        <Button radius={20} style={{ backgroundColor: hovered ? '#DF4D3F' : '#1E3B27' }} onClick={() => navigator('/blogs')}>Xem tất cả các bài viết</Button>
                    </Container>
                </Container>
            </Card>
        </>
    )
};
export default Home;