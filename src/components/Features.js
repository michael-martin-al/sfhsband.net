import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

const FeatureGrid = ({ gridItems }) => (
  <Grid container spacing={4}>
    {gridItems.map((item) => (
      <Grid item key={item.text} xs={12} sm={6}>
        <Box padding={4}>
          <center>
            <PreviewCompatibleImage imageInfo={item} />
          </center>
          <p>{item.text}</p>
        </Box>
      </Grid>
    ))}
  </Grid>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
