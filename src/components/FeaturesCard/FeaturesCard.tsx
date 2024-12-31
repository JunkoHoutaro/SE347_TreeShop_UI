import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    Button,
} from '@mantine/core';
import classes from './FeaturesCard.module.css';
import { IconPlant } from '@tabler/icons-react';
import { IconCar } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useHover } from '@mantine/hooks';

const mockdata = [
    {
        id: 1,
        title: 'Mua cây dễ dàng ngay tại nhà',
        description:
            'Khám phá hàng trăm loại cây và cây bụi mà bạn khó có thể tìm thấy ở các vườn ươm gần nhà. Tất cả đều có sẵn để bạn đặt mua trực tiếp từ nhà mình. Không cần phải ra ngoài, chỉ cần ngồi lại và lên kế hoạch cho khu vườn của bạn thôi!',
        icon: IconShoppingCart,
    },
    {
        id: 2,
        title: 'Giao hàng nhanh chóng',
        description:
            'Chúng tôi sẽ giao cây tận nơi một cách nhanh chóng! Bạn chỉ cần ở nhà và đợi đơn vị vận chuyển mang cây đến tận nơi. Với đơn hàng trong nội thành, chúng tôi có thể giao hỏa tốc trong ngày!',
        icon: IconCar,
    },
    {
        id: 3,
        title: 'Giúp cây phát triển khỏe mạnh',
        description:
            'Chúng tôi sẽ cung cấp tất cả những gì bạn cần để cây trồng của bạn phát triển thật tốt. Với kinh nghiệm lâu năm, chúng tôi sẽ giúp bạn chăm sóc cây xanh đúng cách để cây luôn khỏe mạnh và phát triển mạnh mẽ.',
        icon: IconPlant,
    },
];

export function FeaturesCards() {
    let navigator = useNavigate();
    const { hovered, ref } = useHover();
    const features = mockdata.map((feature) => (
        <Card key={feature.id} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color="#1E3B27"
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
            <Container mt={20} ref={ref}>
                <Button w={120} style={{ borderRadius: '20px', backgroundColor: hovered ? '#1E3B27' : '#1E3B27' }} onClick={() => navigator('/confirmation')}>Xem thêm</Button>
            </Container>
        </Card>
    ));

    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg" style={{ backgroundColor: '#1E3B27' }}>
                    Lựa chọn hàng đầu
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Cùng tìm hiểu về chúng tôi
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Xanh, đỏ, tím, vàng, lục, lam, chàm, tím, thế giới này muôn sắc muôn màu, nhưng tôi yêu màu xanh lá cây hơn cả, vì màu xanh lá cây là màu của sự yên bình, màu xanh lá cây là biểu tượng của sự thịnh vượng, màu xanh lá cây là sự nương tựa của cuộc sống và là sự đảm bảo cho sức khỏe. Màu xanh lá cây còn là tượng trưng cho hy vọng, tượng trưng cho sức sống.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}