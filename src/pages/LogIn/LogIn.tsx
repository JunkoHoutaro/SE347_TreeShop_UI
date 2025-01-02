import { Grid, GridCol, Container, Paper } from "@mantine/core";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import { AuthenticationTitle } from "../../components/AuthenticationTitle/AuthenticationTitle";

export const LogIn = () => {
  return (
    <Container size="lg" mt={50}>
      <Grid gutter="xl" justify="space-between" align="center">
        <Grid.Col
          span={{ base: 12, md: 6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Paper shadow="xs" p="xl" style={{ borderRadius: '12px', width: '100%' }}>
            <AuthenticationTitle />
          </Paper>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, md: 6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <Paper shadow="xs" p="xl" style={{ borderRadius: '12px', width: '100%' }}>
            <CarouselCard />
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default LogIn;
