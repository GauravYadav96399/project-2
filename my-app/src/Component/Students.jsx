//import EditIcon from "@mui/icons-material/EditIcon";
import DeleteIcon from '@mui/icons-material/Delete';
import StudentList from './StudentList';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link, Outlet } from "react-router-dom";

const Students = (props) => {
  console.log(props)
  const handleDelete = () => {
    // delete item code
    console.log("item deleted!");
  };
  return (
    <Grid sm={3} item>
      <Paper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" gutterBottom>
            Subroto Biswas
          </Typography>
           <IconButton component={Link} to="/students/:id">
            <Outlet></Outlet>
            <VisibilityIcon />
          </IconButton> 
        </Box>
        <Typography variant="caption">+91 111 1111 111</Typography>
        <Typography variant="caption">toofanicoder@example.com</Typography>
        <Typography variant="caption">Ranchi,Jharkhand</Typography>
        {/* <Button
          component={Link}
          to="/students/100/edit"
          variant="outlined"
          startIcon={<EditIcon />}
        >
          Edit
        </Button> */}
        {/* <Button startIcon={<DeleteOutlineIcon />} onClick={handleDelete}>
          delete
        </Button> */}
      </Paper>
    </Grid>
  );
};

export default Students;