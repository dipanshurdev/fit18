import { Box, Typography } from "@mui/material";
import React from "react";
import BodyPart from "./BodyPart";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { VisibilityContext, ScrollMenu } from "react-horizontal-scrolling-menu";
// import RightArrowIcon from "../assets/icons/right-arrow.png";
// import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

const style = {
  overflowY: "hidden",
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <>
      <ScrollMenu style={style}>
        {data.map((item) => (
          <Box
            key={item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {isBodyPart ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </>
  );
};

export default HorizontalScrollbar;
