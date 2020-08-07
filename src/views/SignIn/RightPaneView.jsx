import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { Grid, Typography } from "@material-ui/core";
import TextGeneratorHelper from "../../helpers/TextGeneratorHelper";

function RightPaneView() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    setQuote(TextGeneratorHelper.generatorRandomQuote());
  }, []);
  const classes = useStyles();
  return (
    <Grid className={classes.quoteContainer} item lg={5}>
      <div className={classes.quote}>
        <div className={classes.quoteInner}>
          <Typography className={classes.quoteText} variant="h1">
            {quote}
          </Typography>
        </div>
      </div>
    </Grid>
  );
}

RightPaneView.propTypes = {};

export default RightPaneView;
