import { Carousel } from '@mantine/carousel';
import { Paper, Text, Title, Button, Center } from '@mantine/core';
import classes from './Banner.module.css';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
export interface ICardProps {
    id: number;
    image: string;
    title: string;
    category: string;
}

const Banner = (arr: Array<ICardProps>) => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    // const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    var data = [];
    for (var key in arr) {
        data.push(arr[key]);
    }
    return (
        <Carousel
            mx="auto"
            my="md"
            slideGap="md"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            mt={10}
            draggable={false}
            withIndicators
        >
            {
                data.map((item) => (
                    <Carousel.Slide key={item.id} className={classes.carousel}>
                        <Center className={classes.center}>
                            <Paper
                                shadow="md"
                                p="xl"
                                radius="md"
                                style={{ backgroundImage: `url(${item.image})`, width: '-webkit-fill-available', display: 'flex', justifyItems: 'center' }}
                                className={classes.card}
                            >
                                <div>
                                    <Text className={classes.category} size="xs" c={'white'}>
                                        {item.category}
                                    </Text>
                                    <Title order={3} className={classes.title}>
                                        {item.title}
                                    </Title>
                                </div>
                                <div  className={classes.Button}>
                                    <Button variant="white" color="dark" mt={150}>
                                        Xem thêm
                                    </Button>
                                </div>
                            </Paper>
                        </Center>
                    </Carousel.Slide>
                ))
            }
        </Carousel>
    );
}
export default Banner;