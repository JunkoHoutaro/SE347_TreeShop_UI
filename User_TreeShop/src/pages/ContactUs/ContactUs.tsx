import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FaqWithImage } from '../../components/FAQ/FAQ';
import { useLocation } from 'react-router-dom';
import { sendMail } from '../../api/mailApi';
// import { isDisabled } from '@testing-library/user-event/dist/utils';

export function ContactUs() {
    const location = useLocation();
    const item = location.state?.data || {};
    console.log(item.id);
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            location: '',
            nameProduct: '',
            numberProduct: 0,
            subject: '',
            message: '',
        },
        validate: {
            name: (value) => value.trim().length < 3,
            email: (value) => !/^\S+@\S+$/.test(value),
            subject: (value) => value.trim().length === 0,
            // nameProduct: (value) => value.trim().length === 0,
            numberProduct: (value) => isNaN(value),
            location: (value) => value.trim().length === 0,
            phone: (value) => {
               return value.trim().length < 10 || !/^\d+$/.test(value)
            }
        },
    });

    return (
        <>

            <Container>
                <form onSubmit={form.onSubmit(() => {
                    sendMail({
                        email: form.getInputProps("email").value as unknown as string,
                        location: form.getInputProps("location").value as unknown as string,
                        message: form.getInputProps("message").value as unknown as string,
                        name: form.getInputProps("name").value as unknown as string,
                        nameProduct: form.getInputProps("nameProduct").value as unknown as string,
                        numberProduct: form.getInputProps("numberProduct").value as unknown as number,
                        phone: form.getInputProps("phone").value as unknown as string,
                        subject: form.getInputProps("subject").value as unknown as string,
                    });
                 })}>
                    <Title
                        order={2}
                        size="h1"
                        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                        fw={700}
                        ta="center"
                    >
                        Liên hệ ngay
                    </Title>

                    <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                        <TextInput
                            label="Tên"
                            placeholder="Nguyễn Thị Ánh"
                            name="name"
                            variant="filled"
                            required
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            label="Email"
                            placeholder="nguyenanh@gmail.com"
                            name="email"
                            variant="filled"
                            required
                            {...form.getInputProps('email')}
                        />
                    </SimpleGrid>
                    <TextInput
                        label="Số điện thoại"
                        placeholder="0395216485"
                        name="phone"
                        variant="filled"
                        required
                        {...form.getInputProps('phone')}
                    />
                    <TextInput
                        label="Địa chỉ"
                        placeholder="20A, xã Tân Khánh, huyện Vụ Bản, tỉnh Nam Định"
                        name="location"
                        variant="filled"
                        required
                        {...form.getInputProps('location')}
                    />
                    <TextInput
                        label="Tiêu đề"
                        placeholder="Nội dung chính - Đặt mua sản phẩm"
                        mt="md"
                        name="subject"
                        variant="filled"
                        required
                        {...form.getInputProps('subject')}
                    />
                    <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                        <TextInput
                            label="Tên sản phẩm"
                            value={item.name}
                            name="nameProduct"
                            variant="filled"
                        >
                        </TextInput>
                        <TextInput
                            label="Số lượng"
                            placeholder="5"
                            name="numberProduct"
                            variant="filled"
                            {...form.getInputProps('numberProduct')}
                        />
                    </SimpleGrid>
                    <Textarea
                        mt="md"
                        label="Nội dung"
                        placeholder="Lý do liên hệ"
                        maxRows={10}
                        minRows={5}
                        autosize
                        name="message"
                        variant="filled"
                        {...form.getInputProps('message')}
                    />

                    <Group justify="center" mt="xl">
                        <Button type="submit" size="md" w={150} radius={20} style={{ backgroundColor: "#1E3B27" } }>
                            Liên hệ
                        </Button>
                    </Group>
                </form>

            </Container>
            <Container size={'xl'}>
                <FaqWithImage />
            </Container>
        </>
    );
}