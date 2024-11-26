import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem, GridCol, Grid } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
// import image from './image.svg';
import classes from './ConfirmModule.module.css';
import promise from "../../assets/images/promise.png";
import { useNavigate } from 'react-router-dom';
import { useHover } from '@mantine/hooks';

export function ConfirmModule() {
    let navigator = useNavigate();
    const { hovered, ref } = useHover();
    return (
        <Container size="xl">
            <div className={classes.inner}>
                <Grid styles={{ inner: { margin: 0, width: '100%' } }}>
                    <GridCol span={{ base: 12, sm: 6 }}>
                        <div className={classes.content}>
                            <Title size={"h2"}>
                                Chúng Tôi Hứa Hẹn Một Trải Nghiệm Tốt Nhất Cho Bạn!
                            </Title>
                            <Text c="dimmed" mt="md" style={{ fontSize: "14px" }}>
                                Chúng tôi hiểu rằng cây cảnh không chỉ là một phần của không gian sống, mà còn là một phần của cuộc sống của bạn. Vì vậy, chúng tôi cam kết mang đến cho bạn không chỉ những cây cảnh đẹp mắt, mà còn là trải nghiệm mua sắm đáng nhớ và chăm sóc khách hàng tận tâm.
                            </Text>

                            <List
                                mt={30}
                                spacing="sm"
                                size="sm"
                                style={{ fontSize: "16px" }}
                                icon={
                                    <ThemeIcon size={20} radius="xl" style={{ backgroundColor: "#1E3B27" }}>
                                        <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>
                                    <b>Chất Lượng Đỉnh Cao</b> – Mỗi cây cảnh tại đây đều được chọn lựa cẩn thận, đảm bảo rằng bạn nhận được sản phẩm chất lượng nhất.
                                </List.Item>
                                <List.Item>
                                    <b>Dịch Vụ Chăm Sóc Khách Hàng Tận Tâm</b> – Đội ngũ của chúng tôi luôn sẵn lòng hỗ trợ bạn với mọi câu hỏi và yêu cầu.
                                </List.Item>
                                <List.Item>
                                    <b>Bảo Hành Đầy Đủ</b> – Chúng tôi tự tin với sản phẩm của mình và cung cấp chính sách bảo hành để bạn hoàn toàn yên tâm.
                                </List.Item>
                            </List>

                            <Group mt={30} ref={ref}>
                                <Button radius="xl" size="md" className={classes.control} style={{ backgroundColor: hovered ? '#DF4D3F' : '#1E3B27' }}
                                    onClick={() => navigator('/confirmation')}>
                                    Xem thêm
                                </Button>
                                {/* <Button variant="default" radius="xl" size="md" className={classes.control}>
                                    Source code
                                </Button> */}
                            </Group>
                        </div>
                    </GridCol>
                    <GridCol span={{ base: 12, sm: 1 }}>

                    </GridCol>
                    <GridCol span={{ base: 12, sm: 5 }}
                        visibleFrom="sm"
                    >
                        <Image src={promise} className={classes.image} />
                    </GridCol>
                </Grid>
            </div>
        </Container>
    );
}