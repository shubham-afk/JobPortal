import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

const CreateJob = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    employmentType: "",
    location: "",
    openings: "",
    minSalary: "",
    maxSalary: "",
    startDate: "",
    endDate: "",
    description: "",
    contactPerson: "",
    branch: "",
    company: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a2540 0%, #274472 100%)", // Deep blue gradient
        display: "flex",
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Create Job
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Job Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  sx={{ width: 150 }}
                  label="Job Category"
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                >
                  <MenuItem value="Software">Software</MenuItem>
                  <MenuItem value="Marketing">Marketing</MenuItem>
                  <MenuItem value="Design">Design</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  sx={{ width: 180 }}
                  label="Employment Type"
                  name="employmentType"
                  value={form.employmentType}
                  onChange={handleChange}
                >
                  <MenuItem value="Full-time">Full-time</MenuItem>
                  <MenuItem value="Part-time">Part-time</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Number of Openings"
                  name="openings"
                  type="number"
                  value={form.openings}
                  onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Start Date"
                  type="date"
                  name="startDate"
                  InputLabelProps={{ shrink: true }}
                  value={form.startDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="End Date"
                  type="date"
                  name="endDate"
                  InputLabelProps={{ shrink: true }}
                  value={form.endDate}
                  onChange={handleChange}
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Min Salary"
                  name="minSalary"
                  type="number"
                  value={form.minSalary}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Max Salary"
                  name="maxSalary"
                  type="number"
                  value={form.maxSalary}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Job Description"
                  name="description"
                  multiline
                  rows={4}
                  value={form.description}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Employer Details
            </Typography>
            <TextField
              fullWidth
              label="Company"
              name="company"
              value={form.company}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Branch"
              name="branch"
              value={form.branch}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Contact Person"
              name="contactPerson"
              value={form.contactPerson}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                sx={{ mr: 2 }}
                onClick={() => console.log("Draft Saved")}
              >
                Save as Draft
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ backgroundColor: "#FF5722" }}
              >
                Publish Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CreateJob;
