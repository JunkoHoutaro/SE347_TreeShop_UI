import {
    Card,
    Text,
    SimpleGrid,
    Image,
    UnstyledButton,
} from '@mantine/core';
import classes from './ProductCollection.module.css';
import cayAnQua from '../../assets/collection/cay-an-qua.jpg';
import cayDecor from '../../assets/collection/cay-decor.jpg';
// import cayHangRao from '../../assets/collection/cay-hang-rao.jpg';
import cayHoa from '../../assets/collection/cay-hoa.jpg';
import cayThucPham from '../../assets/collection/cay-thuc-pham.jpeg';
// import cayTrongNha from '../../assets/collection/cay-trong-nha.jpg';
// import cayTruocHien from '../../assets/collection/cay-truoc-hien.jpg';
// import cayBongRam from '../../assets/collection/cay-phong-la-do.jpg';
import cayDeBan from '../../assets/collection/cay-de-ban.jpg';
import cayPhongThuy from '../../assets/collection/cay-phong-thuy.jpg';
import caySanVuon from '../../assets/collection/cay-san-vuon.jpg';
import cayLamSach from '../../assets/collection/cay-duong-xi.jpg';

import { useNavigate } from 'react-router-dom';
// import { Carousel } from '@mantine/carousel';
export type CollectionCard = {
    title: string,
    image: string;
    link: string;
};
const items: CollectionCard[] = [
    { title: 'Cây ăn quả', image: cayAnQua, link: '#' },
    { title: 'Cây trang trí', image: cayDecor, link: '#' },
    { title: 'Cây hoa', image: cayHoa, link: '#' },
    { title: 'Cây gia vị - thực phẩm', image: cayThucPham, link: '#' },
    { title: 'Cây để bàn', image: cayDeBan, link: '#' },
    { title: 'Cây phong thủy', image: cayPhongThuy, link: '#' },
    { title: 'Cây sân vườn', image: caySanVuon, link: '#' },
    { title: 'Cây làm sạch không khí', image: cayLamSach, link: '#' },
    // { title: 'Cây trước hiên', image: cayTruocHien, link: '#' },
]

export function ProductCollection() {
    const navigator = useNavigate();
    const collections = items.map((item) => (
        // <Carousel.Slide>
            <UnstyledButton key={item.title} className={classes.item} h={240}>
                <Image className={classes.image} src={item.image} h={200} onClick={() => navigator("/products")}></Image>
                <Text size="xs" mt={7}>
                    {item.title}
                </Text>
            </UnstyledButton>
        // </Carousel.Slide>
    ));
    return (
        <>
            <Card withBorder radius="md" className={classes.card}>
                <SimpleGrid cols={{ base: 3, xs: 4, xl: 8 }} mt="md">
                {/* <Carousel
                    withIndicators
                    height={200}
                    slideSize={{ base: '33.333333%', sm: '20%', md: '11.1111111%' }}
                    slideGap={{ base: 0, sm: 'md' }}
                    loop
                    align="start"
                > */}
                    {collections}
                    {/* ...other slides */}
                {/* </Carousel> */}
                </SimpleGrid>
            </Card>
        </>
    );
}