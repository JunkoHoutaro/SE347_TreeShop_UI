import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import image from '../../assets/images/faq.png';
import classes from './FAQ.module.css';
const anq = [
    {
        key: '1',
        question: 'Cây có được giao tận nơi không?',
        answer: 'Có, chúng tôi cung cấp dịch vụ giao hàng tận nơi trong khu vực. Phí giao hàng sẽ được tính tùy theo khoảng cách và kích thước của cây.',
    },
    {
        key: '2',
        question: 'Tôi có thể đặt cây theo yêu cầu không?',
        answer: 'Chúng tôi nhận đặt cây theo yêu cầu đặc biệt, ví dụ như cây bonsai hoặc cây cảnh được cắt tỉa theo phong cách riêng. Vui lòng liên hệ trước để biết thêm chi tiết và thời gian hoàn thành.',
    },
    {
        key: '3',
        question: 'Cửa hàng có hỗ trợ chăm sóc cây định kỳ không?',
        answer: 'Chúng tôi có dịch vụ chăm sóc cây định kỳ, bao gồm việc tưới nước, bón phân, và kiểm tra sức khỏe của cây. Bạn có thể đăng ký dịch vụ này khi mua cây hoặc liên hệ trực tiếp với chúng tôi.',
    },
    {
        key: '4',
        question: 'Cửa hàng có giảm giá hay khuyến mãi không?',
        answer: 'Chúng tôi thường xuyên tổ chức các chương trình khuyến mãi và giảm giá vào các dịp lễ, tết. Bạn có thể theo dõi thông tin trên website hoặc fanpage của chúng tôi để không bỏ lỡ cơ hội giảm giá.',
    },
    {
        key: '5',
        question: 'Cửa hàng có nhận đổi trả cây không?',
        answer: 'Nếu cây bạn mua không phù hợp hoặc bị hư hại trong quá trình vận chuyển, chúng tôi sẽ hỗ trợ đổi trả trong vòng 7 ngày kể từ ngày nhận hàng. Điều kiện áp dụng là cây còn nguyên trạng và không bị hư hại do việc chăm sóc không đúng cách.',
    }
]

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