import React from "react";

const SvgrMock = React.forwardRef(({ title, ...props }, ref) => (
  <img ref={ref} alt={title} {...props} />
));

export default SvgrMock;
