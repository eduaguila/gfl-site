import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Budget } from "../components/dashboard/budget";
import { LatestOrders } from "../components/dashboard/latest-orders";
import { LatestProducts } from "../components/dashboard/latest-products";
import { Sales } from "../components/dashboard/sales";
import { TasksProgress } from "../components/dashboard/tasks-progress";
import { TotalCustomers } from "../components/dashboard/total-customers";
import { TotalProfit } from "../components/dashboard/total-profit";
import { TrafficByDevice } from "../components/dashboard/traffic-by-device";
import { DashboardLayout } from "../components/dashboard-layout";
// import { useRouter } from "next/router";
const subtext =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem ligula, egestas id enim vel, aliquet tincidunt lorem. Etiam sit amet vestibulum est. Aenean vel porttitor sem. Aliquam pulvinar leo et ipsum placerat, nec semper nunc euismod. Sed iaculis a massa sit amet sodales. Nullam quis dictum metus. Proin in risus sapien. Donec lobortis odio sodales, dictum diam id, sollicitudin sem. Etiam id dictum orci.";
// const router = useRouter();

// const handleClick = (e, path) => {
//   if (path === "/about") {
//     console.log("I clicked on the About Page");
//   }
//   if (path === "/posts") {
//     console.log("I clicked on the Posts Page");
//   }
// };
const Page = () => (
  <>
    <Head>
      <title>Government Futures Lab</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <LatestOrders title={"Overview Language"} subtext={subtext} />
          </Grid>
          <Grid item lg={6} md={12} xl={6} xs={12}>
            <LatestOrders title={"Floorplan w stations key"} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <Budget title={"Station 1"} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <Budget title={"Station 2"} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <Budget title={"Station 3"} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <Budget title={"Station 4"} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <Budget title={"Station 5"} />
          </Grid>
          <Grid item lg={4} sm={6} xl={4} xs={12}>
            <Budget title={"Station 6"} />
          </Grid>
          {/* <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          */}
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
