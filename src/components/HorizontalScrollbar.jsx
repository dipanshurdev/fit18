import { Box } from "@mui/material";
import React from "react";
import BodyPart from "./BodyPart";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { bodyPartImages } from "../assets/images";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
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

const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
  isBodyPart,
  images,
}) => {
  return (
    <>
      <ScrollMenu style={style}>
        {data.map((item, id) => (
          <Box
            key={item}
            itemID={item.id || item}
            title={item.id || item}
            sx={{ m: { lg: "0 40px", xs: "0 30px" } }}
          >
            {isBodyPart ? (
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                images={bodyPartImages[id]}
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
