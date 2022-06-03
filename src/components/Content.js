import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export const HTMLContent = ({ content, className }) => (
  <Box sx={{ img: { maxWidth: "100%" } }} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content = ({ content }) => (
  <Box>{content}</Box>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
