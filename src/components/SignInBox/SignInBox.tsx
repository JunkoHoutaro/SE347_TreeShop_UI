import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Notification,
} from '@mantine/core';
import classes from './SignInBox.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function SignInBox() {
  let navigate = useNavigate();
  
  // Trạng thái nhập liệu
  const [fullName, setFullName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [roleName] = useState('Buyer');  
  const [agreed, setAgreed] = useState(false);
  
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    // Kiểm tra thông tin người dùng nhập
    if (!fullName || !username || !email || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    if (!agreed) {
      setError("Bạn phải đồng ý với điều khoản sử dụng.");
      return;
    }

    // Chuẩn bị dữ liệu để gửi đến API
    const values = {
      name: fullName,
      username,
      email,
      password,
      roleName, // 'Buyer' sẽ được gửi nếu không thay đổi
    };

    try {
      const response = await fetch("http://localhost:302/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      // Kiểm tra phản hồi từ API
      if (response.ok) {
        console.log('User registered successfully:', data);
        navigate('/login');
      } else {
        setError(data.message || "Đã có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error) {
      setError("Không thể kết nối với máy chủ. Vui lòng thử lại.");
    }
  };

  return (
    <Container size={500} mt={40}>
      <Title ta="center" className={classes.title}>
        Chào mừng bạn mới!
      </Title>
      <Text c={'gray'} ml={60}>
        Thiết lập tài khoản của bạn ngay nào!!!
      </Text>

      <Paper withBorder shadow="md" p={50} mt={30} radius="md">
        {/* Hiển thị thông báo lỗi nếu có */}
        {error && (
          <Notification color="red" onClose={() => setError(null)}>
            {error}
          </Notification>
        )}
        
        <TextInput
          label="Họ và tên"
          placeholder="Nhập họ tên của bạn"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        
        <TextInput
          label="Nhập tên hiển thi"
          placeholder="hao"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <TextInput
          label="Email"
          placeholder="Nhập email của bạn"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <PasswordInput
          label="Mật khẩu"
          placeholder="Ít nhất 8 ký tự"
          required
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <PasswordInput
          label="Nhập lại mật khẩu"
          placeholder="Ít nhất 8 ký tự"
          required
          mt="md"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        {/* Trường "Vai trò" đã bị loại bỏ khỏi UI */}

        <Group justify="space-between" mt="lg">
          <Checkbox
            label="Tôi đồng ý với điều khoản sử dụng"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
        </Group>

        <Button fullWidth mt="xl" onClick={handleSignUp}>
          Đăng ký
        </Button>

        <Text c="dimmed" size="sm" ta="right" mt={20}>
          Đã là thành viên?{' '}
          <Anchor size="sm" component="button" onClick={() => navigate('/login')}>
            Đăng nhập
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
