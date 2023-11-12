import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Fruit = () => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(`images/${name}.jpg`);
  }, [name]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ bgcolor: "salmon", color: "white" }}>
          <CardContent>
            <h1>{name}</h1>
            <img style={{ height: 150 }} src={path} alt={name} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setName("Orange")}
          variant="contained"
          color="success"
          fullWidth
        >
          Orange
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setName("Strawberry")}
          variant="contained"
          color="success"
          fullWidth
        >
          Strawberry
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button
          onClick={() => setName("Per")}
          variant="contained"
          color="success"
          fullWidth
        >
          Per
        </Button>
      </Grid>
    </Grid>
  );
};
