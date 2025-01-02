import { useState } from "react";
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
} from "@mantine/core";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik, FormikErrors } from "formik";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { accountActions } from "../../redux/slices/accountSlices";

interface FormValues {
  username: string;
  password: string;
}

const validationSchema = Yup.object({
  username: Yup.string().required("Vui lòng nhập tên tài khoản!"),
  password: Yup.string().required("Vui lòng nhập mật khẩu!"),
});

export function AuthenticationTitle() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      fetch("http://localhost:302/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((resJson) => {
          if (resJson.success) {
            toast.success("Đăng nhập thành công!");
            dispatch(accountActions.login(resJson.account));
            navigate("/");
          } else {
            toast.error("Đăng nhập không thành công!");
          }
        })
        .catch(() => {
          toast.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        })
        .finally(() => setLoading(false));
    },
  });

  return (
    <Container size={420} my={40} mt={90}>
      <Title style={{ textAlign: 'center' }}  mt={20}>
        Chào mừng bạn trở lại!
      </Title>
      <Text color="dimmed" size="sm" style={{ textAlign: 'center' }}  mt={5}>
        Đăng nhập tài khoản của bạn ngay nào!!!
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            label="Tài khoản"
            placeholder="Tên tài khoản"
            required
            {...formik.getFieldProps("username")}
            error={formik.touched.username && formik.errors.username}
          />
          <PasswordInput
            label="Mật khẩu"
            placeholder="Mật khẩu của bạn"
            required
            mt="md"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Ghi nhớ" />
            <Anchor size="sm">
              Quên mật khẩu?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit" loading={loading}>
            Đăng nhập
          </Button>
        </form>
        <Text style={{ textAlign: 'center' }}  size="sm" color="dimmed" mt={30}>
          Bạn chưa có tài khoản?{' '}
          <Anchor size="sm" component={Link} to="/signin">
            Đăng ký ngay
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
