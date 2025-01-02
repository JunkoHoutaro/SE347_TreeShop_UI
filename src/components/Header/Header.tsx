import Logo from '../../assets/images/logo.png';
import classes from './Header.module.css';
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Group, Text, ActionIcon, Divider, Autocomplete } from '@mantine/core';
import { IconSearch, IconHeart, IconShoppingCart, IconUser, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconBrandTiktok, IconBrandPinterest } from '@tabler/icons-react';

const Header = () => {
  return (
    <Container
      size=""
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2px 0',
      }}
    >
      {/* Social Media và Account Section */}
      <Group  justify="space-between" w="100%" style={{ paddingLeft: 0 }}>
        {/* Social Media Icons */}
        <Group gap="xs" bg="#1E3B27" p="xs" style={{ borderRadius: '0 25px 25px 0' }}>
          <ActionIcon size="lg" radius="xl" variant="transparent" color="white">
            <IconBrandFacebook size={20} />
          </ActionIcon>
          <ActionIcon size="lg" radius="xl" variant="transparent" color="white">
            <IconBrandInstagram size={20} />
          </ActionIcon>
          <ActionIcon size="lg" radius="xl" variant="transparent" color="white">
            <IconBrandYoutube size={20} />
          </ActionIcon>
        </Group>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Group style={{ flexDirection: 'column' }} align="center" gap={4}>
            <img
              src={Logo}  
              alt="Logo"
              style={{ width: '50px', height: '50px' }}
            />
            {/* <Text fw="bold" size="lg">THE GREENERY</Text> */}
          </Group>
        </Link>

        {/* User Actions */}
        <Group gap="xs" bg="#1E3B27" p="xs" style={{ borderRadius: '25px 0 0 25px' }}>
          {/* Yêu thích */}
          <div className={classes.iconWithLabel}>
            <ActionIcon size="lg" radius="xl" variant="transparent" color="white">
              <IconHeart size={20} />
            </ActionIcon>
            {/* <Text size="sm" className={classes.iconLabel}>Yêu thích</Text> */}
          </div>

          <Divider orientation="vertical" color="gray" />

          {/* Giỏ hàng */}
          <div className={classes.iconWithLabel}>
            <ActionIcon size="lg" radius="xl" variant="transparent" color="white">
              <IconShoppingCart size={20} />
            </ActionIcon>
            {/* <Text size="sm" className={classes.iconLabel}>Giỏ hàng</Text> */}
          </div>

          <Divider orientation="vertical" color="gray" />

          {/* Tài khoản */}
          <div className={classes.iconWithLabel}>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ActionIcon size="lg" radius="xl" variant="transparent" color="white">
              <IconUser size={20} />
            </ActionIcon>
            {/* <Text size="sm" className={classes.iconLabel}>Tài khoản</Text> */}
          </div>
        </Group>
      </Group>

      {/* Search Bar */}
      <Autocomplete
        placeholder="Nhập sản phẩm tìm kiếm"
        size="sm"
        radius="xl"
        rightSection={<IconSearch />}
        style={{ margin: '8px 0', maxWidth: '400px', width: '100%' }}
        data={[]}
      />

      {/* Navigation Menu */}
      <Group gap={30} style={{ margin: '8px' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Text size="md" fw={700} style={{ cursor: 'pointer', color: 'black' }}>Trang chủ</Text>
        </Link>
        <Link to="/products" style={{ textDecoration: 'none' }}>
          <Text size="md" fw={500} style={{ cursor: 'pointer', color: 'gray' }}>Sản phẩm</Text>
        </Link>
        <Link to="/aboutUs" style={{ textDecoration: 'none' }}>
          <Text size="md" fw={500} style={{ cursor: 'pointer', color: 'gray' }}>Về chúng tôi</Text>
        </Link>
        <Link to="/confirmation" style={{ textDecoration: 'none' }}>
          <Text size="md" fw={500} style={{ cursor: 'pointer', color: 'gray' }}>Cam kết</Text>
        </Link>
        <Link to="/contactUs" style={{ textDecoration: 'none' }}>
          <Text size="md" fw={500} style={{ cursor: 'pointer', color: 'gray' }}>Liên hệ</Text>
        </Link>
      </Group>
    </Container>
  );
};

export default Header;
