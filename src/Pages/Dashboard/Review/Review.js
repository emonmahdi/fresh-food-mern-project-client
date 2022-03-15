import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../Components/hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const Review = () => {
    const [value, setValue] = React.useState(1);
    const [reviewText, setReviewText] = React.useState({})
    const {user} = useAuth()

    const handleOnBlur = (e) => {
        const value = e.target.value
        const field = e.target.name
        const newData = { ...reviewText }
        newData[field] = value;
        setReviewText(newData)
        e.preventDefault()
    }

    const onSubmitReview = (e) => {
        const review = {
            ...reviewText,
            star: value,
            customerName: user?.displayName
        }
        axios.post('http://localhost:5000/review', review)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Reviewed Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                  });
            }
        });
        e.preventDefault(); 
    }

    return (
        <Box
        sx={{
          '& > legend': { mt: 2 }
        }} style={{textAlign: 'left', width:'100%', margin:'0 auto', background:'#eee', padding: '20px'}}
        >
        <Typography variant='text' component='h5'>Give Your Review </Typography>

        <form onSubmit={onSubmitReview}>

      
        <TextField style={{width:'50%', margin: '10px 0'}}
          id="outlined-helperText"
          label="Riview text here"
          name="comment"
          onBlur={handleOnBlur}  
        />
        <br />
        <Typography component="legend"></Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        /> 
        <br />
        <Button type='submit' variant='contained'>Add Review</Button>
        </form>
      </Box>
    );
};

export default Review;