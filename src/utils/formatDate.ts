/* eslint-disable @typescript-eslint/no-unused-vars */
import dayjs from "dayjs";


const format = 'DD MMM YYYY';
const formatInputDateAndTime = 'DD/MM/YYYY HH:mm:ss';
const formatOutputDateAndTime = 'DD MMM YYYY HH:mm:ss';
const formatOutputDate = 'DD MMM YYYY';
const formatOutputTime = 'HH:mm:ss';
const formatDDMMMMYYYYY = 'DD MMMM YYYY';
const formatOutputHHMM = 'DD MMM YYYY HH:mm';
const formatHours = 'hh:mm A';
const formatOutputAMPM = 'DD MMM YYYY h:mm A';
const formatOutputDateAndTimeWithoutSecond = 'DD MMM YYYY hh:mm';
const formatDateHaveDash = 'DD-MM-YYYY';

// output: 13 December 2023
// input:  2023-12-13T09:27:16.139Z
export const formatCodeDDMMMMYYYYY = (date: Date) => {
  try {
    return dayjs(date).format(formatDDMMMMYYYYY);
  } catch (error) {
    return '';
  }
};

// output: 29 Nov 2023
// input:  2023-11-29T06:11:39.028Z
export const formatCode = (date: Date) => {
  try {
    return dayjs(date).format(format);
  } catch (error) {
    return '';
  }
};

// output: 29 Nov 2023 02:43:01
// input:  12/07/2566 13:07:47+07:00
export const formatDateAndTimeFromThaiDelivery = (date: string) => {
  try {
    return dayjs(date, formatInputDateAndTime).format(formatOutputDateAndTime);
  } catch (error) {
    return '';
  }
};

// output: 29 Nov 2023
// input:  2023-11-29T06:11:39.028Z
export const formatDate = (date: string) => {
  try {
    return dayjs(date).format(formatOutputDate);
  } catch (error) {
    return '';
  }
};

// output: 29 Nov 2023
// input:  12/07/2566 13:07:47+07:00
export const formatDateFromThaiDelivery = (date: string) => {
  try {
    return dayjs(date, formatInputDateAndTime).format(formatOutputDate);
  } catch (error) {
    return '';
  }
};

// output: 02:43:01
// input:  12/07/2566 13:07:47+07:00
export const formatTimeFromThaiDelivery = (date: string) => {
  try {
    return dayjs(date, formatInputDateAndTime).format(formatOutputTime);
  } catch (error) {
    return '';
  }
};

// output: 29 Nov 2023 02:43
// input:  12/07/2566 13:07:47+07:00
export const formatTimeOutputHHMM = (date: Date) => {
  try {
    return dayjs(date).format(formatOutputHHMM);
  } catch (error) {
    return '';
  }
};

// output: 01:07 PM
// input:  12/07/2566 13:07:47+07:00
export const formatTimeHours = (date: string) => {
  try {
    return dayjs(date).format(formatHours);
  } catch (error) {
    return '';
  }
};

// output: 29 Nov 2023 01:07 PM
// input:  2023-11-29T06:11:39.028Z
export const formatTimeAMPM = (date: string) => {
  try {
    return dayjs(date).format(formatOutputAMPM);
  } catch (error) {
    return '';
  }
};

// output: 29 Nov 2023 01:07
// input:  2023-11-29T06:11:39.028Z
export const formatDateAndTimeWithoutSecond = (date: string) => {
  try {
    return dayjs(date).format(formatOutputDateAndTimeWithoutSecond);
  } catch (error) {
    return '';
  }
};

// output: 29-11-2023
// input:  2023-11-29T06:11:39.028Z
export const formatDateDash = (date: Date) => {
  try {
    return dayjs(date).format(formatDateHaveDash);
  } catch (error) {
    return '';
  }
};
