import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import image from '../../assets/images/faq.png';
import classes from './FAQ.module.css';
const anq = [
    {
        key: '1',
        question: 'Có chính sách đổi trả hoặc bảo hành không?',
        answer: 'Chắc chắn, chúng tôi có chính sách đổi trả trong vòng 30 ngày kể từ ngày mua. Nếu cây có vấn đề sức khỏe, chúng tôi sẽ hoàn lại hoặc đổi cây mới cho bạn.',
    },
    {
        key: '2',
        question: 'Bên bạn có cung cấp phát tài khúc không?',
        answer: 'Chào bạn, ngoài mặt hàng may mắn tài lộc và cây cảnh,… bên mình còn cung cấp sỉ phát tài khúc, phát tài gốc, dụng cụ làm vườn, và rất nhiều loại chậu sứ, chậu nhựa, chậu thủy tinh. Ngoài ra còn có các sản phẩm khác như phân bón, đất trồng,..',
    },
    {
        key: '3',
        question: 'Giao hàng miễn phí chứ ạ?',
        answer: 'Giao hàng miễn phí cho khách hàng nội thành TP. HCM. Đối với các đơn hàng trên 1 triệu. Dưới 1 triệu thì tùy vào giá trị đơn hàng và tùy vào khu vực khác nhau mà phụ phí vận chuyển khác nhau. Đối với khách tỉnh, công ty hỗ trợ giao hàng miễn phí ra nhà xe ( khu vực nội thành TP HCM)',
    },
    {
        key: '4',
        question: 'Mua nhiều có được chiết khấu hay giảm giá gì thêm không?',
        answer: 'Chào bạn, Chương trình khuyến mãi tại Sài Gòn Hoa sẽ diễn ra thường xuyên. Trong thời gian có chương trình khuyến mãi đặc biệt thì sẽ áp dụng theo chính sách của chương trình đó. Bạn có thể theo dõi các chương trình khuyến mãi tại đây. Xin cảm ơn !',
    },
    {
        key: '5',
        question: 'Có nên Tưới Cây Trời Nắng hay không, tưới cây như thế nào là tốt nhất',
        answer: 'Câu trả lời là có bởi trời càng nắng thì sự bốc hơi nước sẽ càng diễn ra nhanh hơn, cây sẽ thoát hơi nước mạnh hơn như vậy độ ẩm đất cần được duy trì một cách thường xuyên. Dù vậy cũng nên cẩn thận khi tưới cây mùa nắng bởi nhiệt độ môi trường có thể gây ra những ảnh hưởng bất lợi cho cây.',
    }
]
// const placeholder =
//     'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function FaqWithImage() {
    return (
        <div className={classes.wrapper}>
            <Container size="lg" mt={100}>
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <Image src={image} alt="Frequently Asked Questions" />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 7 }}>
                        <Title order={2} ta="left" className={classes.title}>
                            Các câu hỏi thường gặp
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated" mt={50}>
                            {
                                anq.map((item) => (
                                    <Accordion.Item className={classes.item} value={item.key}>
                                        <Accordion.Control>{item.question}</Accordion.Control>
                                        <Accordion.Panel>{item.answer}</Accordion.Panel>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>
    );
}