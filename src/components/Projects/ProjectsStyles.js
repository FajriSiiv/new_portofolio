import styled from "styled-components";

// BARU

export const FlexContainer = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const Card = styled.div({
  width: "30%",
  height: "320px",
  maxHeight: "500px",
  background: "#131c2d",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  padding: "20px 15px",
  alignItems: "center",
  borderRadius: "3px",

  "&:hover": {
    scale: "1.1",
    transform: "translateY(-10px)",
  },
  "@media (max-width:850px)": {
    width: "40%",
  },
  "@media (max-width:500px)": {
    width: "100%",
    maxWidth: 300,
    height: 300,
  },
});

export const Title = styled.h2({
  fontSize: 25,
  background: "#131c2d",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
  "@media (max-width:500px)": {
    fontSize: "18px",
  },
});

export const Desc = styled.p({
  fontSize: 14,
  fontWeight: "400",
  textAlign: "center",
  marginBottom: "20px",
  lineHeight: "20px",
  "@media (max-width:500px)": {
    fontSize: "13px",
  },
});

export const Tags = styled.p({
  padding: "5px 10px",
  background: "#293347",
  color: "white",
  margin: "5px",
  fontSize: 12,
  width: "max-content",
  fontWeight: "600",
  letterSpacing: "1px",
  borderRadius: "2px",
});

export const DivTags = styled.div({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});

export const LinkS = styled.a({
  margin: "10px 5px 0 5px",
  padding: 5,
  background: "#5a5f6f",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  border: "1px solid #5a5f6f",
  cursor: "pointer",
  "& svg": {
    width: 20,
    height: 20,
    color: "white",
  },
  "&:hover": {
    background: "#0f1624",
    border: "1px solid #ffffff1e",
  },
});
// LAMA

// export const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   overflow: hidden;
// `;

// export const GridContainer = styled.section`
//   display: grid;
//   grid-template-columns: repeat(3, minmax(200px, 1fr));
//   padding: 3rem;
//   place-items: center;
//   column-gap: 2rem;
//   row-gap: 3rem;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     display: flex;
//     flex-direction: column;
//     padding: 2rem;
//     padding-bottom: 0;
//   }
// `;
// export const BlogCard = styled.div`
//   border-radius: 10px;
//   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.51), 0 2px 2px rgba(0, 0, 0, 0.31),
//     0 4px 4px rgba(0, 0, 0, 0.21), 0 6px 8px rgba(0, 0, 0, 0.11),
//     0 8px 16px rgba(0, 0, 0, 0.11);
//   text-align: center;
//   width: 30%;
//   height: 300px;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     width: 100%;
//   }
// `;
// export const TitleContent = styled.div`
//   text-align: center;
//   z-index: 20;
//   width: 100%;
//   font-size: 1.3em;
// `;

// export const HeaderThree = styled.h3`
//   font-weight: 500;
//   letter-spacing: 2px;
//   color: #9cc9e3;
//   padding: 0.5rem 0;
//   font-size: ${(props) => (props.title ? "3rem" : "2rem")};
// `;

// export const Hr = styled.hr`
//   width: 50px;
//   height: 3px;
//   margin: 20px auto;
//   border: 0;
//   background: #d0bb57;
// `;

// export const Intro = styled.div`
//   width: 170px;
//   margin: 0 auto;
//   color: #dce3e7;
//   font-family: "Droid Serif", serif;
//   font-size: 13px;
//   font-style: italic;
//   line-height: 18px;
// `;

// export const CardInfo = styled.p`
//   width: 100%;
//   padding: 0 50px;
//   color: #e4e6e7;
//   font-style: 2rem;
//   line-height: 24px;
//   text-align: justify;
//   @media ${(props) => props.theme.breakpoints.sm} {
//     padding: 0.3rem;
//   }
// `;

// export const UtilityList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   display: flex;
//   justify-content: space-around;
//   margin: 2.5rem 0;
// `;

// export const ExternalLinks = styled.a`
//   color: #001d3d;
//   font-size: 1.6rem;
//   padding: 1rem 1.5rem;
//   background: #ffd60a;
//   border-radius: 15px;
//   transition: 0.5s;
//   font-weight: bold;
//   &:hover {
//     background: #ffc300;
//   }
// `;

// export const TagList = styled.ul`
//   display: flex;
//   justify-content: space-around;
//   padding: 2rem;
// `;
// export const Tag = styled.li`
//   color: #d8bfbf;
//   font-size: 1.5rem;
// `;
