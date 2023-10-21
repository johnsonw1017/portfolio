import { Container, Box, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import pallete from "../pallete";
import MailIcon from "@mui/icons-material/Mail";

function Experiences() {
  return (
    <>
      <div style={{ backgroundColor: pallete.lapis }}>
        <Container maxWidth="md">
          <Box className="box-content">
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "30px",
                marginTop: 2,
                marginBottom: 2,
                color: pallete.white,
              }}
            >
              Experiences
            </Typography>
          </Box>
          <Box className="box-content">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: pallete.whitegray, color: "#000" }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${pallete.whitegray}`,
                }}
                date="August 2023 - Present"
                iconStyle={{ background: pallete.caroline_blue, color: "#fff" }}
                icon={<MailIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Software Developer Intern
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Interlate
                </h4>
                <h5>Brisbane, QLD</h5>
                <p>
                  I joined Interlate as a frontend developer intern, working
                  primary in React, JavaScript and Python. The main project I've
                  been involved in is CarbonNEM, a interactive dashboard that
                  displays carbon emissions data from the Australian Energy
                  Market.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: pallete.whitegray, color: "#000" }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${pallete.whitegray}`,
                }}
                date="October 2022 - August 2023"
                iconStyle={{ background: pallete.caroline_blue, color: "#fff" }}
                icon={<MailIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Fullstacks Bootcamper
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Coder Academy
                </h4>
                <h5>Remote / Online</h5>
                <p>
                  I began my journey into software development by enrolling in
                  Coder Academy, where I learned all the latest technologies of
                  fullstacks development. I build projects using JavaScript,
                  React, Node, Express, MongoDB, Python, Flask, PostgreSQL, and
                  more.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Experiences;
