import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';

const TimeDurationPicker = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const handleHoursChange = (event) => {
    setHours(event.target.value);
  };

  const handleMinutesChange = (event) => {
    setMinutes(event.target.value);
  };

  const hoursOptions = Array.from({ length: 24 }, (_, i) => i);
  const minutesOptions = Array.from({ length: 60 }, (_, i) => i);

  return (
    <Box>
      <Box display="flex" gap={2} alignItems="center" mb={2}>
        <FormControl>
          <InputLabel id="hours-label">Hours</InputLabel>
          <Select
            labelId="hours-label"
            value={hours}
            onChange={handleHoursChange}
            label="Hours"
          >
            {hoursOptions.map((hour) => (
              <MenuItem key={hour} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="minutes-label">Minutes</InputLabel>
          <Select
            labelId="minutes-label"
            value={minutes}
            onChange={handleMinutesChange}
            label="Minutes"
          >
            {minutesOptions.map((minute) => (
              <MenuItem key={minute} value={minute}>
                {minute}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      
      <Typography variant="h6">
        Total Duration: {hours} hours and {minutes} minutes
      </Typography>
    </Box>
  );
};

const Try = TimeDurationPicker;

export default Try;

