import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Monument = () => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`images2/${name}.jpg`);
  }, [name]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card align="center" sx={{ bgcolor: "lavender" }}>
          <CardContent>
            <h1>{name}</h1>
            <img style={{ height: 300 }} src={path} alt={name} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setName("Charminar")}
          variant="contained"
          color="warning"
          fullWidth
        >
          Charminar
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setName("mysore-palace")}
          variant="contained"
          color="warning"
          fullWidth
        >
          mysore palace
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setName("Red-Fort-Delhi")}
          variant="contained"
          color="warning"
          fullWidth
        >
          red fort
        </Button>
      </Grid>
    </Grid>
  );
};
