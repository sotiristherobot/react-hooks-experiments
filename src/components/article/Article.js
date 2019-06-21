import React from "react";

export default function Article(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}