import {Autocomplete, createFilterOptions, IconButton, Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import {usersService} from "../../services";
import TextField from "@mui/material/TextField";



const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.name,
});

const Search = () => {

    const [searchName, setSearchName] = useState('');
    // const filterUser = data.filter(
    //     user => {
    //         return user
    //             .name
    //             .toLowerCase()
    //             .includes(searchName.toLowerCase())
    //     }
    // )
    // const handleChange = e =>{
    //     setSearchName(e.target.value)
    // }



    useEffect(() => {

        usersService.getAll().then(({data}) => {
            setSearchName(data.data);
            console.log(data)
        });
    }, []);

    // const filterData = (query, setSearchName) => {
    //     if (!query) {
    //         return setSearchName;
    //     } else {
    //         return setSearchName.filter((d) => d.toLowerCase().includes(query));
    //     }
    // };



    return(


    <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete

            freeSolo
            id="free-solo-2-demo"
            getOptionLabel={(option) => option.name}
             options={searchName}
            filterOptions={filterOptions}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                    }}
                />


            )}
        />

</Stack>
        )

    }
    export default Search