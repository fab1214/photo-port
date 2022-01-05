import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

const About = () => {
    return (
        // React createElement(html element you wish to create, props (objects), remaining child elements)
        // React createElement("section", {}, [
        // React createElement("h1 id = 'about'", {}, "Who Am I?"),
        <section className='my-5'>
            <h1 id = 'about'>Who Am I?</h1>
            <img src = {coverImage} className='my-2' style={{width: "100%"}} alt="cover" />
            <p>hihihihihihihi</p>
        </section>
    )
}

export default About;