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
                date="2011 - present"
                iconStyle={{ background: pallete.caroline_blue, color: "#fff" }}
                icon={<MailIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: pallete.whitegray, color: "#000" }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${pallete.whitegray}`,
                }}
                date="2010 - 2011"
                iconStyle={{ background: pallete.caroline_blue, color: "#fff" }}
                icon={<MailIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  Art Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  San Francisco, CA
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO,
                  Online Marketing
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
