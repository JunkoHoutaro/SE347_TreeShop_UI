import { Container, Pagination, SimpleGrid, Title } from "@mantine/core";
// import classes from "./Blogs.module.css";
import ImageCard, { BlogCard } from "../../components/BlogCard/BlogCard";
import CamTuCau from '../../assets/products/hoa-cam-tu-cau.jpg';
import MauDon from '../../assets/products/hoa-mau-don.jpg';
import Tulip from '../../assets/products/hoa-tulip.jpg';
import Bonsai from '../../assets/products/cay-bonsai.jpg';
import HoaNhai from '../../assets/products/hoa-nhai.jpg';
import TuongVi from '../../assets/products/hoa-tuong-vi.jpg';
import { useState } from "react";

const dataBlogCard: BlogCard[] = [
    {
        image: HoaNhai,
        url: "#",
        tite: "Lợi ích của cây xanh trong không gian sống",
        content: "Cây xanh không chỉ là một phần trang trí đẹp mắt trong ngôi nhà, mà còn đóng vai trò quan trọng trong việc cải thiện chất lượng không khí và tạo ra không gian thư giãn. Hãy cùng khám phá những lợi ích tuyệt vời mà cây xanh mang lại cho ngôi nhà và tâm trạng của bạn trong bài viết dưới đây.",
    },
    {
        image: MauDon,
        url: "#",
        tite: "Top 10 cây xanh phù hợp cho không gian nhỏ",
        content: "Không gian văn phòng nhỏ đôi khi khiến chúng ta cảm thấy bí bách và thiếu sức sống. Một chậu cây xanh có thể mang lại sự tươi mới và cải thiện tinh thần làm việc. Trong bài viết này, chúng tôi sẽ giới thiệu top 10 loại cây phù hợp cho không gian văn phòng nhỏ, giúp bạn tạo ra một môi trường làm việc dễ chịu và hiệu quả hơn.",
    },
    {
        image: CamTuCau,
        url: "#",
        tite: "Cách trồng hoa Cẩm Tú Cầu xứ lạnh",
        content: "Cẩm tú cầu là loại cây cảnh phổ biến với nhiều loại và màu sắc khác nhau. Mặc dù cẩm tú cầu thường mọc ở các khu vực ấm áp, nhưng có một số loại cẩm tú cầu có thể được trồng ở vùng xứ lạnh nếu bạn chú ý đến một số điều quan trọng. Dưới đây là hướng dẫn cơ bản để trồng cẩm tú cầu ở khu vực có thời tiết lạnh",
    },
    {
        image: Bonsai,
        url: "#",
        tite: "Chăm sóc cây bonsai: Nghệ thuật và sự kiên nhẫn",
        content: "Cây bonsai là một nghệ thuật độc đáo kết hợp giữa thiên nhiên và sáng tạo của con người. Việc chăm sóc bonsai không chỉ đòi hỏi kỹ thuật mà còn yêu cầu sự kiên nhẫn và tỉ mỉ. Trong bài viết này, chúng tôi sẽ chia sẻ với bạn những bước cơ bản và mẹo chăm sóc bonsai để cây luôn giữ được hình dáng hoàn hảo.",
    },
    {
        image: Tulip,
        url: "#",
        tite: "Lựa chọn chậu cây: Các lưu ý để cây phát triển tốt",
        content: "Chậu cây không chỉ là vật chứa đựng cây mà còn ảnh hưởng đến sự phát triển của cây. Việc chọn chậu phù hợp với kích thước, loại cây và điều kiện sống là rất quan trọng. Hãy cùng chúng tôi khám phá các yếu tố cần lưu ý khi lựa chọn chậu cây cho từng loại cây trong bài viết dưới đây.",
    },
    {
        image: TuongVi,
        url: "#",
        tite: "Top 5 loại cây dễ trồng cho người mới bắt đầu",
        content: "Bạn yêu thích cây cảnh nhưng lại không tự tin vào khả năng chăm sóc? Đừng lo, những loại cây dễ trồng dưới đây sẽ là lựa chọn lý tưởng cho những người mới bắt đầu. Cùng khám phá danh sách cây xanh dễ chăm sóc nhưng vẫn mang lại không gian xanh mát cho ngôi nhà của bạn!",
    },
    {
        image: CamTuCau,
        url: "#",
        tite: "Cách lựa chọn cây xanh phù hợp cho không gian ngoài trời",
        content: "Không gian ngoài trời là nơi lý tưởng để trồng những loại cây xanh mang lại vẻ đẹp tự nhiên và không khí trong lành. Tuy nhiên, việc chọn lựa cây phù hợp với điều kiện khí hậu và diện tích không gian là rất quan trọng. Bài viết này sẽ giúp bạn biết cách lựa chọn cây ngoài trời phù hợp nhất cho khu vườn hoặc ban công của mình.",
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