import SHoP from "../assets/H_1.jpg";
// import H2 from "../assets/H_2.jpg";
import H3 from "../assets/H_3.jpg";
import KDX from "../assets/H_4.jpg";
import H5 from "../assets/H_5.jpg";
import H6 from "../assets/H_6.jpg";
import H7 from "../assets/H_7.jpg";
// import H8 from "../assets/H_8.jpg";

const ProjectsArray = [
  {
    id: 1,
    name: "WeWork - KDX",
    image: KDX,
    location: "Tokyo, Japan",
    filterTag: "3d-vr",
    path: "/wework-tokyo"
  },

  {
    id: 2,
    name: "SHoP Architects",
    image: SHoP,
    location: "New York, NY",
    filterTag: "3d-vr",
    path: "/shop-architects"
  },

  {
    id: 3,
    name: "Tiffany and Co. - LVMH",
    image: H7,
    location: "New York, NY",
    filterTag: "ux",
    path: "/tco"
  },

  {
    id: 4,
    name: "Waste of Time",
    image: H3,
    location: "New York, NY",
    filterTag: "web",
    path: "/waste-of-time" 
  },

  {
    id: 5,
    name: "WeWork - Lord & Taylor",
    image: H5,
    location: "New York, NY",
    filterTag: "ux",
    path:"/wework-tokyo"
  },
  {
    id: 6,
    name: "KXL",
    image: H6,
    location: "New York, NY",
    filterTag: "3d-vr",
    path:"/kxl"
  },
  {
    id: 7,
    name: "WeWork - Chicago",
    image: H7,
    location: "Chicago, IL",
    filterTag: "3d-vr",
    path:"/vr-chicago"
  },
  {
    id: 8,
    name: "WeWork - Pacific Center",
    image: H3,
    location: "Los Angeles, CA",
    filterTag: "3d-vr",
    path: "/vr-la" 
  },
  {
    id: 9,
    name: "WeWork - Jongro Tower",
    image: H3,
    location: "Seoul, Korea",
    filterTag: "3d-vr",
    path: "/vr-seoul" 
  },
  {
    id: 10,
    name: "WeWork - DC",
    image: H3,
    location: "Washington DC",
    filterTag: "3d-vr",
    path: "/vr-dc" 
  },
];


// function to filter array
export default ProjectsArray;