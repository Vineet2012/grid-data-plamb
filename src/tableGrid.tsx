import * as React from "react";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useDemoData } from "@mui/x-data-grid-generator";
import { styled, useTheme } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import SelectCmp from "./selectComponent";
import Button from "@mui/material/Button";
import IosShareIcon from "@mui/icons-material/IosShare";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import CardsCmp from "./cards";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  outline: "none",
  color:
    theme.palette.mode === "light"
      ? "rgba(0,0,0,.85)"
      : "rgba(255,255,255,0.85)",
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: theme.palette.mode === "light" ? "#fafafa" : "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader:focus, .css-18wzvqt-MuiDataGrid-root .MuiDataGrid-cell:focus":
    {
      outline: "none",
    },
  "& .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight)>.MuiDataGrid-cell": {
    outline: "none",
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "#303030"
    }`,
  },
  "& .MuiDataGrid-cell": {
    color:
      theme.palette.mode === "light"
        ? "rgba(0,0,0,.85)"
        : "rgba(255,255,255,0.65)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: 0,
  },
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      onChange={(event: React.ChangeEvent<unknown>, value: number) =>
        apiRef.current.setPage(value - 1)
      }
    />
  );
}

const PAGE_SIZE = 10;

export default function AntDesignGrid() {
  const theme = useTheme();
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: PAGE_SIZE,
    page: 0,
  });
  const [search, setSearch] = React.useState("");
  const [gridData, setGridData] = React.useState<Array<any>>([]);

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 50,
    maxColumns: 7,
  });

  React.useEffect(() => {
    setGridData(data.rows);
  }, [data]);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSearch(value);
  }

  function handleFilterData(data: Array<any>) {
    const res = data.filter((el) => {
      return (
        el.commodity.toLowerCase().includes(search.toLowerCase()) ||
        el.traderName.toLowerCase().includes(search.toLowerCase())
      );
    });
    return res;
  }

  return (
    <Box bgcolor={theme.palette.background.default}>
      <Box display="flex" width="100%">
        {/* Cards */}
        <CardsCmp label={"New Customers"} price={"2,856"} />
        <CardsCmp label={"Totoal Revenue"} price={"28.6K"} />
        <CardsCmp label={"New Transfer"} price={"16.6K"} />
        <CardsCmp label={"Total Profit"} price={"2,856"} />
      </Box>
      <Box margin={3}>
        <Box
          sx={{
            width: "100%",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Typography variant="h5" p={3}>
            Search Filters
          </Typography>
          <Box sx={{ display: "flex", width: "100%" }}>
            {/* Select Role */}
            <SelectCmp
              label={"Select Role"}
              value1={"Admin"}
              value2={"Author"}
              value3={"Editor"}
              value4={"Maintainer"}
            />
            {/* Select Plan */}
            <SelectCmp
              label={"Select Plan"}
              value1={"Basic"}
              value2={"Company"}
              value3={"Enterprises"}
              value4={"Team"}
            />
            {/* Select Status */}
            <SelectCmp
              label={"Select Status"}
              value1={"Pending"}
              value2={"Active"}
              value3={"Inactive"}
              value4={""}
            />
          </Box>
          <Divider />
          {/* Export Button */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Stack direction="row" spacing={2}>
              <Button
                style={{
                  margin: "18px 20px 10px 20px",
                }}
                startIcon={<IosShareIcon />}
              >
                Export
              </Button>
            </Stack>
            <Box>
              {/* Search bar */}
              <TextField
                margin="normal"
                id="filled-search"
                label="Search field..."
                type="search"
                onChange={handleSearch}
              />
              {/* Contained Button */}
              <Button
                style={{
                  margin: "18px 20px 10px 20px",
                }}
                variant="contained"
              >
                ADD USER
              </Button>
            </Box>
          </Box>
          <StyledDataGrid
            style={{ padding: "10px 20px 20px 20px" }}
            className="bg-white"
            checkboxSelection
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[PAGE_SIZE]}
            filterMode="server"
            slots={{
              pagination: CustomPagination,
            }}
            columns={data.columns}
            initialState={data.initialState}
            rows={handleFilterData(gridData)}
          />
        </Box>
      </Box>
    </Box>
  );
}
