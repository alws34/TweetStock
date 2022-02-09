import React from 'react';
import { IconButton } from '@mui/material'
import ArrowBackIcon  from '@mui/icons-material/ArrowBack'
import { useNavigate } from "react-router-dom";

export default function ArrowBack() {
    const navigate = useNavigate();

    return (
      <div> 
        <IconButton onClick={() => navigate("/")} aria-label="arrowBack">
            <ArrowBackIcon fontSize="large"/>
        </IconButton>
      </div>
    )
}