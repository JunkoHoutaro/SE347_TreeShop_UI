import { Container, Pagination, SimpleGrid, Title } from "@mantine/core";
// import classes from "./Blogs.module.css";
import ImageCard, { BlogCard } from "../../components/BlogCard/BlogCard";
import CamTuCau from '../../assets/products/hoa-cam-tu-cau.jpg';
import MauDon from '../../assets/products/hoa-mau-don.jpg';
import Tulip from '../../assets/products/hoa-tulip.jpg';
import { useState } from "react";

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
// function setIndexArray(start: number, end: number,) {
//     if (end) {
//         return dataBlogCard.slice(start, end);

//     }
//     else {
//         return dataBlogCard.slice();
//     }
// }
export function chunk<T>(array: T[], size: number): T[][] {
    if (!array.length) {
        return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
}
const data = chunk(dataBlogCard, 6);
const Blogs = () => {
    const [activePage, setPage] = useState(1);
    const items = data[activePage - 1].map((item) => (
        <ImageCard dataBlogCard={item} />
    ))

    return (
        <>
            <Container pb={30} size={'xl'}>
                <Container style={{ display: 'flex', justifyContent: 'center' }} mt={80}>
                    <Title size={"h1"}>Bài viết hướng dẫn</Title>
                </Container>
                <Container size={"xl"} display={'flex'} style={{ justifyContent: 'center' }}>
                    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} mt="xl">
                        {items}
                    </SimpleGrid>
                </Container>
                <Container display={'flex'} style={{ justifyContent: 'center' }}>
                    <Pagination color="#1E3B27" total={data.length} value={activePage} onChange={setPage} mt="sm" />
                </Container>
            </Container>
        </>
    )
};
export default Blogs;