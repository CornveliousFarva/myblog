import React from "react";
import { Link } from 'react-router-dom';
import Chip from './Chip';
import '../index.css';

const BlogItem = ({blog, content}) => {
    return(
        <div className="blogItem-wrap">
            <Link></Link>
            <Chip></Chip>
        </div>
    );
};

export default BlogItem;

