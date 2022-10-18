import Head from "next/head";
// import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../__mocks__/products";
import { ProductListToolbar } from "../components/product/product-list-toolbar";
import { ProductCard } from "../components/product/product-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { Sales } from "../components/dashboard/sales";

const Page = () => (
  <>
    <Head>
      <title>Futures: Station 1</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Typography sx={{ m: 1 }} variant="h5">
          Station 01 - Page Title
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <Typography sx={{ m: 1 }} variant="p">
              Signage language goes here...into paragraph copy copy copy Signage language goes
              here...into paragraph copy copy copy Signage language goes here...into paragraph copy
              copy copy
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            {/* <LatestOrders title={"IMAGE GOES HERE"} /> */}
            <Box
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 300, lg: 1000 },
                maxWidth: { xs: 350, md: 500, lg: 1000 },
              }}
              alt="Station Image"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            />
          </Grid>{" "}
        </Grid>
        <Typography sx={{ m: 1 }} variant="h5">
          Relevant Links
        </Typography>
        {/* <Sales /> */}
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
