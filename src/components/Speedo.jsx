import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Speedo = () => {
  const [curr, setCurr] = useState(0);
  const [clr, setClr] = useState("");

  useEffect(() => {
    if (curr > 0 && curr <= 30) {
      setClr("orange");
    } else if (curr > 30 && curr <= 50) {
      setClr("green");
    } else {
      setClr("salmon");
    }
  }, [curr]);

  return (
    <Grid align="center" container spacing={2}>
      <Grid item xs={12}>
        <h1>Speedo</h1>
      </Grid>
      <Grid item xs={3}>
        <Button
          onClick={() => curr > 0 && setCurr(curr - 5)}
          sx={{ height: 110 }}
          fullWidth
          variant="contained"
          color="error"
        >
          De accelarate
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ bgcolor: clr }}>
          <CardContent>
            <h2>{curr}</h2>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Button
          onClick={() => curr < 100 && setCurr(curr + 5)}
          sx={{ height: 110 }}
          fullWidth
          variant="contained"
          color="success"
        >
          Accelarate
        </Button>
      </Grid>
    </Grid>
  );
};
