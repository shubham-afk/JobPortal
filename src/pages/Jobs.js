import React from "react";
import { Typography, Button, Box, Chip, Paper } from "@mui/material";

const JobCard = ({ title, company, time, salary, type, tags, applicants }) => (
  <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }} elevation={2}>
    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
      <Box>
        <Typography variant="caption" color="text.secondary">
          {time}
        </Typography>
        <Typography variant="h6" fontWeight={600} mt={1}>
          {title}
        </Typography>
        <Typography variant="body2" fontWeight={500}>
          {company} - <span style={{ fontWeight: 600 }}>{salary}</span>
        </Typography>
        <Typography variant="body2" mt={1}>
          We are looking for a creative and detail-oriented individual to join
          our team.
        </Typography>
        <Box mt={2} display="flex" alignItems="center" gap={1}>
          <Button
            variant="text"
            color="primary"
            onClick={() => console.log("Applied")}
          >
            Apply Now
          </Button>
          <Typography variant="caption" color="text.secondary">
            {applicants} applicants
          </Typography>
        </Box>
        <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              onClick={() => console.log(tag)}
            />
          ))}
        </Box>
      </Box>
      <Chip
        label={type}
        color={
          type === "Full-Time"
            ? "success"
            : type === "Part-Time"
            ? "error"
            : "warning"
        }
        onClick={() => console.log(type)}
      />
    </Box>
  </Paper>
);

const JobBoard = () => {
  const skills = ["User Interface Design", "Adobe Xd", "UX"];

  return (
    <Box>
      <Box px={4} py={2}>
        <JobCard
          title="UI/UX Designer"
          company="Plug Inc. - Remote"
          time="1 minute ago"
          salary="$115,000"
          type="Full-Time"
          applicants="10"
          tags={["User Interface Design", "Adobe Xd", "Adobe Illustrator"]}
        />
        <JobCard
          title="Art Director"
          company="Sweey LLC - Remote"
          time="5 minutes ago"
          salary="$33,000"
          type="Part-Time"
          applicants="7"
          tags={["Adobe After Effects", "Art Director"]}
        />
        <JobCard
          title="Frontend Developer"
          company="TechNova - Hybrid"
          time="10 minutes ago"
          salary="$90,000"
          type="Full-Time"
          applicants="15"
          tags={["React", "JavaScript", "CSS", "HTML"]}
        />
        <JobCard
          title="Backend Engineer"
          company="Cloudify - Onsite"
          time="20 minutes ago"
          salary="$105,000"
          type="Full-Time"
          applicants="12"
          tags={["Node.js", "Express", "MongoDB", "API"]}
        />
        <JobCard
          title="Product Manager"
          company="InnovateX - Remote"
          time="30 minutes ago"
          salary="$120,000"
          type="Full-Time"
          applicants="8"
          tags={["Agile", "Scrum", "Leadership"]}
        />
        <JobCard
          title="QA Tester"
          company="SoftCheck - Remote"
          time="45 minutes ago"
          salary="$60,000"
          type="Part-Time"
          applicants="5"
          tags={["Testing", "Automation", "Selenium"]}
        />
        <JobCard
          title="Graphic Designer"
          company="DesignHub - Hybrid"
          time="1 hour ago"
          salary="$70,000"
          type="Contract"
          applicants="9"
          tags={["Photoshop", "Illustrator", "Creativity"]}
        />
      </Box>
    </Box>
  );
};

export default JobBoard;
