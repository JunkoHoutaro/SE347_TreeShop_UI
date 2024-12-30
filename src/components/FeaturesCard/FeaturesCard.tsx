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
import { IconPigMoney } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useHover } from '@mantine/hooks';

const mockdata = [
    {
        id: 1,
        title: 'Quyết định mua cây',
        description:
            'Chọn từ hàng trăm loại cây và cây bụi không có sẵn tại vườn ươm địa phương của bạn - tất cả đều thoải mái trên chiếc ghế dài của bạn. Bỏ qua chuyến đi và lên kế hoạch cho cây trồng của bạn!',
        icon: IconPlant,
    },
    {
        id: 2,
        title: 'Tìm đến chúng tôi',
        description:
            'Chúng tôi vận chuyển điên cuồng nhanh chóng. Vì vậy, hãy ngồi lại, thư giãn, uống cocktail và chờ đợi cây trồng của bạn đến qua FedEx Ground. Hầu hết mọi thứ về điều này đều có thể được thực hiện ngay bây giờ.',
        icon: IconCar,
    },
    {
        id: 3,
        title: 'Phát triển lớn mạnh',
        description:
            'Chúng tôi làm mọi thứ ngoại trừ trồng cây (chúng tôi đã có những chú lùn của chúng tôi làm việc đó). Với nhiều thập kỷ kiến thức kết hợp, chúng tôi cung cấp cho bạn các nguồn lực để cây trồng của bạn phát triển mạnh!',
        icon: IconPigMoney,
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