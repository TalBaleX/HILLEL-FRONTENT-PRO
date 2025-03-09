import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Home() {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <Avatar sx={{ width: 128, height: 128, mx: "auto" }} />
            </Grid>
            <Grid item xs={12} sm={8} md={9}>
              <Typography variant="h4" component="h1" gutterBottom>
                TalBaleX
              </Typography>
              <Typography variant="h6" component="h2" gutterBottom>
                Frontend Developer
              </Typography>
              <Typography variant="body1" gutterBottom>
                I know only one thing, and that is I know nothing.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Experience
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Auto mechanic at Google"
                secondary="Description of my role and achievements. (1992 - 1994)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Lawyer at Saudi Aramco"
                secondary="Description of my role and achievements. (1994 - 2010)"
              />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Education
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Degree at Institution"
                secondary="Description of my studies and achievements. (2012 - 2014)"
              />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="h3" gutterBottom>
            Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Skill 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Skill 2" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
