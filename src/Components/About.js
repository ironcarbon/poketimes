import React from 'react';
import Rainbow from '../hoc/Rainbow';

const about= () => {
    return(
        <div className="container">
            <h4 className= "center">About</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit amet cum laboriosam totam id dicta tempore est distinctio delectus voluptates autem, eos ratione, dolorum necessitatibus eius, reprehenderit commodi enim voluptatem?</p>
        </div>
    )
}

export default Rainbow(about);