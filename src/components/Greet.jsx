import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Greet = () => {
  const [greet, setGreet] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg(`Great ${greet}!!!`);
  }, [greet]);
  return (
            <Grid container spacing={2} align="center">
          <Grid item xs={12}>
            <Card sx={{ height: "75vh", bgcolor: "lightseagreen" }}>
              <CardContent>
                <h1>{msg}</h1>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => setGreet("Good Morning")}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Morning
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => setGreet("Good Afternoon")}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Afternoon
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => setGreet("Good Evening")}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Evening
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => setGreet("Good Night")}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Night
            </Button>
          </Grid>
        </Grid>
      
  );
};
