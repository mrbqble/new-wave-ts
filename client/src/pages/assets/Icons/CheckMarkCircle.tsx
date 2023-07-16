import React from 'react'

interface IconType {
  fill?: string,
  opacity?: string
}
const CheckCircle = ({fill, opacity}: IconType) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5ZM8.75 11.4393L13.2197 6.96967C13.5126 6.67678 13.9874 6.67678 14.2803 6.96967C14.5466 7.23594 14.5708 7.6526 14.3529 7.94621L14.2803 8.0303L9.2803 13.0303C9.0141 13.2966 8.5974 13.3208 8.3038 13.1029L8.2197 13.0303L5.71967 10.5303C5.42678 10.2374 5.42678 9.7626 5.71967 9.4697C5.98594 9.2034 6.4026 9.1792 6.69621 9.3971L6.78033 9.4697L8.75 11.4393L13.2197 6.96967L8.75 11.4393Z" fill={fill || "black"} fill-opacity={opacity || "0.65"} />
    </svg>    
    )
}

export default CheckCircle;