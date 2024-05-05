import React, { useEffect,useState} from 'react';
import { useContext } from 'react';
import { Mycontext } from "../context/MyContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const Course = () => {
  const { courses, fetchedData } = useContext(Mycontext);
  const [currentindex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchedData();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(currentindex === 0 ? courses.length - 1 : currentindex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentindex === courses.length - 1 ? 0 : currentindex + 1);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * courses.length);
    setCurrentIndex(randomIndex);
  };

  const { name, price, description } = courses[currentindex] || {};

  return (
    <>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Button variant="contained" style={{ marginBottom: "15px" }} onClick={handleRandom} >Random Kurs əlavə et</Button>
      <div style={{ display: "flex", flexDirection: "row",alignItems:"center",padding:"0px 10px"}}>
        <Button variant="contained" style={{marginRight: "15px",padding:"10px 5px"}} onClick={handleRandom} >  <FaChevronLeft onClick={handlePrevious} /> </Button>
        <Card sx={{ minWidth: 275 }} className='card' key={currentindex}>
          <CardContent >
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {price} &#x20bc;
            </Typography>
            <Typography variant="body2">
              {description}
            </Typography>
          </CardContent>
        </Card>
        <Button variant="contained" className='nextbtn' style={{marginLeft: "15px",padding:"10px 5px"}} onClick={handleRandom} >  <FaChevronRight onClick={handleNext} /> </Button> 
      </div>
      </div>
    </>
  );
}

export default Course;
