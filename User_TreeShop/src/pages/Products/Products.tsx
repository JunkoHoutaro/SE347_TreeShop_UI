import { Accordion, Checkbox, Container, Grid, GridCol, Slider, Title, Text, SimpleGrid, Pagination } from "@mantine/core";
import classes from "./Products.module.css";
import { IconPlant } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
import cayCam from "../../assets/products/cay-cam.jpg";
import cayLuu from "../../assets/products/cay-luu.jpg";
import caySenDa from "../../assets/products/cay-sen-da.jpg";
import hoaMauDon from "../../assets/products/hoa-mau-don.jpg";
import ProductCard, { Product } from "../../components/ProductCard/ProductCard";
import { chunk } from "../Blogs/Blogs";
import { useEffect, useState } from "react";
import { getListProduct } from "../../api/productApi";
const data = [
    {
        value: '1',
        icon: IconPlant,
        title: 'Loại cây',
        collections: [
            { colection: 'Cây ăn quả' },
            { colection: 'Cây hoa' },
            { colection: 'Cây decor' },
            { colection: 'Cây hàng rào' },
            { colection: 'Cây thực phẩm' },
            { colection: 'Cây trong nhà' },
            { colection: 'Cây trước hiên' },
        ]
    },
    {
        value: '2',
        title: 'Khu vực',
        icon: IconMapPin,
        collections: [
            { colection: 'Tây nguyên' },
            { colection: 'Bắc trung bộ' },
            { colection: 'Nam bộ' },
            { colection: 'Tây bắc' },
            { colection: 'Duyên hải nam trung bộ' },
        ]
    }
]
const Products = () => {
    // const products: Product[] = [
    //     { id: 1, name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    //     { id: 2, name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    //     { id: 3, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    //     { id: 4, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    //     { id: 5, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    //     { id: 6, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    //     { id: 7, name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    //     { id: 8, name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    //     { id: 9, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    //     { id: 10, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    //     { id: 11, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    //     { id: 12, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    //     { id: 13, name: "Giống cây cam Vinh", img: cayCam, price: 360000 },
    //     { id: 14, name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    //     { id: 15, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    //     { id: 16, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
    //     { id: 17, name: "Sen đá viền đỏ - Sen đá viền lửa", img: caySenDa, price: 51000 },
    //     { id: 18, name: "Hoa mẫu đơn Nhật Bản - hồng phấn", img: hoaMauDon, price: 134000 },
        
    //     // { name: "Lựu Israel - Hạt mọng nước", img: cayLuu, price: 750000 },
    // ];
    const [activePage, setPage] = useState(1);
    const [produ, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        getListProduct().then((data) => {
            const newProd = data.products?.map((item : any) => 
            ({ id: item.id, name: item.name, img: item.image, price: item.price } as Product))
            setProducts(newProd);
        });
    }, [])
    const dataProducts = chunk(produ, 8);

    return (
        <>
            <Grid styles={{ inner: { margin: 0, width: '100%' } }}>
                <GridCol span={{ base: 3, sm: 2.5 }} visibleFrom="xs">
                    <nav className={classes.navbar}>
                        <Title size={'h4'}>LỌC</Title>
                        {
                            data.map((item) => (
                                <Accordion defaultValue="1">
                                    <Accordion.Item value={item.value} key={item.value}>
                                        <Accordion.Control icon={<item.icon color="#87BD41"></item.icon>}>{item.title}</Accordion.Control>
                                        <Accordion.Panel>
                                            {
                                                item.collections.map((i) => (
                                                    <Container m={10}>
                                                        <Checkbox
                                                            color="#1E3B27"
                                                            label={i.colection}
                                                        />
                                                    </Container>
                                                ))
                                            }
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            ))
                        }
                        <Container size={'xl'} m={20}>
                            <Text>Giá</Text>
                            <Slider
                                step={25}
                                w={'80%'}
                                color="#1E3B27"
                                marks={[
                                    { value: 25, label: '20k' },
                                    { value: 50, label: '200k' },
                                    { value: 85, label: '2tr' },
                                ]}
                            />
                        </Container>
                    </nav>
                </GridCol>
                <GridCol span={{ base: 12, xs: 9, sm: 9.5 }}>
                    {/* <ProductCard items={items}/> */}
                    <SimpleGrid cols={{ base: 2, sm: 4 }} m="xl">
                        {
                            dataProducts[activePage - 1]?.map((item) => (
                                <ProductCard item={item} />
                            ))
                        }

                    </SimpleGrid>
                </GridCol>
            </Grid >
            <Container display={'flex'} style={{ justifyContent: 'center' }}>
                    <Pagination color="#1E3B27" total={dataProducts.length} value={activePage} onChange={setPage} mt="sm" />
                </Container>
        </>
    )
};
export default Products;