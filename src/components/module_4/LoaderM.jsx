import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const LoaderM = () => {
  return (
    <div> <InfinitySpin
    visible={true}
    width="200"
    color="#61d45a"
    ariaLabel="infinity-spin-loading"
/>
</div>
  )
}

export default LoaderM