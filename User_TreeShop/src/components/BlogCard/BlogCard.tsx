import { Card, Text, Group, Title } from '@mantine/core';
import classes from './BlogCard.module.css';

export interface BlogCard {
    image: string;
    url: string;
    tite: string;
    content: string;
}
// const dataBlogCard: BlogCard[] = [
//     {
//         image: CamTuCau,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
//     {
//         image: MauDon,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
//     {
//         image: Tulip,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
//     {
//         image: CamTuCau,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
//     {
//         image: MauDon,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
//     {
//         image: Tulip,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
//     {
//         image: CamTuCau,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
//     {
//         image: MauDon,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
//     {
//         image: Tulip,
//         url: "#",
//         tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
//         content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
//     },
// ]



const ImageCard = ({ dataBlogCard }: { dataBlogCard: BlogCard }) => {


    return (
        <>
            <Card
                p="lg"
                style={{ margin: "15px 10px" }}
                shadow="lg"
                className={classes.card}
                radius="0"
                component="a"
                href=""
                target="_self"
                h={500}
            >
                <div
                    className={classes.image}
                    style={{
                        backgroundImage: `url(${dataBlogCard.image})`,
                    }}
                />
                <div className={classes.overlay} />

                <div className={classes.content}>
                    <Card m={"50px 30px"} h={350} radius={'0'} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <Title size={"h2"} fw={700} style={{ color: "white", textAlign: "center" }}>
                            {dataBlogCard.tite}
                        </Title>

                        <Group justify="space-between" gap="xs" mt={50}>
                            <Text size="sm" lineClamp={6} style={{ color: "white", lineHeight: "25px" }}>
                                {dataBlogCard.content}
                            </Text>
                        </Group>
                    </Card>
                </div>
            </Card>
        </>
    );
}
export default ImageCard;