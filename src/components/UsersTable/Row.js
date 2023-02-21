import {Fragment, useState} from "react";

import {Collapse, TableCell, TableRow} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Row = ({ row, users }) => {
    const [open, setOpen] = useState(false);
const [comment, setComment]= useState('')



    const handleComment = document.body.onkeyup = async  function (event) {
        let e = event || window.event;
       if(e.keyCode === 13) {
           {
               setComment(event.target.value)
           }
            console.log(event.target.value, "value")
    }}




    return (
        <>
            <Fragment>
                <TableRow
                    onClick={() => setOpen(!open)}
                    key={users._id}
                    sx={{ "& > *": { borderBottom: "unset" } }}
                >
                    <TableCell component="th" scope="row">
                        {row._id}
                    </TableCell>
                    <TableCell align="right">{row.course}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.surname}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">{row.course_format}</TableCell>
                    <TableCell align="right">{row.course_type}</TableCell>
                    <TableCell align="right">{row.created_at}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.sum}</TableCell>
                    <TableCell align="right">{row.already_paid}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }} display={"flex"} justifyContent={"space-between"} alignItems={'center'}>
                                <Typography variant="h6" gutterBottom component="div">
                                    <div>Message: {row.msg} </div>
                                        ___________________
                                    <p>utm: {row.utm}</p>
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    label="comment"
                                    onSubmit={handleComment}
                                />
                                <p>{comment}</p>

                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </Fragment>
        </>
    );
};

export default Row